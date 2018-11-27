using System.Collections.Generic;
using System.IO;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using BattleTech;
using BattleTech.Designed;
using BattleTech.Framework;

using HBS.Data;

using MissionControl.Data;

namespace MissionControl {
  public class DataManager {
    private static DataManager instance;
    public static DataManager Instance {
      get {
        if (instance == null) instance = new DataManager();
        return instance;
      }
    }

    public bool HasLoadedDeferredDefs { get; private set; } = false;
    public string ModDirectory { get; private set; }
    private Dictionary<string, MLanceOverride> LanceOverrides { get; set; } = new Dictionary<string, MLanceOverride>();

    private List<string> Genders = new List<string>{ "Male", "Female", "Unspecified" };
    private Dictionary<string, Dictionary<string, List<string>>> FirstNames = new Dictionary<string, Dictionary<string, List<string>>>(); // e.g. <Male, <FactionName, [list of names]>>
    private Dictionary<string, List<string>> LastNames = new Dictionary<string, List<string>>();  // e.g. <All, [list of names]>
    private Dictionary<string, List<string>> Ranks = new Dictionary<string, List<string>>();      // e.g. <FactionName, [list of ranks]>
    private Dictionary<string, List<string>> Portraits = new Dictionary<string, List<string>>();  // e.g. <Male, [list of male portraits]

    private Dictionary<string, Dictionary<string, List<string>>> Dialogue = new Dictionary<string, Dictionary<string, List<string>>>();

    private DataManager() {}

    public void Init(string modDirectory) {
      ModDirectory = modDirectory;
      LoadLanceOverrides();
      LoadRuntimeCastData();
      LoadDialogueData();
    }

    public void LoadDeferredDefs() {
      LoadVehicleDefs();
      HasLoadedDeferredDefs = true;
    }

    private void LoadLanceOverrides() {
      foreach (string file in Directory.GetFiles($"{ModDirectory}/lances", "*.json")) {
        string lanceData = File.ReadAllText(file);
        MLanceOverrideData lanceOverrideData = JsonConvert.DeserializeObject<MLanceOverrideData>(lanceData);

        if (lanceOverrideData.LanceKey != null) {
          LanceOverrides.Add(lanceOverrideData.LanceKey, new MLanceOverride(lanceOverrideData));

          Main.Logger.Log($"[DataManager] Loaded lance override '{lanceOverrideData.LanceKey}'");

          /*
          if (Main.Settings.DebugMode) {
            Main.Logger.Log($"[DataManager] Lance def id '{lanceOverrideData.LanceDefId}'");
            Main.Logger.Log($"[DataManager] Lance Tag Set items '{string.Join(",", lanceOverrideData.LanceTagSet.Items)}' and source file '{lanceOverrideData.LanceTagSet.TagSetSourceFile}'");
            Main.Logger.Log($"[DataManager] Lance Excluded Tag Set items '{string.Join(",", lanceOverrideData.LanceExcludedTagSet.Items)}' and source file '{lanceOverrideData.LanceExcludedTagSet.TagSetSourceFile}'");
            Main.Logger.Log($"[DataManager] Spawn Effect Tags items '{string.Join(",", lanceOverrideData.LanceTagSet.Items)}' and source file '{lanceOverrideData.LanceTagSet.TagSetSourceFile}'");

            foreach (MUnitSpawnPointOverrideData unitSpawnPointOverrideData in lanceOverrideData.UnitSpawnPointOverride) {
              Main.Logger.Log($"[DataManager] Unit type '{unitSpawnPointOverrideData.UnitType}'");
              Main.Logger.Log($"[DataManager] Unit def id '{unitSpawnPointOverrideData.UnitDefId}'");
              Main.Logger.Log($"[DataManager] Unit Tag Set items '{string.Join(",", unitSpawnPointOverrideData.UnitTagSet.Items)}' and source file '{unitSpawnPointOverrideData.UnitTagSet.TagSetSourceFile}'");
              Main.Logger.Log($"[DataManager] Unit Excluded Tag Set items '{string.Join(",", unitSpawnPointOverrideData.UnitExcludedTagSet.Items)}' and source file '{unitSpawnPointOverrideData.UnitExcludedTagSet.TagSetSourceFile}'");
              Main.Logger.Log($"[DataManager] Spawn Effect Tags items '{string.Join(",", unitSpawnPointOverrideData.SpawnEffectTags.Items)}' and source file '{unitSpawnPointOverrideData.SpawnEffectTags.TagSetSourceFile}'");
              Main.Logger.Log($"[DataManager] Pilot def id '{unitSpawnPointOverrideData.PilotDefId}'");
              Main.Logger.Log($"[DataManager] Pilot Tag Set items '{string.Join(",", unitSpawnPointOverrideData.PilotTagSet.Items)}' and source file '{unitSpawnPointOverrideData.PilotTagSet.TagSetSourceFile}'");
              Main.Logger.Log($"[DataManager] Pilot Excluded Tag Set items '{string.Join(",", unitSpawnPointOverrideData.PilotExcludedTagSet.Items)}' and source file '{unitSpawnPointOverrideData.PilotExcludedTagSet.TagSetSourceFile}'");
            }
          }
          */
        } else {
          Main.Logger.LogError($"[DataManager] Json format is wrong. Read the documentation on the lance override format.");
        }
      }
    }

