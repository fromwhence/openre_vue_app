<template>
  <div id="app">

<!-- Top Nav Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
      <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-content" aria-controls="menu-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu-content">
        <ul class="navbar-nav mr-auto">
        <router-link to="/"><li class="nav-item dropdown">
            <a class="nav-link" href="/" role="button" aria-haspopup="true" aria-expanded="false">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </router-link>
        <router-link to="/open_houses"><li class="nav-item dropdown">
            <a class="nav-link" href="/open_houses" role="button" data-toggle="dropdown" aria-expanded="false">
              Open Houses
            </a>
          </li>
        </router-link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Agents
          </a>
          <div class="dropdown-menu">
              <a href="#" class="dropdown-item"> Profile </a>
              <a href="#" class="dropdown-item"> Resources </a>
          </div>
        </li>         
        </ul>       
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="currentUserName">
            <span class="nav-link">
              Hi, {{ currentUserName }}
            </span>
          </li>
          
          


          <li class="nav-item" v-if="!currentUserName">
            <router-link class="nav-link nav-btn login-logout" to="/login">
              <span>
                <i  aria-hidden="true"></i> Log In
              </span>
            </router-link>
          </li>

          <li class="nav-item" v-if="currentUserName">
            <router-link class="nav-link nav-btn login-logout" to="/logout">
              <span>
                <i class="" aria-hidden="true"></i> Log out
              </span>
            </router-link>
          </li>

          <li class="nav-item" v-if="!currentUserName">
            <router-link class="nav-link nav-btn sign-up" to="/signup">
              <span>
                <i class="fa fa-plus" aria-hidden="true"></i> Sign Up
              </span>
            </router-link>
          </li>
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
<div class="col-lg-3">
  <address class="mb-3">
          <strong>OpenRE, Inc.</strong><br>
          1222 W. Madison St.<br>
          Chicago, IL 60607<br>
          <abbr title="Phone">P:</abbr> (773) 220-3278
          </address>
  <div class="footer-social mb-4"><a href="#" class="ml-2 mr-2"><span class="fa fa-twitter"></span></a> <a href="#" class="ml-2 mr-2"><span class="fa fa-facebook"></span></a> <a href="#" class="ml-2 mr-2"><span class="fa fa-instagram"></span></a></div>
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

</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      currentUserName: ""
    };
  },
  created: function() {
    var userName = localStorage.getItem("userName");
    if (userName) {
      this.currentUserName = userName;
    }
  },
  methods: {
   }
  };
</script>