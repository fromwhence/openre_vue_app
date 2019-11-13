<template> 

  <!-- Central Search Bar -->
<div class="home-template">
  <div class="home-search">
    <div class="main search-form">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-11">
            <div class="heading search-box-heading">
              <h2>Open House Finder</h2>
              <h3>Helping your home buying search.</h3>
            </div>
            <form v-on:submit.prevent="searchAll()"> 
                <div class="card">
                  <div class="row">
                <div class="col-lg-3">
                  <div class="form-group search-date-padding">
                    <input id="datepicker" type="date" class="form-control form-control-lg" v-model="searchDate" placeholder="">
                  </div>
                </div>
                <div class="col-lg-3 search-left-input-padding">
                  <div class="form-group">
                    <input type="text" class="zip-code-search form-control form-control-lg zip-code-search" v-model="searchTerm" placeholder="Zip Code">
                  </div>
                </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="form-group">
                          <select class="form-control form-control-lg ui-select" v-model="searchPropertyType" placeholder="Property Type">
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
                          <button v-on:click="searchAll()" type="submit" class="btn btn-lg btn-primary btn-block">Search</button>
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
                        <div class="item-badge-left">Sat. 11/16, 10am-12pm</div>
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

  <!-- End of Featured Open Houses -->

 <div class="home-search-results">
  <div class="container">
    <div class="row justify-content-md-center" >
      <div class="col col-lg-12 col-xl-10">
      <div class="page-header header-margin-top">
        <h1>Upcoming open houses matching your search</h1>
      </div>
    </div>
   </div>
  </div>
  <div id="content" class="less-top-padding">
    <div class="container results-extra-left-padding">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12 col-xl-12">
         <div class="col-md-10 col-lg-9">
          <div class="sorting">
            <div class="row justify-content-between">
              <div class="col-sm-5 col-md-5 col-lg-6 col-xl-3">
              </div>
             </div>                
            </div>
          <div class="clearfix"></div>
            <div class="item-listing list home-search-results-layout">
              <div v-for="open_house in open_houses">
                <div class="item">
                  <div class="row">
                    <div class="col-lg-5">
                      <router-link v-bind:to="'/open_houses/' + open_house.id">
                        <div class="item-image"><img v-bind:src="open_house.property.default_image_url" class="img-fluid" alt="">
                          <div class="item-badges">
                          <div class="item-badge-left">${{ open_house.property.friendly_price }}
                          </div>
                          </div>
                          <div class="item-meta">
                          <div class="item-badge-right">{{ open_house.property.formatted.home_category }}
                          </div>
                          </div>
                          </div>
                        </router-link>
                      </div>

                  <div class="col-lg-7 result-bottom-border">
                    <div class="item-info">
                      <h3 class="item-title address">{{ open_house.property.address }}</h3>
                      <div class="item-location open-house-time-home"><b>Open House: </b> {{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}
                      </div>
                      <div class="item-details-i-home"> <span class="bedrooms" data-toggle="tooltip" title="bedrooms">{{ open_house.property.bedrooms }} Beds 
                        </span> <span class="bathrooms" data-toggle="tooltip" title="baths">{{ open_house.property.baths }} Baths</span> 
                      </div>
                        <div class="item-details">
                          <ul>
                            <li>{{ open_house.property.friendly_square_footage }} Sq. Ft.</li>
                          </ul>
                        </div>
                      </div>
                      <div class="row agent-spacing-home">
                        <div class="col-md-6">
                          <div class="listing-agent"><b>Listing agent:</b>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <router-link v-bind:to="'/realtors/' + open_house.realtor.id">
                          <a class="listing-agent">{{ open_house.realtor.first_name }} {{open_house.realtor.last_name }}</a>
                        </router-link>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="listing-agent"><b>Presented by:</b>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="brokerage">{{ open_house.realtor.brokerage }}
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
      </div>
    </div>   
  </div>
</div> 
</div>  
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
      property: [],
      searchTerm: "",
      searchPropertyType: "",
      searchDate: "",
      searchResults: ""
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

