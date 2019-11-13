<template>
  <div class="logout">
  	
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    this.$parent.currentUserName = "";


    localStorage.removeItem("jwt");
    localStorage.removeItem("userName");

    this.$router.push("/");
  }
};
</script>