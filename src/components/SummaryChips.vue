<template>
  <v-container>
    <v-chip
      v-for="(drug, index) in selectedDrugs"
      :key="'D' + index"
      class="mr-2 mb-2"
      color="light-green lighten-4"
    >
      {{ drug }}
    </v-chip>
    <v-chip
      v-for="(herb, index) in selectedHerbs"
      :key="'H' + index"
      class="mr-2 mb-2"
      color="light-blue lighten-4"
    >
      {{ herb }}
    </v-chip>
  </v-container>
</template>

<script>
export default {
  name: "SummaryChips",
  props: {
    selectedDrugs: Array,
    selectedHerbs: Array
  }
};
</script>
