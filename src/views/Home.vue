<template> 

  <!-- Central Search Bar -->
<div class="home-template">
  <div class="home-search">
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
                            <option value="0">Single-Family</option>
                            <option value="1">Condo</option>
                            <option value="2">Townhome</option>
                            <option value="3">Multi-Family</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-5">
                        <div class="form-group">
                          <router-link v-bind:to="'/open_houses/'"><button type="submit" v-on:click="searchTime()" class="btn btn-lg btn-primary btn-block">Search</button>
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

  <!-- End of Central Search Bar -->

  <!-- Start of Featured Opened Houses -->

  <div class="feature-box centered gray">
    <div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-12 col-xl-10">
            <div class="item-listing grid">
            <div class="main-title"><span>Featured Open Houses</span>
            </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="item">
                    <div class="item-image"><a href="property_single.html"><img src="img/demo/property/1.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-price">$420,000 <small>$777 / sq m</small> </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sponsored</div>
                        <div class="item-badge-right">For Sale</div>
                      </div>
                      </a> <a href="#" class="save-item"><i class="fa fa-star"></i></a> </div>
                    <div class="item-info">
                      <h3 class="item-title">3 bed semi-detached house</h3>
                      <div class="item-location"><i class="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i class="fa fa-bed"></i></span> <span class="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i class="fa fa-bath"></i></span> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <div class="item-image"><a href="property_single.html"><img src="img/demo/property/2.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-price">$420,000 <small>$777 / sq m</small> </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sponsored</div>
                        <div class="item-badge-right">For Sale</div>
                      </div>
                      </a> <a href="#" class="save-item"><i class="fa fa-star"></i></a> </div>
                    <div class="item-info">
                      <h3 class="item-title">3 bed semi-detached house</h3>
                      <div class="item-location"><i class="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i class="fa fa-bed"></i></span> <span class="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i class="fa fa-bath"></i></span> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <div class="item-image"><a href="property_single.html"><img src="img/demo/property/3.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-price">$420,000 <small>$777 / sq m</small> </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sponsored</div>
                        <div class="item-badge-right">For Sale</div>
                      </div>
                      </a> <a href="#" class="save-item"><i class="fa fa-star"></i></a> </div>
                    <div class="item-info">
                      <h3 class="item-title">3 bed semi-detached house</h3>
                      <div class="item-location"><i class="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i class="fa fa-bed"></i></span> <span class="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i class="fa fa-bath"></i></span> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   <router-view/>
   
 </div>     
  <!-- End of Featured Open Houses -->
      
   

  <!-- <div class="new-form-section">
    <h1>Open House Search</h1>

    <form v-on:submit.prevent="search()">
      <div>Zip Code: <input type="text" v-model="searchTerm" placeholder=""></div>
   <div>Date: <input type="date" value="Search" v-model="searchTerm" placeholder="Search by Name"></div>
      <input type="submit" value="Submit">
    </form>
  </div> -->

</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      open_house: [],
      searchTerm: "",
      searchPropertyType: "",
      searchDate: "",
      searchAll: "",
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
     filterAll: function() {
     }
   }
  };
</script>

