<template>
  <v-app>
    <v-card
    height="400"
  >
      <v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Todo</v-toolbar-title>
      </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item router :to="{name: 'home'}" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item router :to="{name: 'login'}" exact>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-card>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  data: () => ({
    drawer: false,
      group: null,
  }),
  components: { Home },
};
</script>
