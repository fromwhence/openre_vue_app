<template>
  <div class="realtors-show">
    <!-- Realtor Contact Info -->
    <div>
      <h3>{{ realtor.photo_url }}</h3>
      <h3>{{ realtor.first_name }} {{ realtor.last_name }}</h3>
      <h3>Brokerage: {{ realtor.brokerage }}</h3>
      <h3>{{ realtor.email }}</h3>
      <h3>{{ realtor.phone }}</h3>
    </div> 
    <!-- End Realtor Contact Info --> 
    <!-- Realtors Upcoming Open Houses -->   
    <div v-for="open_house in realtor.open_houses">
     <router-link v-bind:to="'/open_houses/' + open_house.id">
       <h3>{{ open_house.property.address }}</h3>
       <h3>{{ open_house.friendly_start_time }}</h3>
       <h4>{{ open_house.property.friendly_price }}</h4>
       <h3>Property Type: {{ open_house.property.formatted.home_category }}</h3> 
       <h3>Beds: {{ open_house.property.bedrooms }}</h3>
       <h3>Baths: {{ open_house.property.baths }} </h3>
       <h3>Detailed listing: {{ open_house.property.listing_url }}</h3>
       <br>
     </router-link>
    </div>
    <!-- End Realtors Upcoming Open Houses --> 
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      // open_house: []
      realtor: {
        photo_url: "",
        first_name: "",
        last_name: "",
        brokerage: "",
        email: "",
        phone: "",
        open_houses: []
      },
        open_house: {
          start_time: "",
          end_time: "",
        property: {
          address: "",
          mls_number: "",
          price: "",
          bedrooms: "",
          baths: "",
          square_footage: "",
          listing_url: "",
          photos: [],
            formatted: {
              home_category: "",
          }
        }  
      }
    };
  },
  created: function() {
    axios
      .get("/api/realtors/" + this.$route.params.id)
      .then(response => {
        this.realtor = response.data;
      });
  },
  methods: {}
};
</script>