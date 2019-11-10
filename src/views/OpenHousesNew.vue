<template>
  <div class="open-houses-new">
    <h1>Create New Open House Listing</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div v-for="property in properties">
         <h3>{{ property.address }}</h3>
      </div>
      <div>
        Start time: <input type="datetime-local" v-model="newOpenHouseStartTime">
      </div>
       <div>
        End time: <input type="datetime-local" v-model="newOpenHouseEndTime">
      </div>
<!-- 
      <h3>{{ open_house.property.address }}</h3>
      <h3>{{ open_house.start_time }} {{ open_house.end_time }}</h3>
      <h3>{{ open_house.property.formatted.home_category }}</h3>
      <h4>{{ open_house.property.price }}</h4>
      <h3>Beds: {{ open_house.property.bedrooms }}</h3>
      <h3>Baths: {{ open_house.property.baths }} </h3>
      <h3>{{ open_house.property.square_footage }}</h3>
      <h3>{{ open_house.property.photo_url }}</h3>
      <h3>Listing Agent: {{ open_house.realtor.first_name }} {{open_house.realtor.last_name}}</h3>
      <h3>Brokered by: {{ open_house.realtor.brokerage }}</h3>
      <h3>{{ open_house.realtor.email }}</h3>
      <h3>P: {{ open_house.realtor.phone }}</h3>
      <h3>Detailed listing: {{ open_house.property.listing_url }}</h3> -->

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
      properties: [],
      open_houses: [],
      errors: [],
      newStartTime: "",
      newEndTime: "",
      newPropertyAddress: "",
      newPropertyFormattedHomeCategory: "",
      newPropertyPrice: "",
      newPropertyBedrooms: "",
      newPropertyBaths: "",
      newPropertySquareFootage: "",
      newDetailedListingUrl: "",
      currentOpenHouse: {}
    };
  },
  created: function() {
    axios
      .get("/api/open_houses/" + this.$route.params.id)
      .then(response => {
        this.open_house = response.data;
      });
  },
  created: function() {
    axios
      .get("/api/properties/" + this.$route.params.id)
      .then(response => {
        this.property = response.data;
      });
  },
  methods: {
    submit: function() {

      var clientParams = {
        name: this.newStartTime,
        price: this.newEndTime
      };

      axios
        .post("/api/open_houses", clientParams)
        .then(response => {
          console.log("success", response.data);
          this.products.push(response.data);
          this.errors = [];
          this.new;
          this.new;
          this.newProductDescription;
          this.newProductUrl;        
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>