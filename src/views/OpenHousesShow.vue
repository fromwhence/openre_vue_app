<template>
  <div class="open-houses-show">
  	<h3>{{ open_house.property.address }}</h3>
  	<h3>{{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}</h3>
    <h3>{{ open_house.property.formatted.home_category }}</h3>
  	<h4>{{ open_house.property.friendly_price }}</h4>
  	<h3>Beds: {{ open_house.property.bedrooms }}</h3>
  	<h3>Baths: {{ open_house.property.baths }} </h3>
    <h3>{{ open_house.property.square_footage }}</h3>
    <h3>{{ open_house.realtor.photo_url }}</h3>
  	<h3>Listing Agent: {{ open_house.realtor.first_name }} {{open_house.realtor.last_name}}</h3>
    <h3>Brokered by: {{ open_house.realtor.brokerage }}</h3>
    <h3>{{ open_house.realtor.email }}</h3>
    <h3>P: {{ open_house.realtor.phone }}</h3>
    <h3>Detailed listing: {{ open_house.property.listing_url }}</h3>
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
      open_house: {
        friendly_start_time: "",
        friendly_end_time: "",
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
        },
        realtor: {
          first_name: "",
          last_name: "",
          brokerage: "",
          email: "",
          phone: "",
          photo_url: "",
          listing_url: "",
        }

      } 
    };
  },
  created: function() {
    axios
      .get("/api/open_houses/" + this.$route.params.id)
      .then(response => {
        this.open_house = response.data;
      });
  },
  methods: {}
};
</script>