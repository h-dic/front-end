<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-sm-flex">
        H-DIC
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(page, index) in pages"
          :key="index"
          text
          :to="page.path"
          link
        >
          {{ page.name }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    home: {
      path: "/",
      name: "H-DIC"
    },
    pages: [
      {
        path: "/",
        name: "home"
      },
      {
        path: "/settings",
        name: "Settings"
      },
      {
        path: "/search",
        name: "Search"
      }
    ]
  }),
  methods: {
    ...mapActions(["queryDrugs", "queryHerbs"])
  },
  watch: {
    $route(to) {
      document.title = "H-DIC / " + to.name;
    }
  },
  mounted() {
    document.title = "H-DIC / " + this.$route.name;
    this.queryDrugs();
    this.queryHerbs();
  }
};
</script>
