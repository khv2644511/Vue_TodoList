<template>
  <v-container gutter="20px">
    <v-row>
      <v-col><List :todoList="todoList" @statusChange="statusChange" /></v-col>
      <v-col><ListAdd @addList="addList" /></v-col>
    </v-row>
  </v-container>
</template>

<script>
  import List from "@/components/List.vue";
  import ListAdd from "@/components/ListAdd.vue";

  export default {
    name: "Home",

    components: { List, ListAdd },
    data() {
      return {
        todoList: [],
      };
    },
    methods: {
      addList(memo) {
        this.todoList.push({ memo: memo, status: "created" });
      },
      statusChange(index, status) {
        console.log(index, status);
        this.todoList[index].status = status;
      },
    },
  };
</script>
