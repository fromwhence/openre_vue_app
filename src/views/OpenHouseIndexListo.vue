<template>

<div class="property-listing">
  <div class="index-search">
    <div class="main search-form">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-11">
            <div class="heading">
              <h2>Open House Finder</h2>
              <h3>Helping your home buying search.</h3>
            </div>
            <form action="property_listing.html" v-on:submit.prevent="search()">
              <div class="card">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="form-group">
                      <input type="date" v-model="searchDate" class="form-control form-control-lg date-search" placeholder="">
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" v-model="searchTerm" placeholder="Zip Code">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="form-group">
                          <select class="form-control form-control-lg ui-select" placeholder="Property Type">
                            <option value="">Select a Property Type</option>
                            <option value="0">Single-Family</option>
                            <option value="1">Condo</option>
                            <option value="2">Townhome</option>
                            <option value="3">Multi-Family</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-5">
                        <div class="form-group">
                          <router-link v-bind:to="'/open_houses/'"><button type="submit" v-on:click="searchAll()"" class="btn btn-lg btn-primary btn-block">Search</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="open-houses-index-listo">
    <form v-on:submit.prevent="searchAll()">
      <div>
        <input type="text" class="zip-code-search" v-model="searchTerm" placeholder="Zip Code">
      </div>    
      <div>
        <select class="property-type-search" v-model="searchPropertyType" placeholder="Property Type">
          <option value="">- Select a Property Type -</option>
          <option value="0">Single-Family</option>
          <option value="1">Condo</option>
          <option value="2">Townhome</option>
          <option value="3">Multi-Family</option>
        </select>
      </div>
      <div>
        <input type="date" class="date-search" v-model="searchDate" placeholder="">
      </div>

      <div>
        <button v-on:click="searchAll()" type="submit" class="home-category-search">Search</button>
        <button v-on:click="resetSearch()">Reset Search</button>
      </div>
    </form>


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

