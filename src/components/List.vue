<template>
  <v-container class="orange">
    <h2>투두 리스트</h2>
    {{ todoList }}
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        memo: null,
      };
    },
    props: ["todoList"],
  };
</script>
