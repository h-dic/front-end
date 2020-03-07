import Axios from "axios";

export default {
  queryDB({ commit }, payload) {
    console.log("posts ...");
    const { drug, herb } = payload;
    console.log(drug);
    console.log(herb);
    Axios.get("https://localhost:3000/req1")
      .then(data => {
        console.log(data);
        const result = data;
        commit("add_result", result);
      })
      .catch(error => console.log(error));
  }
};
