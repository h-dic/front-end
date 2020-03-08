<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="d-flex title">
      {{ title }}
      <slot name="subtext"></slot>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot name="select"></slot>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "ExpansionPanel",
  props: {
    title: String
  }
};
</script>
