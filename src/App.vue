<template>
  <v-app>
    <v-container class="pa-0">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Todo</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text icon v-bind="attrs" v-on="on">
              <v-icon> mdi-dots-horizontal </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'mypage' }">
              <v-list-item-title>My page</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.dispatch('logout')">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-else plain router :to="{ name: 'login' }"> Log in </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item router :to="{ name: 'home' }" exact>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item
              v-if="isLogin === false"
              router
              :to="{ name: 'login' }"
              exact
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>

            <v-list-item v-else router :to="{ name: 'mypage' }" exact>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My page</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
  import Home from "./views/Home.vue";
  import { mapState } from "vuex";

  export default {
    name: "App",
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      ...mapState(["isLogin"]),
    },
    methods: {},
    components: { Home },
  };
</script>

<style lang="scss">
  @import "@/assets/scss/common.scss";
</style>
