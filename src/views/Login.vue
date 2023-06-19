<template>
   <v-container style="max-width:350px;">
    <v-row justify="center">
      <v-col>
<v-card>
  <v-toolbar flat color="#bbbabade">
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
  <div class="pa-3" >
    <v-text-field
              label="Email address"
              v-model="email"
            ></v-text-field>
              <v-text-field
                label="password"
                type="pasword"
                v-model="password"
              ></v-text-field>
  </div>
</v-card>
</v-col>
     </v-row>
   </v-container>
</template>
<script>
export default {
   name: '',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
       email: null,
       password: null
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     
   },
   methods: {
     
   }
};
</script>
<style lang='' scoped>
</style>