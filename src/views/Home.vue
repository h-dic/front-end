<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-card flat class="d-flex justify-center">
          <v-card-title primary-title class="display-3 d-flex justify-center">
            Welcome
            <v-icon x-large color="red" right>mdi-heart</v-icon>
            <v-card-text>
              <v-img height="300" contain src="@/assets/logo_hdic.png"></v-img>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
