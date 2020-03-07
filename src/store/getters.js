export default {
  patients: state => {
    return state.patients;
  },
  patientById: state => id => {
    return state.patients[id];
  },
  medicaments: state => {
    return state.medicaments;
  },
  plantes: state => {
    return state.plantes;
  }
};
