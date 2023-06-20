import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "hyebin", email: "khv@naver.com", password: "1234" },
      { id: 2, name: "logo", email: "khv@naver.com", password: "1234" },
    ],
    isLogin: false,
    isLoginError: false,
  },
  getters: {},
  mutations: {
    // 로그인 성공 시,
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인 실패 시
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    // 로그인 시도해서 로그인 성공 시 loginSuccess 커밋
    login({ state, commit }, loginObj) {
      console.log(loginObj);
      // 전체 유저에서 해당 이메일로 유저를 찾는다.
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (selectedUser === null) commit("loginError");
      else {
        selectedUser.password !== loginObj.password
          ? commit("loginError")
          : commit("loginSuccess");
      }
      // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
    },
    // 로그인 실패
  },
  modules: {},
});
