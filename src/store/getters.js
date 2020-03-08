export default {
  drugs: state => {
    return state.drugs.sort();
  },
  herbs: state => {
    return state.herbs.sort();
  },

  selectedDrugs: state => {
    return state.selectedDrugs;
  },
  selectedHerbs: state => {
    return state.selectedHerbs;
  },

  results: state => {
    return state.results;
  },
  loading: state => {
    return state.loading;
  },
  isResultUpToDate: state => {
    return state.isResultUpToDate;
  }
};
