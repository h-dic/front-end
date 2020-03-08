export default {
  updateResults(state, results) {
    state.results = results;
  },
  updateLoading(state, loading) {
    state.loading = loading;
  },
  updateIsResultUpToDate(state, isResultUpToDate) {
    state.isResultUpToDate = isResultUpToDate;
  },

  updateSelectedDrugs(state, selectedDrugs) {
    state.selectedDrugs = selectedDrugs;
    state.isResultUpToDate = false;
  },
  updateSelectedHerbs(state, selectedHerbs) {
    state.selectedHerbs = selectedHerbs;
    state.isResultUpToDate = false;
  },

  updateDrugs(state, drugs) {
    state.drugs = drugs;
  },
  updateHerbs(state, herbs) {
    state.herbs = herbs;
  }
};