    private bool LoadDirectLanceReference(string key) {
      BattleTech.Data.DataManager dataManager = UnityGameInstance.BattleTechGame.DataManager;
      if (dataManager.ResourceEntryExists(BattleTechResourceType.LanceDef, key)) {
        Main.Logger.Log($"[LoadDirectLanceReference] Lance definition of '{key}' exists but has not been loaded yet. Loading it. [Experimental: If a crash occurs after this please report it]");
        dataManager.RequestNewResource(BattleTechResourceType.LanceDef, key);
        dataManager.ProcessRequests();
        return true;
      }
      
      Main.Logger.Log($"[LoadDirectLanceReference] No direct lance reference found for '{key}'");
      return false;
    }

    public bool DoesLanceOverrideExist(string key) {
      if (LanceOverrides.ContainsKey(key)) return true;
      if (UnityGameInstance.BattleTechGame.DataManager.LanceDefs.Exists(key)) return true;
      return LoadDirectLanceReference(key);
    }

    public LanceOverride GetLanceOverride(string key) {
      IDataItemStore<string, LanceDef> lanceDefs = UnityGameInstance.BattleTechGame.DataManager.LanceDefs;
      
      if (LanceOverrides.ContainsKey(key)) {
        Main.Logger.Log($"[GetLanceOverride] Found a lance override for '{key}'");
        return LanceOverrides[key];
      }

      LanceDef lanceDef = null;
      lanceDefs.TryGet(key, out lanceDef);
      if (lanceDef != null) {
        MLanceOverride lanceOverride = new MLanceOverride(lanceDef);
        LanceOverrides.Add(lanceOverride.lanceDefId, lanceOverride);
        Main.Logger.Log($"[GetLanceOverride] Found a lance def for '{key}', creating and caching a lance override for it. Using defaults of 'adjustedDifficulty - 0' and no 'spawnEffectTags'");
        return lanceOverride;
      }

      return null;
    }

    public void LoadVehicleDefs() {
      BattleTech.Data.DataManager dataManager = UnityGameInstance.BattleTechGame.DataManager;
      dataManager.RequestNewResource(BattleTechResourceType.VehicleDef, "vehicledef_DEMOLISHER");
    }

    /* RUNTIME CREW NAMES */
    public void LoadRuntimeCastData() {
      LoadCastFirstNames();
      LoadCastLastNames();
      LoadCastRanks();
      LoadPortraits();
    }

    private void LoadCastFirstNames() {
      string firstNameJson = File.ReadAllText($"{ModDirectory}/cast/FirstNames.json");
      MCastFirstNames firstNames = JsonConvert.DeserializeObject<MCastFirstNames>(firstNameJson);
      this.FirstNames.Add("All", firstNames.All);
      this.FirstNames.Add("Male", firstNames.Male);
      this.FirstNames.Add("Female", firstNames.Female);
    }

    private void LoadCastLastNames() {
      string lastNameJson = File.ReadAllText($"{ModDirectory}/cast/LastNames.json");
      this.LastNames = JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(lastNameJson);
    }

    private void LoadCastRanks() {
      string rankJson = File.ReadAllText($"{ModDirectory}/cast/Ranks.json");
      this.Ranks = JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(rankJson);
    }

    private void LoadPortraits() {
      string portraitJson =  File.ReadAllText($"{ModDirectory}/cast/Portraits.json");
      this.Portraits = JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(portraitJson);
    }

    public string GetRandomGender() {
      return Genders[UnityEngine.Random.Range(0, Genders.Count)];
    }

    public string GetRandomFirstName(string gender, string factionKey) {
      List<string> names = new List<string>();
      names.AddRange(this.FirstNames["All"]["All"]);
      if (gender == "Male" || gender == "Female") {
        Dictionary<string, List<string>> genderNames = this.FirstNames[gender];
        names.AddRange(genderNames["All"]);
        if (genderNames.ContainsKey(factionKey)) names.AddRange(genderNames[factionKey]);
      }

      return names[UnityEngine.Random.Range(0, names.Count)];
    }

    public string GetRandomLastName(string factionKey) {
      List<string> names = new List<string>();
      names.AddRange(this.LastNames["All"]);
      if (this.LastNames.ContainsKey(factionKey)) names.AddRange(this.LastNames[factionKey]);

      return names[UnityEngine.Random.Range(0, names.Count)];
    }

    public string GetRandomRank(string factionKey) {
      List<string> ranks = new List<string>();
      ranks.AddRange(this.Ranks["All"]);
      if (this.Ranks.ContainsKey(factionKey)) ranks.AddRange(this.Ranks[factionKey]);

      return ranks[UnityEngine.Random.Range(0, ranks.Count)];
    }

    public string GetRandomPortraitPath(string gender) {
      List<string> portraits = new List<string>();
      portraits.AddRange(this.Portraits["All"]);
      if (this.Portraits.ContainsKey(gender)) portraits.AddRange(this.Portraits[gender]);

      return portraits[UnityEngine.Random.Range(0, portraits.Count)];  
    }

    public void LoadDialogueData() {
      string allyDropJson = File.ReadAllText($"{ModDirectory}/dialogue/AllyDrop.json");
      Dialogue.Add("AllyDrop", JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(allyDropJson));
    }

    public string GetRandomDialogue(string type, string contractType, string contractSubType) {
      List<string> dialogues = new List<string>();

      if (Dialogue.ContainsKey(type)) {
        Dictionary<string, List<string>> dialogueOfType = Dialogue[type];

        if (dialogueOfType.ContainsKey("All")) dialogues.AddRange(dialogueOfType["All"]);
        if (dialogueOfType.ContainsKey(contractType)) dialogues.AddRange(dialogueOfType[contractType]);
        if (dialogueOfType.ContainsKey(contractSubType)) dialogues.AddRange(dialogueOfType[contractSubType]);

        return dialogues[UnityEngine.Random.Range(0, dialogues.Count)];  
      }

      return "Let's get them, Commander!";
    }

    public void Reset() {

    }
  }
}