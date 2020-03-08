import Axios from "axios";

const getPairInteractions = async (drug, herb) => {
  const url = "http://127.0.0.1:8000/search/look/?search=";
  try {
    const data = await Axios.get(`${url}${drug},${herb}`);
    return data.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const highestIntensity = intensities => {
  const names = ["forte", "moyenne", "faible", "inconnue", "aucune"];
  for (const name of names) {
    if (intensities.includes(name)) {
      return name;
    }
  }
};

const addInteractionToResut = async (results, drug, herb) => {
  const pair = await getPairInteractions(drug, herb);
  if (Array.isArray(pair) && pair.length > 0) {
    const intensities = [];
    const interactions = [];
    for (const interaction of pair) {
      intensities.push(
        interaction["intensite_plante"],
        interaction["intensite_med"]
      );
      interactions.push({
        drugIntensity: interaction["intensite_med"],
        herbIntensity: interaction["intensite_plante"],
        drugEffect: interaction["effets_med"],
        herbEffect: interaction["effets_plante"],
        consequence: interaction["consequence"]
      });
    }
    results.push({
      drug,
      herb,
      intensity: highestIntensity(intensities),
      interactions
    });
  }
};

export default {
  async queryDB({ commit, state }) {
    const results = [];
    commit("updateLoading", true);
    commit("updateResults", results);
    for (const drug of state.selectedDrugs) {
      for (const herb of state.selectedHerbs) {
        await addInteractionToResut(results, drug, herb);
        commit("updateResults", results);
      }
    }
    commit("updateLoading", false);
    commit("updateIsResultUpToDate", true);
  },

  updateSelectedDrugs({ commit }, selectedDrugs) {
    commit("updateSelectedDrugs", selectedDrugs);
  },
  updateSelectedHerbs({ commit }, selectedHerbs) {
    commit("updateSelectedHerbs", selectedHerbs);
  }
};
