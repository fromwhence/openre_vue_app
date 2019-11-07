<template>
  <div id="app">

<!-- Top Nav Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
      <div class="container">
      <a class="navbar-brand" href="index.html"><span class="icon-uilove icon-uilove-realestate"></span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-content" aria-controls="menu-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu-content">
        <ul class="navbar-nav mr-auto">
        <router-link to="/"><li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Home <span class="sr-only">(current)</span>
            </a>
            <div class="dropdown-menu">
                <a href="index.html" class="dropdown-item">Homepage 1</a>
                <a href="index2.html" class="dropdown-item">Homepage 2</a>
            </div>
          </li>
        </router-link>
        <router-link to="/open_houses"><li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/open_houses" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Open Houses
            </a>
          </li>
        </router-link>
            <!-- <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Open Houses
            </a> -->
            <div class="dropdown-menu">
                <a href="property_listing.html" class="dropdown-item">List View</a>
                <a href="property_grid.html" class="dropdown-item">Grid View</a>
                <a href="property_listing_map.html" class="dropdown-item">Map View</a>
            </div>
          </li>
          </router-link>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Buyers
            </a>
            <div class="dropdown-menu">
                <a href="agent_list.html" class="dropdown-item">Agent List</a>
                <a href="agent.html" class="dropdown-item">Agent Profile</a>
            </div>
          </li>
          
          <li class="nav-item dropdown megamenu">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Agents
            </a>
            <div class="dropdown-menu">
            <div class="container">
            <div class="row justify-content-md-center">
                <div class="col col-md-8">
                <div class="row">
                <div class="col-md-6 col-lg-3">
                    <ul class="list-unstyled">
                      <li class="title">Homepage</li>
                      <li><a href="index.html">Homepage 1</a></li>
                      <li><a href="index2.html">Homepage 2</a></li>
                      <li><a href="index3.html">Homepage 3</a></li>
                      <li><a href="index4.html">Homepage 4</a></li>
                      <li><a href="index5.html">Homepage 5</a></li>
                      <li><a href="index6.html">Homepage 6</a></li>
                      <li><a href="index7.html">Homepage 7</a></li>
                      <li class="title">Login Pages</li>
                      <li><a href="signin.html">Signin</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="forgot-password.html">Forgot Password</a></li>
                     </ul>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <ul class="list-unstyled">
                      <li class="title">Property Listing</li>
                      <li><a href="property_listing.html">List View</a></li>
                      <li><a href="property_grid.html">Grid View</a></li>
                      <li><a href="property_listing_map.html">Map View</a></li>
                      <li class="title">Single Property</li>
                      <li><a href="property_single.html">Single View 1</a></li>
                      <li><a href="property_single2.html">Single View 2</a></li>
                      <li><a href="property_single3.html">Single View 3</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <ul class="list-unstyled">
                      <li class="title">Other Pages</li>
                      <li><a href="plans.html">Plans</a></li>
                      <li><a href="information_page.html">Information Page</a></li>
                      <li><a href="coming_soon.html">Coming Soon</a></li>
                      <li><a href="404_error.html">Error Page</a></li>
                      <li><a href="success.html">Success Page</a></li>
                      <li><a href="contact.html">Contact Page</a></li>
                      <li><a href="compare.html">Compare Properties</a></li>
                      <li class="title">Agent Pages</li>
                      <li><a href="agent_list.html">Agent List</a></li>
                      <li><a href="agent.html">Agent Profile</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <ul class="list-unstyled">
                      <li class="title">Account Pages</li>
                      <li><a href="my_listing_add.html">Add Listing</a></li>
                    <li><a href="my_bookmarked_listings.html">Bookmarked Listing</a></li>
                      <li><a href="my_listings.html">My Listings</a></li>
                      <li><a href="my_profile.html">My Profile</a></li>
                    <li><a href="my_password.html">Change Password</a></li>
                    <li><a href="my_notifications.html">Notifications</a></li>
                    <li><a href="my_membership.html">Membership</a></li>
                    <li><a href="my_payments.html">Payments</a></li>
                    <li><a href="my_account.html">Account</a></li>
                    <li class="title">Blog Pages</li>
                      <li><a href="blog.html">Blog Archive</a></li>
                      <li><a href="blog_single.html">Blog Single</a></li>
                    </ul>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
            </div>
          </li>          
        </ul>       
        <ul class="navbar-nav ml-auto">        
          <li class="nav-item dropdown user-account">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="user-image" style="background-image:url(' img/demo/profile3.jpg');"></span> Hi, John
            </a>
            <div class="dropdown-menu">
                <a href="my_profile.html" class="dropdown-item">My Profile</a>
                <a href="my_password.html" class="dropdown-item">Change Password</a>
                <a href="my_notifications.html" class="dropdown-item">Notifications</a>
                <a href="my_membership.html" class="dropdown-item">Membership</a>
                <a href="my_payments.html" class="dropdown-item">Payments</a>
                <a href="my_account.html" class="dropdown-item">Account</a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link nav-btn" href="my_listing_add.html"><span><i class="fa fa-plus" aria-hidden="true"></i> Add listing</span></a></li>
        </ul>
        
      </div>
      </div>
    </nav>

<!-- End of Top Nav Bar -->
    
  <router-view/>

<!-- Start of Footer -->


<footer id="footer">
  <div class="container container-1000">
  <div class="row">
  <div class="col-lg-3">
    <p><span class="icon-uilove icon-uilove-realestate"></span></p>
    <address class="mb-3">
            <strong>OpenRE, Inc.</strong><br>
            1222 W. Madison St.<br>
            Chicago, IL 60607<br>
            <abbr title="Phone">P:</abbr> (773) 220-3278
            </address>
    <div class="footer-social mb-4"><a href="#" class="ml-2 mr-2"><span class="fa fa-twitter"></span></a> <a href="#" class="ml-2 mr-2"><span class="fa fa-facebook"></span></a> <a href="#" class="ml-2 mr-2"><span class="fa fa-instagram"></span></a></div>
  </div>
<div class="col-lg-3 col-sm-4">
<div class="footer-links">
  <ul class="list-unstyled">
    <li class="list-title"><a href="#">About</a></li>
    <li><a href="#">Company</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
</div>
<div class="col-lg-3 col-sm-4">
<div class="footer-links">
  <ul class="list-unstyled">
    <li class="list-title"><a href="#">Links</a></li>
    <li><a href="#">Commercial</a></li>
    <li><a href="#">Agents</a></li>
  </ul>
</div>
</div>
<div class="col-lg-3 col-sm-4">
<div class="footer-links">
  <ul class="list-unstyled">
    <li class="list-title"><a href="#">Help</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Report</a></li>
  </ul>
</div>
</div>

</div>
<div class="footer-credits d-lg-flex justify-content-lg-between align-items-center">
</div>
</div>
</footer>

<!-- End of Footer -->


  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      open_houses: [],
      searchTerm: ""
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
     search: function() {
       axios
         .get("http://localhost:3000/api/open_houses?search=" + this.searchTerm)
         .then(response => {
           this.open_houses = response.data;
         });
     }
   }
  };
</script>