using UnityEngine;

using System;
using System.Collections.Generic;

using BattleTech;

using MissionControl.Rules;
using MissionControl.EncounterFactories;

namespace MissionControl.Logic {
  public class AddCustomPlayerLanceExtraSpawnPoints : ChunkLogic {
    public AddCustomPlayerLanceExtraSpawnPoints() { }

    public override void Run(RunPayload payload) {
      Main.Logger.Log($"[AddCustomPlayerLanceExtraSpawnPoints] Adding extra player lance spawn points to handle more player units");
      Contract contract = MissionControl.Instance.CurrentContract;
      GameObject playerSpawnGo = GetPlayerSpawn();
      IncreaseLanceSpawnPoints(playerSpawnGo);
    }

    private void IncreaseLanceSpawnPoints(GameObject playerSpawnGo) {
      SpawnableUnit[] lanceUnits = MissionControl.Instance.CurrentContract.Lances.GetLanceUnits(EncounterRules.PLAYER_TEAM_ID);
      Main.Logger.Log($"[AddCustomPlayerLanceExtraSpawnPoints] '{lanceUnits.Length}' player lance units are being sent to Mission Control by Bigger Drops.");
      List<GameObject> unitSpawnPoints = playerSpawnGo.FindAllContains("SpawnPoint");

      for (int i = unitSpawnPoints.Count; i < lanceUnits.Length; i++) {
        CreateSpawn(i + 1, playerSpawnGo, unitSpawnPoints);
      }
    }

    private void CreateSpawn(int spawnNumber, GameObject playerSpawnGo, List<GameObject> unitSpawnPoints) {
      Vector3 randomLanceSpawn = unitSpawnPoints.GetRandom().transform.localPosition;
      Vector3 spawnPositon = SceneUtils.GetRandomPositionFromTarget(randomLanceSpawn, 24, 100);
      spawnPositon = spawnPositon.GetClosestHexLerpedPointOnGrid();

      int failSafe = 0;
      while (spawnPositon.IsTooCloseToAnotherSpawn()) {
        spawnPositon = SceneUtils.GetRandomPositionFromTarget(randomLanceSpawn, 24, 100);
        spawnPositon = spawnPositon.GetClosestHexLerpedPointOnGrid();
        if (failSafe > 20) break;
        failSafe++;
      }

      Main.Logger.Log($"[AddCustomPlayerLanceExtraSpawnPoints] Creating lance 'Player Lance' spawn point 'UnitSpawnPoint{spawnNumber}'");
      LanceSpawnerFactory.CreateUnitSpawnPoint(playerSpawnGo, $"UnitSpawnPoint{spawnNumber}", spawnPositon, Guid.NewGuid().ToString());
    }
  }
}