export default {
  patients: state => {
    return state.patients;
  },
  patientById: state => id => {
    return state.patients[id];
  },
  drugs: state => {
    return state.drugs;
  },
  herbs: state => {
    return state.herbs;
  }
};
