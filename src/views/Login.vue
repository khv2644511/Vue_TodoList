<template>
  <v-container style="max-width: 400px">
    <v-row align-content="center" style="height: 100vh">
      <v-alert width="400px" type="error" :value="isError" dismissible
        >아이디와 비밀번호를 확인해주세요.</v-alert
      >
      <v-alert width="400px" type="success" :value="loginSuccess" dismissible
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
          <v-btn large block depressed color="primary" @click="login"
            >로그인</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "",
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        email: null,
        password: null,
        allUsers: [
          { id: 1, name: "hyebin", email: "khv@naver.com", password: "1234" },
          { id: 2, name: "logo", email: "khv@naver.com", password: "1234" },
        ],
        isError: false,
        loginSuccess: false,
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {
      login() {
        // 전체 유저에서 해당 이메일로 유저를 찾는다.
        let selectedUser = null;
        this.allUsers.forEach((user) => {
          if (user.email === this.email) selectedUser = user;
        });
        if (selectedUser === null) this.isError = true;
        else {
          selectedUser.password !== this.password
            ? (this.isError = true)
            : (this.loginSuccess = true);
        }
        // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
      },
    },
  };
</script>
<style lang="" scoped></style>
