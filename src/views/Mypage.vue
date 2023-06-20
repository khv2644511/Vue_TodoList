<template>
  <div>
    <h1>{{ userInfo.name }}님 환영합니다!</h1>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "Mypage",

    data() {
      return {};
    },
    computed: {
      ...mapState(["userInfo"]),
    },
    mounted() {},

    methods: {},
  };
</script>

<style lang="scss" scoped></style>
