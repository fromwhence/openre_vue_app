<template>
  <!-- open houses nav bar -->
  <div class="open-houses-index">
    <div class="container">
      <form v-on:submit.prevent="searchAll()"> 
        <div class="search-form">
          <div class="card">
            <div class="row">
              <!-- address search -->
              <div class="col-lg-3 search-left-input-padding">
                <div class="form-group">
                  <input type="text" class="zip-code-search form-control form-control-lg zip-code-search" v-model="searchTerm" placeholder="Zip Code">
                </div>
              </div>
              <!-- property type pulldown -->
             <div class="col-lg-3 search-input-padding">
                <div class="form-group">
                  <select class="form-control form-control-lg ui-select" placeholder="Property Type">
                    <option value=""> Property Type </option>
                    <option value="0">Single-Family</option>
                    <option value="1">Condo</option>
                    <option value="2">Townhome</option>
                    <option value="3">Multi-Family</option>
                  </select>
                </div>
              </div>
              <!-- datepicker search -->
              <div class="col-lg-3 search-input-padding">
                <div class="form-group">
                  <input id="datepicker" type="date" class="form-control form-control-lg" v-model="searchDate" placeholder="">
                </div>
              </div>
              <!-- search all button -->
              <div class="col-sm-1.5 search-button">
                <div class="form-group">
                  <button v-on:click="searchAll()" type="submit" class="btn btn-lg btn-primary btn-block">Search</button>
                </div>
              </div>
              <!-- reset button -->
              <div class="col-sm-1.5">
                <div class="form-group reset-button">
                  <button v-on:click="resetSearch()" type="submit" class="btn btn-lg btn-primary btn-block">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- end of open houses nav bar -->

    <div v-for="open_house in open_houses">
      <router-link v-bind:to="'/open_houses/' + open_house.id">
        <h3>{{ open_house.property.address }}</h3>
        <h3>{{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}</h3>
        <h4>{{ open_house.property.friendly_price }}</h4>
        <h3>Property Type: {{ open_house.property.formatted.home_category }}</h3>
        <h3>Beds: {{ open_house.property.bedrooms }}</h3>
        <h3>Baths: {{ open_house.property.baths }} </h3>
        <h3>Realtor: {{ open_house.realtor.first_name }} {{open_house.realtor.last_name}}</h3>
        <br>
      </router-link>
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
      searchTerm: "",
      searchPropertyType: "",
      searchDate: ""
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
     searchAll: function() {
        axios
          .get("http://localhost:3000/api/open_houses?date=" + this.searchDate + "&category=" + this.searchPropertyType + "&zip=" + this.searchTerm)
          .then(response => {
          this.open_houses = response.data;
            console.log("There's All Activity");
          });
     },
     resetSearch: function() {
      this.searchDate = "";
      this.searchTime = "";
      this.searchTerm = "";

      axios
        .get("http://localhost:3000/api/open_houses")
        .then(response => {
          this.open_houses = response.data;
        });
     }
   }
  };
</script>

