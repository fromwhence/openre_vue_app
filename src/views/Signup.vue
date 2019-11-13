<template>
  <div class="realtor-signup">

    <div id="content">
      <div class="container">
        <div class="row justify-content-md-center align-items-center">
          <div class="col col-md-6  col-lg-6 col-xl-4">
            <ul class="nav nav-tabs tab-lg" role="tablist">
              <li role="presentation" class="nav-item"><a class="nav-link" href="/login">Sign In</a></li>
              <li role="presentation" class="nav-item"><a class="nav-link active" href="/signin">Sign Up</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="login">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group realtor-buyer-radios">
                    User Type:
                    <input type="radio" name="Realtor" value="Realtor" v-model="userType"> Realtor
                    <input type="radio" name="Buyer" value="Buyer" v-model="userType"> Buyer
                  </div>
                  <div class="form-group">
                    <label for="name">First Name:</label>
                    <input type="text" id="name" class="form-control form-control-lg" placeholder="" v-model="firstName">
                  </div>
                  <div class="form-group">
                    <label for="name">Last Name:</label>
                    <input type="text" id="name" class="form-control form-control-lg" placeholder="" v-model="lastName">
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" class="form-control form-control-lg" placeholder="" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" class="form-control form-control-lg" placeholder="" v-model="password">
                  </div>
                  <div class="form-group">
                    <label for="password">Password Confirmation:</label>
                    <input type="password" id="password" class="form-control form-control-lg" placeholder="" v-model="passwordConfirmation">
                  </div>
                  
                  <div v-if="userType == 'Realtor'">
                    <div class="form-group">
                      <label for="brokerage">Brokerage:</label>
                      <input type="text" id="brokerage" class="form-control form-control-lg" placeholder="" v-model="brokerage">
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone:</label>
                      <input type="text" id="phone" class="form-control form-control-lg" placeholder="" v-model="phone">
                    </div>
                    <div class="form-group">
                      <label for="agent-photo">Agent Photo:</label>
                      <input type="url" id="agent-photo" class="form-control form-control-lg" placeholder="" v-model="photoUrl">
                    </div>


                  </div>
                  <div class="checkbox">
                    <input type="checkbox" id="terms">
                    <label for="terms">By registering I accept our Terms of Use and Privacy.</label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- original code, without theme -->

<!--     <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>User Sign Up</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group realtor-buyer-radios">
          User Type:
          <input type="radio" name="Realtor" value="Realtor" v-model="userType"> Realtor
          <input type="radio" name="Buyer" value="Buyer" v-model="userType"> Buyer
        </div>
        <div class="form-group">
          <label>First name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Confirm password:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        Realtor Only
        <div v-if="userType == 'Realtor'">
          <div class="form-group">
            <label>Phone:</label>
            <input type="text" class="form-control" v-model="phone">
          </div>
          <div class="form-group">
            <label>Brokerage:</label> 
            <input type="text" class="form-control" v-model="brokerage">
          </div>
          <div class="form-group">
            <label>Agent Photo:</label>
            <input type="url" class="form-control" placeholder="Paste Image URL" v-model="photoUrl">
          </div>
        </div>
        End of Realtor Only

        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      userType: "",
      firstName: "",
      lastName: "",
      brokerage: "",
      email: "",
      phone: "",
      photoUrl: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      realtor: true
    };
  },
  methods: {
    submit: function() {
      var params = {
        type: this.userType,
        first_name: this.firstName,
        laslt_name: this.lastName,
        brokerage: this.brokerage,
        email: this.email,
        phone: this.phone,
        photo_url: this.photoUrl,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>