<template>
  
  <div class="new-form-section">
    <h1>Open House Search</h1>

    <form v-on:submit.prevent="search()">
      Zip Code: <input type="number" v-model="searchTerm" placeholder="Search by Name">
<!--       Date: <input type="date" value="Search" v-model="searchTerm" placeholder="Search by Name"> -->
      <input type="submit" value="Submit">
    </form>
  </div>

</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      open_house: [],
      searchTerm: ""
    };
  },
  created: function() {
    axios
      .get("/api/open_houses")
      .then(response => {
        this.open_houses = response.data;
      });
  },
  methods: {
     search: function() {
       axios
         .get("/api/foods?search=" + this.searchTerm)
         .then(response => {
           this.foods = response.data;
         });
     }
   }
  };
  </script>
};
</script>


