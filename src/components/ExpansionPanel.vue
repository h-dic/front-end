<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <template v-slot:default="{ open }">
        <v-container fill-height fluid class="pa-0">
          <v-row no-gutters align="center">
            <v-col cols="4">{{ title }}</v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0">
                  <slot name="openSubtext"></slot>
                </span>
                <span v-else key="1">
                  <slot name="closeSubtext"></slot>
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-container>
      </template>
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
