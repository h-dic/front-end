<template>
  <v-container fill-height class="patients-list">
    <v-card class="mx-auto">
      <v-card-title primary-title>
        Patients
      </v-card-title>
      <v-list two-line>
        <v-list-item
          v-for="(patient, index) in patients"
          :key="index"
          :to="`patients/${index}`"
          link
        >
          <v-list-item-avatar>
            <v-icon :class="`${[patient.color]} white--text`">{{
              patient.icon
            }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> {{ patient.name }} </v-list-item-title>
            <v-list-item-subtitle
              v-text="patient.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  nom: "PatientsList",
  data: () => ({}),
  computed: {
    ...mapGetters(["patients"])
  }
};
</script>
