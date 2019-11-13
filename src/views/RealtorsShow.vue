<template>
  <div class="realtors-show">

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12 col-xl-10">
          <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Agents</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ realtor.first_name }} {{ realtor.last_name }}</li>
                </ol>
                </nav>
            </div>
          </div>
        </div>
    <div id="content">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-12 col-xl-10 realtor-page-wider">
            <div class="row has-sidebar">
              <div class="col-md-5 col-lg-3 col-xl-4 col-sidebar">
                <div id="sidebar" class="sidebar-left">
                  <div class="sidebar_inner">
                    <div class="agent-details mb-5"> 
                      <div class="text-center">
                        <img class="img-fluid img-rounded agent-thumb" v-bind:src="realtor.photo_url" alt="">
                      </div>
                      <h3 class="subheadline realtor-name-bio">{{ realtor.first_name }} {{ realtor.last_name }}</h3>
                        <ul class="list-unstyled">
                          <li class="realtor-info-spacing">
                            <a href="#">Phone: {{ realtor.phone }}</a></li>
                          <li class="realtor-info-spacing-bottom">
                            <a href="#">{{ realtor.email }}</a></li>
                        </ul>
                      <a href="#" class="btn btn-lg btn-primary btn-block" data-toggle="modal" data-target="#leadform">Contact {{ realtor.first_name }}</a> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-9 col-xl-8 right-column-move-up">
                <div class="page-header header-underline realtor-heading">
                  <h1>Upcoming open houses hosted by {{ realtor.first_name }}</h1>
                </div>
                  <div class="sorting">
                    <div class="row justify-content-between">
                      <div class="col-sm-5 col-md-5 col-lg-4 col-xl-4">
                        <!-- <div class="form-group">
                          <select class="form-control ui-select">
                            <option selected="selected">Most recent</option>
                            <option>Most reduced</option>
                            <option>Most popular</option>
                          </select>
                        </div> -->
                      </div>
                      <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                    </div>
                  </div>                
                </div>
                <!-- Open House Listings -->
          <div class="clearfix"></div>
            <div class="item-listing list">
              <div v-for="open_house in realtor.open_houses">
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
                        <a class="realtor-page-address">{{ open_house.property.address }}</a>
                         <div class="item-location open-house-time-realtor"><b>Open House:</b> {{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}
                          </div>
                          <div class="item-details-i-realtor"> <span class="bedrooms" data-toggle="tooltip" title="bedrooms">{{ open_house.property.bedrooms }} Beds 
                           </span> <span class="bathrooms" data-toggle="tooltip" title="baths">{{ open_house.property.baths }} Baths</span> 
                         </div>
<!--                          <div class="item-details">
                           <ul>
                             <li>{{ open_house.property.friendly_square_footage }} Sq. Ft.</li>
                           </ul>
                         </div> -->
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
    <!-- Contact Agent Modal -->
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