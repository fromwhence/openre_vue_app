<template>
  <div class="open-houses-index">
    <div>
      <input type="text" class="zip-code-search" v-model="searchTerm" placeholder="Zip Code">
      <button v-on:click="searchZip()" type="submit" class="zip-code-search">Search</button>
    </div>    
    <div>
      <select class="property-type-search" v-model="searchPropertyType" placeholder="Property Type">
        <option value="0">Single-Family</option>
        <option value="1">Condo</option>
        <option value="2">Townhome</option>
        <option value="3">Multi-Family</option>
      </select>
      <button v-on:click="searchHomeCategory()" type="submit" class="home-category-search">Search</button>
    </div>
    <div>
      <input type="date" class="date-search" v-model="searchDate" placeholder="">
      <button v-on:click="searchTime()" type="submit" class="date-search">Search</button>
    </div>

    <div>
      <button v-on:click="applyFilter()" type=submit class="all-filters">Search All</button>
    </div>


    <div v-for="open_house in open_houses">
      <h3>{{ open_house.property.address }}</h3>
      <h3>{{ open_house.start_time }}</h3>
      <h4>{{ open_house.property.price }}</h4>
      <h3>Property Type: {{ open_house.property.formatted.home_category }}</h3> <!-- Note order of objects. Joe's help. -->
      <h3>Beds: {{ open_house.property.bedrooms }}</h3>
      <h3>Baths: {{ open_house.property.baths }} </h3>
      <h3>Realtor: {{ open_house.realtor.first_name }} {{open_house.realtor.last_name}}</h3>
      <br>
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
      items: [],
      open_houses: [],

      filter: {
        searchTerm: "",
        searchPropertyType: "",
        searchDate: ""
      },

      appliedFilter: null
    };
  },

  computed: {
    filteredItems() {
      let resultItems = [...this.items];

      if (this.appliedFilter) {
        for (const field in this.appliedFilter) {
          const val = this.appliedFilter[field].trim().toLowerCase();
          if (val)
            resultItems = resultItems.filter(i => i[field].toLowerCase)() === 
          (val);
        }
      }
      return resultItems;
    }

  }
  created: function() {
    axios
      .get("http://localhost:3000/api/open_houses")
      .then(response => {
        this.open_houses = response.data;
      });
  },
  methods: {
     searchZip: function() {
       axios
         .get("http://localhost:3000/api/open_houses?zip=" + this.searchTerm)
         .then(response => {
           this.open_houses = response.data;
         });
     },
     searchHomeCategory: function() {
       axios
         .get("http://localhost:3000/api/open_houses?category=" + this.searchPropertyType)
         .then(response => {
           this.open_houses = response.data;
         });
     },
     searchTime: function() {
        axios
        .get("http://localhost:3000/api/open_houses?date=" + this.searchDate)
        .then(response => {
          this.open_houses = response.data;
          console.log("There's Date Activity");
        });
     },
     applyFilter()
        this.appliedFilter = {...this.filter}
        console.log("All Fitlers Test")
     }
   }
  };
</script>

