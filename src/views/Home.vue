<template>
  <v-container gutter="20px">
    <h2>투두 리스트</h2>
    <p>
      전체 할일: {{ todoList.length }}/ 완료된 할일: {{ countDone }} / 남은
      할일: {{ todoList.length - countDone }}
    </p>
    <v-row>
      <v-col
        ><List
          :todoList="todoList"
          @statusChange="statusChange"
          @listDelete="listDelete"
      /></v-col>
      <v-col><ListAdd @addList="addList" @listEdit="listEdit" /></v-col>
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
      listDelete(index) {
        this.todoList.splice(index, 1);
      },
      listEdit(memo, index) {
        this.todoList[index].memo = memo;
      },
    },
    computed: {
      countDone() {
        let count = 0;
        this.todoList.forEach((list) => {
          if (list.status === "done") count++;
        });
        return count;
      },
    },
  };
</script>
