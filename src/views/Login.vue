<template>
  <div class="login">
    <div id="content">
      <div class="container">
        <div class="row justify-content-md-center align-items-center">
          <div class="col col-md-6  col-lg-5 col-xl-4">
            <ul class="nav nav-tabs tab-lg" role="tablist">
              <li role="presentation" class="nav-item"><a class="nav-link active" href="signin.html">Sign In</a></li>
              <li role="presentation" class="nav-item"><a class="nav-link" href="/signup">Sign Up</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="login">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control form-control-lg" placeholder="" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control form-control-lg" placeholder="" v-model="password">
                  </div>
                  <p class="text-lg-right"><a href="forgot-password.html">Forgot Password</a></p>
                  <div class="checkbox">
                    <input type="checkbox" id="remember_me">
                    <label for="remember_me">Remember Me</label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg">Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          this.$parent.currentUserName = response.data.user_name;

          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("userName", response.data.user_name);

          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });       
      }
  }
};
</script>