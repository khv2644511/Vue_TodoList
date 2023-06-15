<template>
  <div class="blue pa-2">
    <h2>투두 리스트 추가</h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            class=""
            outlined
            label="투두리스트를 입력해주세요"
            value=""
            v-model="memo"
          ></v-text-field>
        </v-col>
        <v-row class="justify-end">
          <v-col cols="7"
            ><v-btn @click="addList">리스트 추가</v-btn></v-col
          ></v-row
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        memo: null,
      };
    },
    methods: {
      addList() {
        console.log(this.memo);
        if (this.memo === null) {
          alert("할일을 입력해주시요!");
        } else {
          this.$emit("addList", this.memo);
        }
      },
    },
  };
</script>
