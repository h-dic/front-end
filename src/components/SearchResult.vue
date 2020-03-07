<template>
  <v-card>
    <v-card-title primary-title>
      Results
      <v-spacer></v-spacer>
      <v-btn color="success" @click="$emit('click')">Search</v-btn>
    </v-card-title>
    <v-card-text>
      <div v-for="(item, index) in selectedDrugs" :key="index">
        {{ item }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchResult",
  computed: {
    ...mapGetters(["selectedDrugs", "selectedHerbs"])
  }
};
</script>
