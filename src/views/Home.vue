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
                            <option value=""> Property Type </option>
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
                    <router-link v-bind:to="'/open_houses/3'">
                    <div class="item-image"><img src="https://ssl.cdn-redfin.com/photo/68/bigphoto/869/08408869_1.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-badge-right">$550,000 
                        </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sat. 11/16, 12pm-2pm
                        </div>
                      </div>
                    </div>
                    <div class="item-info">
                      <h3 class="item-title">2019 West Rice Street, Unit 3, Chicago, IL, 60626</h3>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">2 Beds,</span> <span class="bathrooms" data-toggle="tooltip" title=""> 2 Baths</span>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">1,500 Sq. Ft.</span>
                      </div>
                      </div>
                    </div>
                  </router-link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <router-link v-bind:to="'/open_houses/6'">
                    <div class="item-image"><img src="https://photos.zillowstatic.com/p_f/ISyvivkegka53k1000000000.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-badge-right">$520,000
                        </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sat. 11/16, 10am-12pmm</div>
                      </div>
                    </div>
                    <div class="item-info">
                      <h3 class="item-title">936 North Honore Street, Unit 2, Chicago, IL 60626</h3>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">2 Beds,</span> <span class="bathrooms" data-toggle="tooltip" title=""> 2.5 Baths</span>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">1,650 Sq. Ft.</span>
                      </div>
                      </div>
                    </div>
                  </router-link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <router-link v-bind:to="'/open_houses/1'">
                    <div class="item-image"><img src="https://ssl.cdn-redfin.com/photo/68/bigphoto/341/10534341_0.jpg" class="img-fluid" alt="">
                      <div class="item-meta">
                        <div class="item-badge-right">$519,000
                        </div>
                      </div>
                      <div class="item-badges">
                        <div class="item-badge-left">Sat. 11/16, 3pm-5pm</div>
                      </div>
                    </div>
                    <div class="item-info">
                      <h3 class="item-title">1137 North Wood Street, Unit 1H, Chicago, IL 60626</h3>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">2 Beds,</span> <span class="bathrooms" data-toggle="tooltip" title=""> 2.5 Baths</span>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="">1,800 Sq. Ft.</span>
                      </div>
                      </div>
                    </div>
                  </router-link>
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
      searchDate: ""
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
     searchAll: function() {
        axios
          .get("http://localhost:3000/api/open_houses?date=" + this.searchDate + "&category=" + this.searchPropertyType + "&zip=" + this.searchTerm)
          .then(response => {
          this.open_houses = response.data;
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

