<template>
  <v-card>
    <v-card-title primary-title>
      Results
      <v-btn color="success" @click="queryDB('a', 'b')">text</v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "SearchResult"
};
</script>
