<template>
  <div class="realtor-signup">
    <div class="container">
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
          <label>Phone:</label>
          <input type="text" class="form-control" v-model="phone">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Confirm password:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <!-- Realtor Only -->
        <div v-if="userType == 'Realtor'">
          <div class="form-group">
            <label>Brokerage:</label> 
            <input type="text" class="form-control" v-model="brokerage">
          </div>
          <div class="form-group">
            <label>Agent Photo:</label>
            <input type="url" class="form-control" placeholder="Paste Image URL" v-model="photoUrl">
          </div>
        </div>
        <!-- End of Realtor Only -->

        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
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