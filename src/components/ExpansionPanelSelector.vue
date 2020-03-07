<template>
  <ExpansionPanel :title="title">
    <template v-slot:openSubtext>
      {{ question }}
    </template>
    <template v-slot:closeSubtext>
      <v-chip v-for="(item, index) in selectedItems" :key="index" class="mr-2">
        {{ item }}
      </v-chip>
    </template>
    <template v-slot:select>
      <v-select
        v-model="selectedItems"
        @input="$emit('input', $event)"
        :items="items"
        label="Select"
        multiple
        chips
        deletable-chips
        :hint="question"
        persistent-hint
      ></v-select>
    </template>
  </ExpansionPanel>
</template>

<script>
import ExpansionPanel from "@/components/ExpansionPanel";

export default {
  name: "ExpansionPanelSelector",
  components: {
    ExpansionPanel
  },
  data: () => ({
    selectedItems: []
  }),
  props: {
    title: String,
    question: String,
    defaultSelectedItems: Array,
    items: Array
  },

  mounted() {
    this.selectedItems = this.defaultSelectedItems;
  }
};
</script>
