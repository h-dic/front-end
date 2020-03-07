<template>
  <v-autocomplete
    :items="items"
    :value="selectedItems"
    :label="question"
    :color="color"
    :prepend-icon="icon"
    deletable-chips
    multiple
    chips
    clearable
    @input="updateSelection"
  >
    <!-- <template v-slot:selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        :color="`${color} lighten-4`"
        @click:close="remove(data, data.item)"
      >
        {{ data.item }}
      </v-chip>
    </template> -->
  </v-autocomplete>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    items: Array,
    selectedItems: Array,
    question: String,
    color: String,
    icon: String
  },
  methods: {
    updateSelection(event) {
      this.$emit("input", event);
    }
  }
};
</script>
