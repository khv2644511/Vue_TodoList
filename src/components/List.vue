<template>
  <div class="orange pa-2">
    <h2>투두 리스트</h2>
    <v-card class="pa-1 ma-1" v-for="(list, index) in todoList" :key="index">
      <p class="ma-0">{{ list.memo }}</p>
    </v-card>
  </div>
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
