<template>
  <ExpansionPanel title="Herbs and Drugs">
    <template v-slot:subtext>
      <SummaryChips
        :selectedDrugs="selectedDrugs"
        :selectedHerbs="selectedHerbs"
        drugsColor="light-blue"
        herbsColor="light-green"
      >
      </SummaryChips>
    </template>
    <template v-slot:select>
      <Autocomplete
        :items="drugs"
        :selectedItems="selectedDrugs"
        :question="questionDrugs"
        icon="mdi-pill"
        color="light-blue"
        @input="updateSelectedDrugs($event)"
      >
      </Autocomplete>
      <Autocomplete
        :items="herbs"
        :selectedItems="selectedHerbs"
        :question="questionHerbs"
        icon="mdi-flower"
        color="light-green"
        @input="updateSelectedHerbs($event)"
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
    questionDrugs: "Which drugs does the patient take ?",
    questionHerbs: "Which herbs does the patient take ?"
  }),
  methods: {
    ...mapActions(["updateSelectedDrugs", "updateSelectedHerbs"])
  },
  computed: {
    ...mapGetters(["drugs", "herbs", "selectedDrugs", "selectedHerbs"])
  }
};
</script>
