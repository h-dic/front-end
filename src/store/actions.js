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

const highestIntensity = (intensities, state) => {
  const names = state.intensities.map(intensity => intensity.name);
  for (const name of names) {
    if (intensities.includes(name)) {
      return name;
    }
  }
};

const addInteractionToResut = async (results, drug, herb, state) => {
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
      intensity: highestIntensity(intensities, state),
      interactions
    });
  }
};

export default {
  async queryPair({ commit, state }) {
    const results = [];
    commit("updateLoading", true);
    commit("updateResults", results);
    for (const drug of state.selectedDrugs) {
      for (const herb of state.selectedHerbs) {
        await addInteractionToResut(results, drug, herb, state);
        commit("updateResults", results);
      }
    }
    commit("updateLoading", false);
    commit("updateIsResultUpToDate", true);
  },

  async queryDrugs({ commit }) {
    const url = "http://localhost:8000/search/apiDrugs/";
    try {
      const data = await Axios.get(url);
      const drugs = data.data.results.map(item => item["nom_drug"]);
      console.log(drugs);
      commit("updateDrugs", drugs);
    } catch (error) {
      console.log(error);
    }
  },
  async queryHerbs({ commit }) {
    const url = "http://localhost:8000/search/apiHerbs/";
    try {
      const data = await Axios.get(url);
      const herbs = data.data.results.map(item => item["nom_herb"]);
      console.log(herbs);
      commit("updateHerbs", herbs);
    } catch (error) {
      console.log(error);
    }
  },

  updateSelectedDrugs({ commit }, selectedDrugs) {
    commit("updateSelectedDrugs", selectedDrugs);
  },
  updateSelectedHerbs({ commit }, selectedHerbs) {
    commit("updateSelectedHerbs", selectedHerbs);
  }
};
