<template>
  <v-container style="max-width: 400px">
    <v-row align-content="center" style="height: 100vh">
      <v-alert width="400px" type="error" :value="isLoginError" dismissible
        >아이디와 비밀번호를 확인해주세요.</v-alert
      >
      <v-alert width="400px" type="success" :value="isLogin" dismissible
        >로그인이 완료되었습니다.</v-alert
      >
      <v-col>
        <v-card>
          <v-toolbar flat color="primary">
            <v-toolbar-title style="color: white">로그인</v-toolbar-title>
          </v-toolbar>

          <div class="pa-3">
            <v-text-field label="Email address" v-model="email"></v-text-field>
            <v-text-field
              label="password"
              type="password"
              v-model="password"
            ></v-text-field>
          </div>
          <v-btn
            large
            block
            depressed
            color="primary"
            @click="login({ email, password })"
            >로그인</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mapState, mapActions } from "vuex";

  export default {
    name: "",
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        email: null,
        password: null,
      };
    },
    computed: {
      ...mapState(["isLoginError", "isLogin"]),
    },
    watch: {},
    mounted() {},
    methods: {
      ...mapActions(["login"]),
    },
  };
</script>
<style lang="" scoped></style>
