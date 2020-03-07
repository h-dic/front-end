<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <template v-slot:default="{ open }">
        <v-container fill-height fluid class="pa-0">
          <v-row no-gutters align="center">
            {{ title }}
            <v-col auto-grow class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open">
                  <slot name="openSubtext"></slot>
                </span>
                <span v-else>
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
