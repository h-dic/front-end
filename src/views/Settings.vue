<template>
  <v-container fill-height>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card max-width="475" class="mx-auto">
          <v-toolbar color="green lighten-1" dark>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>

          <v-list subheader two-line flat>
            <v-subheader>Databases</v-subheader>

            <v-list-item-group multiple>
              <v-list-item v-for="(database, index) in databases" :key="index">
                <v-list-item-action>
                  <v-checkbox
                    v-model="database.used"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ database.name }}
                    <v-btn icon :href="database.href" target="_blank" link>
                      <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ database.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-divider></v-divider>

          <v-list two-line subheader>
            <v-subheader>Others</v-subheader>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Language</v-list-item-title>
                <v-list-item-subtitle>Current : English</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Display mode</v-list-item-title>
                <v-list-item-subtitle>Current : light</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Settings",
  data: () => ({
    databases: [
      {
        name: "Hedrine",
        used: true,
        description: "Herb Drug Interaction Database",
        href: "https://hedrine.univ-grenoble-alpes.fr"
      },
      {
        name: "MSKCC",
        used: true,
        description: "Memorial Sloan Kettering Cancer Center",
        href:
          "https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs/search"
      },
      {
        name: "DDI Predictor",
        used: true,
        description: "HQuantitative prediction of drug drug interactions",
        href: "https://www.ddi-predictor.org/predictor/ddi/"
      }
    ]
  })
};
</script>
