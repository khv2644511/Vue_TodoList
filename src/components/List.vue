<template>
  <div class="pa-2">
    <v-card
      class="pa-1 ma-1"
      :class="{ done: list.status === 'done' }"
      v-for="(list, index) in todoList"
      :key="index"
    >
      <p class="ma-0">{{ list.memo }}</p>
      <v-btn
        v-if="list.status === 'created'"
        @click="$emit('statusChange', index, 'done')"
        icon
        fab
        small
        color="green"
        ><v-icon color="green">mdi-check</v-icon>
      </v-btn>
      <v-btn
        v-else
        @click="$emit('statusChange', index, 'created')"
        icon
        fab
        small
        color="blue"
        ><v-icon color="blue">mdi-refresh</v-icon></v-btn
      >
      <v-btn @click="$emit('listDelete', index)" icon fab small color="red"
        ><v-icon color="red">mdi-delete</v-icon></v-btn
      >
      <v-btn
        v-if="list.status === 'created'"
        @click="listEdit(list.memo, index)"
        icon
        fab
        small
        color="yellow"
        ><v-icon color="yellow">mdi-pencil</v-icon></v-btn
      >
    </v-card>
  </div>
</template>

<script>
  import { eventBus } from "@/main";
  export default {
    data() {
      return {
        memo: null,
        status: null,
      };
    },
    methods: {
      listEdit(memo, index) {
        eventBus.listEdit(memo, index);
      },
    },
    props: ["todoList"],
  };
</script>

<style scoped>
  .done {
    background-color: #b7b7b6;
  }
  .done p {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
  }
</style>
