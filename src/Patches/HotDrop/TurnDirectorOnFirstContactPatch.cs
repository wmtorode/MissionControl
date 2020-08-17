using Harmony;

using System.Collections.Generic;

using BattleTech;

namespace MissionControl.Patches {
  [HarmonyPatch(typeof(TurnDirector), "OnFirstContact")]
  public class TurnDirectorOnFirstContactPatch {
    static void Postfix(TurnDirector __instance) {
      if (MissionControl.Instance.AllowMissionControl() && MissionControl.Instance.IsHotDropProtectionAllowed()) {
        Main.LogDebug($"[TurnDirectorOnFirstContactPatch Postfix] Patching OnFirstContact");
        Main.LogDebug($"[TurnDirectorOnFirstContactPatch Postfix] Current round is '{__instance.CurrentRound}'");
        Main.LogDebug($"[TurnDirectorOnFirstContactPatch Postfix] DoAnyUnitsHaveContactWithEnemy '{__instance.DoAnyUnitsHaveContactWithEnemy}'");
        if (__instance.CurrentRound == 0 && __instance.DoAnyUnitsHaveContactWithEnemy) ProtectHotDroppedLances();
      }
    }

    static void ProtectHotDroppedLances() {
      Main.Logger.Log($"[ProtectHotDroppedLances] Protecting hot dropped lances'");
      CombatGameState combatState = UnityGameInstance.BattleTechGame.Combat;
      Team playerTeam = combatState.LocalPlayerTeam;
      List<AbstractActor> allies = combatState.GetAllAlliesOf(playerTeam);

      // Includes player units
      List<AbstractActor> focusedActors = new List<AbstractActor>();
      focusedActors.AddRange(allies);

      if (!Main.Settings.HotDropProtection.IncludeAllyTurrets) {
        RemoveTurrets(allies);
      }

      if (Main.Settings.HotDropProtection.IncludeEnemies) {
        List<AbstractActor> enemies = combatState.GetAllEnemiesOf(playerTeam);

        if (!Main.Settings.HotDropProtection.IncludeEnemyTurrets) {
          RemoveTurrets(enemies);
        }

        focusedActors.AddRange(enemies);
      }

      if (Main.Settings.HotDropProtection.GuardOnHotDrop) BraceAll(focusedActors);
      if (Main.Settings.HotDropProtection.EvasionPipsOnHotDrop > 0) AddEvasion(focusedActors, Main.Settings.HotDropProtection.EvasionPipsOnHotDrop);
    }

    private static void RemoveTurrets(List<AbstractActor> actors) {
      for (int i = actors.Count - 1; i >= 0; i--) {
        AbstractActor actor = actors[i];
        if (actor is Turret) actors.Remove(actor);
      }
    }

    static void BraceAll(List<AbstractActor> actors) {
      foreach (AbstractActor actor in actors) {
        actor.ApplyBraced();
      }
    }

    static void AddEvasion(List<AbstractActor> actors, int evasionToAdd) {
      CombatGameState combatState = UnityGameInstance.BattleTechGame.Combat;
      Main.Logger.Log($"[ProtectHotDroppedLances] Adding '{evasionToAdd}' evasion pips");

      foreach (AbstractActor actor in actors) {
        actor.EvasivePipsCurrent += evasionToAdd;
        AccessTools.Property(typeof(AbstractActor), "EvasivePipsTotal").SetValue(actor, actor.EvasivePipsCurrent, null);
        combatState.MessageCenter.PublishMessage(new EvasiveChangedMessage(actor.GUID, actor.EvasivePipsCurrent));
      }
    }
  }
}