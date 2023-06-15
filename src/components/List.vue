<template>
  <div class="pa-2">
    <h2>투두 리스트</h2>
    <v-card class="pa-1 ma-1" v-for="(list, index) in todoList" :key="index">
      <p class="ma-0">{{ list.memo }}</p>
    </v-card>
    <v-btn icon fab small color="green"
      ><v-icon color="green">mdi-check</v-icon>
    </v-btn>
    <v-btn icon fab small color="blue"
      ><v-icon color="blue">mdi-refresh</v-icon></v-btn
    >
    <v-btn icon fab small color="red"
      ><v-icon color="red">mdi-delete</v-icon></v-btn
    >
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
