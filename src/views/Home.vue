<template><v-container gutter="20px">
  {{ todoList }}
  <v-row>
    <v-col><List/></v-col>
    <v-col><ListAdd @addList="addList"/></v-col>

  </v-row>
</v-container></template>

<script>
import List from '@/components/List.vue'
import ListAdd from '@/components/ListAdd.vue'

export default {
  name: "Home",

  components: { List, ListAdd },
  data() {
    return {
      todoList : []
    }
  },
  methods: {
    addList(memo) {
      console.log('부모 받음')
      this.todoList.push({memo: memo, status: "created"})
    }
  }
};
</script>
