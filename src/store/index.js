import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
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
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인 실패 시
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    login({ state, commit }, loginObj) {
      console.log(loginObj);
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (
        selectedUser === null ||
        selectedUser.password !== loginObj.password
      ) {
        commit("loginError");
      } else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "mypage" });
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    },
  },
  modules: {},
});
