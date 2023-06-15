<template >
    <v-container class="blue"> <h2>투두 리스트 추가</h2>
   <v-card>
         <v-textarea
         outline
         label="투두리스트를 입력해주세요"
         value=""
         v-model="memo"
         ></v-textarea>
   </v-card>
<v-btn @click="addList">리스트 추가</v-btn>
    </v-container>
 </template>
 
 <script>
 
 export default {
     data() {
         return {
             memo: null
         }
     },
     methods: {
          addList() {
              console.log(this.memo)
              if (this.memo === null) {
                alert('할일을 입력해주시요!')
              } else {
                  this.$emit('addList', this.memo)            
              }
        }
     }
 }
 </script>