import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
