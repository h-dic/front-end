import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue")
  },
  {
    path: "/patients",
    name: "PatientsList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PatientsList.vue")
  },
  {
    path: "/patients/:id",
    name: "Patient",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Patient.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
