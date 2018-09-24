using UnityEngine;
using System;

using BattleTech.Designed;

namespace MissionControl.EncounterFactories {
  public class ChunkFactory {
    public static DestroyWholeLanceChunk CreateDestroyWholeLanceChunk() {
      GameObject encounterLayerGameObject = EncounterManager.GetInstance().EncounterLayerGameObject;
      GameObject destroyWholeLanceChunkGo = new GameObject("Chunk_DestroyWholeLance");
      destroyWholeLanceChunkGo.transform.parent = encounterLayerGameObject.transform;
      destroyWholeLanceChunkGo.transform.localPosition = Vector3.zero;

      return destroyWholeLanceChunkGo.AddComponent<DestroyWholeLanceChunk>();
    }
  }
}