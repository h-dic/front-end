export default {
  results: [],
  isResultUpToDate: true,
  loading: false,
  drugs: [
    "BEVACIZUMAB",
    "CETUXIMAB",
    "PANITUMUMAB",
    "CISPLATINE",
    "DACARBAZINE",
    "FER",
    "SULPIRIDE",
    "BENZYLPENICILLINE"
  ],
  herbs: [
    "Gingembre",
    "Séné",
    "Chardon-marie",
    "Thym",
    "Thé",
    "Millepertuis",
    "Romarin",
    "Eucalyptus"
  ],
  selectedDrugs: [],
  selectedHerbs: [],
  intensities: [
    { name: "forte", color: "red" },
    { name: "moyenne", color: "orange" },
    { name: "faible", color: "yellow" },
    { name: "inconnue", color: "purple" },
    { name: "aucune", color: "white" }
  ]
};
