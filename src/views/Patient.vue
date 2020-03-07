<template>
  <v-container fill-height>
    <v-card width="600" class="mx-auto">
      <v-card-title>
        <v-list-item-avatar color="grey">
          <v-icon :class="`${[patient.color]} white--text`">{{
            patient.icon
          }}</v-icon>
        </v-list-item-avatar>
        {{ patient.name }}
      </v-card-title>
      <v-card-actions>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Results</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ resultats }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <ExpansionPanelSelector
            title="Drugs"
            question="Which drugs does the patient take ?"
            :defaultSelectedItems="[]"
            :items="medicaments"
            v-model="selectedDrugs"
          >
          </ExpansionPanelSelector>
          <ExpansionPanelSelector
            title="Herbs"
            question="Which herbs does the patient takes ?"
            :defaultSelectedItems="[]"
            :items="plantes"
            v-model="selectedHerbs"
          >
          </ExpansionPanelSelector>
        </v-expansion-panels>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ExpansionPanelSelector from "@/components/ExpansionPanelSelector";

export default {
  components: {
    ExpansionPanelSelector
  },
  data: () => ({
    resultats: "Lorem ipsum dolor sit amets",
    selectedDrugs: [],
    selectedHerbs: []
  }),
  computed: {
    ...mapGetters(["patientById", "medicaments", "plantes"]),
    patient() {
      return this.patientById(this.$route.params["id"]);
    }
  }
};
</script>
