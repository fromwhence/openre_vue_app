<template>
  <div class="open-houses-show">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-md-12 col-lg-12 col-xl-10">         
          <div class="page-header bordered mb0">
            <div class="row">
              <div class="col-md-8"> <a href="#" class="btn-return" title="Back"><i class="fa fa-angle-left"></i></a>
                <h1>{{ open_house.property.address }}<small>Open House: {{ open_house.friendly_start_time }}{{ open_house.friendly_end_time }}</small></h1>
              </div>
            <div class="col-md-4">
              <div class="price price-color">${{ open_house.property.friendly_price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="content" class="item-single">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-md-12 col-lg-12 col-xl-10">
          <div class="row row justify-content-md-center has-sidebar">
            <div class="col-md-7 col-lg-8">
              <div>
                <div class="item-gallery">
                  <div class="swiper-container gallery-top" data-pswp-uid="1">

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li v-for="(photo, index) in open_house.property.photos" data-target="#carouselExampleIndicators" v-bind:data-slide-to="index" v-bind:class="{active: photo.default_preference}"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div v-for="(photo, index) in open_house.property.photos" class="carousel-item" v-bind:class="{active: photo.default_preference}">
                          <img v-bind:src="photo.image_url" class="d-block w-100">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
   
                  <div class="item-description">
                    <h3 class="headline">Property description</h3>
                    <p class="property-description">{{ open_house.property.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-lg-4">
              <div id="sidebar" class="sidebar-right">
                <div class="sidebar_inner">
                  <div id="feature-list" role="tablist">
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne">
                      <h4 class="panel-title"> <a role="button" data-toggle="collapse" href="#specification" aria-expanded="true" aria-controls="specification"> Property Info <i class="fa fa-caret-down float-right"></i> </a> </h4>
                    </div>
                    <div id="specification" class="panel-collapse collapse show" role="tabpanel">
                      <div class="card-body">
                        <table class="table v1">
                          <tr class="top-table-row">
                            <td>MLS #</td>
                            <td>{{ open_house.property.mls_number }}</td>
                          </tr>
                          <tr>
                            <td>Type</td>
                            <td>{{ open_house.property.formatted.home_category }}</td>
                          </tr>
                          <tr>
                            <td>Bedrooms</td>
                            <td>{{ open_house.property.bedrooms }}</td>
                          </tr>
                          <tr>
                            <td>Bathrooms</td>
                            <td>{{ open_house.property.baths }}</td>
                          </tr>
                          <tr>
                            <td>Sq. Ft.</td>
                            <td>{{ open_house.property.friendly_square_footage }}</td>
                          </tr>
                          <tr>
                            <td>Year Built</td>
                            <td>{{ open_house.property.year_built }}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="card shadow">
                    <h5 class="subheadline mt-0  mb-0">Listing Agent</h5>
                    <div class="media">
                      <div class="media-left"> <a href="agent.html"> <img class="media-object rounded-circle" src="https://d2787ndpv5cwhz.cloudfront.net/6d1d21a044b00cd6e643f37bf0003b4b01a4504c/300x300.jpg" width="80" height="80" alt=""> </a> </div>
                      <div class="media-body agent-name">
                        <h4 class="media-heading">
                          <a href="agent.html">{{ open_house.realtor.first_name }} {{open_house.realtor.last_name}}</a>
                        </h4>
                        <p>
                          <a href="tel:01502392905"><i class="fa fa-phone" aria-hidden="true"></i> Call: 01502 392905</a></p>
                        <p><a href="agent.html" class="btn btn-sm btn-light">View Profile</a></p>
                      </div>
                    </div>
                    <a href="#" class="btn btn-lg btn-primary btn-block" data-toggle="modal" data-target="#leadform">Request Details</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- closing div -->
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
          friendly_price: "",
          bedrooms: "",
          baths: "",
          square_footage: "",
          year_built: "",
          description: "",
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