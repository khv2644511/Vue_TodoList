<template>
  <v-app>
    <v-container class="grey lighten-4" fluid>
      <v-row>
        <v-col>
          <Home />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { Home },
};
</script>
