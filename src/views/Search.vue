<template>
  <div>
    <v-expansion-panels accordion :value="0">
      <HerbsAndDrugsPanel v-model="selectedHerbs"> </HerbsAndDrugsPanel>
    </v-expansion-panels>
    <SearchResult></SearchResult>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HerbsAndDrugsPanel from "@/components/HerbsAndDrugsPanel";
import SearchResult from "@/components/SearchResult";

export default {
  name: "Search",
  components: {
    HerbsAndDrugsPanel,
    SearchResult
  },
  data: () => ({
    SearchResults: "Lorem ipsum dolor sit amets",
    selectedDrugs: [],
    selectedHerbs: []
  }),
  methods: {
    ...mapActions(["loadPost"])
  },
  computed: {
    ...mapGetters(["patientById", "drugs", "herbs"]),
    patient() {
      return this.patientById(this.$route.params["id"]);
    }
  }
};
</script>
