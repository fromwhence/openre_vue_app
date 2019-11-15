<template>
  <!-- open houses nav bar -->
  <div class="open-houses-index">
    <div class="container">
      <form v-on:submit.prevent="searchAll()"> 
        <div class="search-form">
          <div class="card">
            <div class="row">
              <!-- datepicker search -->
              <div class="col-lg-3 search-date-spacing">
                <div class="form-group">
                  <input id="datepicker" type="date" class="form-control form-control-lg" v-model="searchDate" placeholder="">
                </div>
              </div>
              <!-- address search -->
              <div class="col-lg-3 zip-code-search-input">
                <div class="form-group">
                  <input type="text" class="zip-code-search form-control form-control-lg zip-code-search" v-model="searchTerm" placeholder="Zip Code">
                </div>
              </div>
              <!-- property type pulldown -->
             <div class="col-lg-3 search-input-index">
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
    <!-- breadcrumbs and page header -->
    <div class="container">
      <div class="row justify-content-md-center" >
        <div class="col col-lg-12 col-xl-10">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/open_houses">Open Houses</a></li>
              <li class="breadcrumb-item active" aria-current="page">Results</li>
            </ol>
          </nav>
        <div class="page-header header-underline">
          <h1>Upcoming open houses matching your search</h1>
        </div>
      </div>
     </div>
    </div>
    <!-- open houses list view -->
  <div id="content" class="less-top-padding">
    <div class="container results-extra-left-padding">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12 col-xl-12">
         <div class="col-md-8 col-lg-9">
          <div class="sorting">
            <div class="row justify-content-between">
              <div class="col-sm-5 col-md-5 col-lg-5 col-xl-3">
               <!--  <div class="form-group">
                  <div class="form-group">
                    <select class="form-control form-control-lg ui-select price-sort" placeholder="Sort By">
                      <option value=""> Sort By </option>
                      <option value="0">Highest Price</option>
                      <option value="1">Lowest Price</option>
                    </select>
                  </div>
                </div> -->
              </div>
              <!-- <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="btn-group float-right" role="group"> <a href="property_grid.html" class="btn btn-light"><i class="fa fa-th"></i></a> <a href="property_listing.html" class="btn btn-light active"><i class="fa fa-bars"></i></a> </div>
              </div> -->
             </div>                
            </div>

          <div class="clearfix"></div>
            <div class="item-listing list">
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
                    <div class="item-info ">
                      <h3 class="item-title address">{{ open_house.property.address }}</h3>
                      <div class="item-location open-house-time"><b>Open House: </b> {{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}
                      </div>
                      <div class="item-details-i"> <span class="bedrooms" data-toggle="tooltip" title="bedrooms">{{ open_house.property.bedrooms }} Beds 
                        </span> <span class="bathrooms" data-toggle="tooltip" title="baths">{{ open_house.property.baths }} Baths</span> 
                      </div>
                        <div class="item-details">
                          <ul>
                            <li>{{ open_house.property.friendly_square_footage }} Sq. Ft.</li>
                          </ul>
                        </div>
                      </div>
                      <div class="row agent-spacing">
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
      sortKey: '',
              sortSettings: [
                  { 'price': true }
                ],
      desc: true
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
      this.searchPropertyType = "";

      axios
        .get("http://localhost:3000/api/open_houses")
        .then(response => {
          this.open_houses = response.data;
        });
     }
   }
  };
</script>

