<template>
  <v-autocomplete
    v-model="selectedItems"
    :items="items"
    :label="question"
    :color="color"
    :prepend-icon="icon"
    deletable-chips
    multiple
    chips
    clearable
    @input="$emit('input', $event)"
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
  props: { items: Array, question: String, color: String, icon: String },
  data: () => ({
    selectedItems: []
  })
};
</script>
