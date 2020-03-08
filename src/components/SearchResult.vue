<template>
  <v-card>
    <v-card-title primary-title>
      Results
      <v-spacer></v-spacer>
      <v-btn color="success" @click="queryPair" :disabled="isResultUpToDate">
        <template v-if="isResultUpToDate">up-to-date</template>
        <template v-else>Search</template>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="indexedResults"
        :expanded.sync="expanded"
        item-key="id"
        show-expand
        single-expand
        :loading="loading"
        disable-pagination
        hide-default-footer
        loading-text="Loading... Please wait"
      >
        <!-- :custom-sort="customSort" -->
        <template v-slot:item.info="{ item }">
          <v-dialog width="500">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Plus d'infos
              </v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item v-for="(value, index) in item" :key="index">
                    {{ value }}
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.intensity="{ item }">
          <v-chip :color="getColor(item.intensity)" light>{{
            item.intensity
          }}</v-chip>
        </template>
        <template v-slot:expanded-item="{ item, headers }">
          <td :colspan="headers.length" class="pa-0 elevation-0">
            <v-card flat class="ma-2">
              <v-card-title primary-title>
                Consequences ({{
                  uniqueConsequences(item.interactions).length
                }}) :
              </v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item
                    v-for="(consequence, index) in uniqueConsequences(
                      item.interactions
                    )"
                    :key="index"
                  >
                    {{ consequence }}
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </td>
        </template>
        <!-- <template v-slot:item="{ item, expand, isExpanded, headers }">
          {{ isExpanded }}
          <tr>
            <td v-for="(header, index) in headers" :key="index">
              {{ item[header.value] }}
            </td>
          </tr>
        </template> -->
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchResult",
  data: () => ({
    headers: [
      { text: "", value: "data-table-expand" },
      { text: "Drugs", value: "drug" },
      { text: "Herbs", value: "herb" },
      { text: "Intensities", value: "intensity" },
      { text: "", value: "info" }
    ],
    expanded: []
  }),
  methods: {
    ...mapActions(["queryPair"]),
    getColor(intensity) {
      for (const item of this.intensities) {
        if (item.name === intensity) {
          return item.color;
        }
      }
      return "blue";
    },
    customSort(items, index, isDescending) {
      const intensityValue = intensity => {
        const value = this.intensities.findIndex(
          item => item.name === intensity
        );
        if (value) {
          return value;
        }
        return -1;
      };
      if (index[0] === "intensity") {
        items.sort((a, b) => {
          if (isDescending) {
            return intensityValue(b) - intensityValue(a);
          } else {
            return intensityValue(a) - intensityValue(b);
          }
        });
      } else {
        items.sort();
      }
      return items;
    },

    uniqueConsequences(interactions) {
      return [
        ...new Set(interactions.map(interaction => interaction.consequence))
      ];
    }
  },
  computed: {
    ...mapGetters(["results", "loading", "isResultUpToDate", "intensities"]),
    indexedResults() {
      return this.results.map((item, index) => ({
        id: index,
        ...item
      }));
    }
  }
};
</script>
