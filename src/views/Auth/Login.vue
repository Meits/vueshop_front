-<template>
  <div class="d-flex align-items-center justify-content-center vh-100 ">
    <div class="card card-container width_30">
      <div class="card-header">Login</div>
      
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" >
          </div>
          <div class="text-center">
            <button type="button" @click="hendleLogin()" class="btn btn-primary">Submit</button>
          </div>
          <div class="row text-center">
            <router-link class="col login__navigation_links"  to="/">Home</router-link>
            <router-link class="col login__navigation_links" to="/register">Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

  export default {
    methods : {
      hendleLogin(e) {
        //this.$router.replace(sessionStorage.getItem('redirectPath') || '/');
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>