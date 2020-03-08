<template>
  <v-container>
    <v-chip
      v-for="(drug, index) in selectedDrugs"
      :key="'D' + index"
      class="mr-2 mb-2"
      :color="`${drugsColor} lighten-4`"
    >
      {{ drug }}
    </v-chip>
    <v-chip
      v-for="(herb, index) in selectedHerbs"
      :key="'H' + index"
      class="mr-2 mb-2"
      :color="`${herbsColor} lighten-4`"
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
    selectedHerbs: Array,
    drugsColor: String,
    herbsColor: String
  }
};
</script>
