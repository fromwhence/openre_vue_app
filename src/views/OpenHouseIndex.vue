<template>
  
  <div class="new-form-section">
    <h1>Open House Search</h1>

    <form v-on:submit.prevent="search()">
      <div>Date: <input type="date" value="Search" v-model="searchDate" placeholder=""></div>
      <br>
      <div>Zip Code: <input type="text" v-model="searchTerm" placeholder=""></div>
      <br>
      <input type="submit" value="Submit">
    </form>

    <h2>Open Houses</h2>
    <div v-for="open_house in open_houses">
      <h3>{{ open_house.property.address }}</h3>
      <h3>{{ open_house.start_time }}</h3>
    </div>

  </div>

</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      open_houses: [],
      searhDate: "",
      searchTerm: ""
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/open_houses")
      .then(response => {
        this.open_houses = response.data;
      });
  },
  methods: {
     search: function() {
       axios
         .get("http://localhost:3000/api/open_houses?search=" + this.searchTerm)
         .then(response => {
           this.open_houses = response.data;
         });
     }
   }
  };
</script>