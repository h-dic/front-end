<template>
  <ExpansionPanel title="Herbs and Drugs">
    <template v-slot:closeSubtext>
      <SummaryChips
        :selectedDrugs="selectedDrugs"
        :selectedHerbs="selectedHerbs"
      >
      </SummaryChips>
    </template>
    <template v-slot:select>
      <Autocomplete
        v-model="selectedDrugs"
        :items="drugs"
        :question="questionDrugs"
        icon="mdi-pill"
        color="light-green"
        @input="onChange($event)"
      >
      </Autocomplete>
      <Autocomplete
        v-model="selectedHerbs"
        :items="herbs"
        :question="questionHerbs"
        icon="mdi-flower"
        color="light-blue"
      >
      </Autocomplete>
    </template>
  </ExpansionPanel>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpansionPanel from "@/components/ExpansionPanel";
import SummaryChips from "@/components/SummaryChips";
import Autocomplete from "@/components/Autocomplete";

export default {
  name: "HerbsAndDrugsPanel",
  components: {
    ExpansionPanel,
    SummaryChips,
    Autocomplete
  },
  data: () => ({
    resultats: "Lorem ipsum dolor sit amets",
    selectedDrugs: [],
    selectedHerbs: [],
    questionDrugs: "Which drugs does the patient takes ?",
    questionHerbs: "Which herbs does the patient takes ?"
  }),
  methods: {
    ...mapActions(["queryDB"]),
    onChange(event) {
      console.log(event);
    }
  },
  computed: {
    ...mapGetters(["patientById", "drugs", "herbs"]),
    patient() {
      return this.patientById(this.$route.params["id"]);
    }
  }
};
</script>
