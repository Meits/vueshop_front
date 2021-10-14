<template>
  <div class="d-flex align-items-center justify-content-center vh-100 ">
    <div class="card card-container width_30">
      <div class="card-header">Register</div>
      <div class="card-body">
    <form>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" :class="{'form-control' : true, 'is-invalid' : errors && errors.name}" v-model="user.name"  aria-describedby="emailHelp">
        <span class="invalid-feedback" v-if="errors && errors.name" ><strong>{{ errors.name[0]}}</strong></span>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" :class="{'form-control' : true, 'is-invalid' : errors && errors.email}" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        <span class="invalid-feedback" v-if="errors && errors.email" ><strong>{{ errors.email[0]}}</strong></span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" :class="{'form-control' : true, 'is-invalid' : errors && errors.password}" v-model="user.password" class="form-control">
        <span class="invalid-feedback" v-if="errors && errors.password" ><strong>{{ getErrorText('password')}}</strong></span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input type="password" v-model="user.password_confirmation" class="form-control" >
      </div>
      <div class="text-center">
      <button type="button" @click="hendleRegister()" class="btn btn-primary">Submit</button>


      <!-- <div v-if="errors" class="">
          <div v-for="(v, k) in errors" :key="k">
            <p v-for="error in v" :key="error">
              {{ error }}
            </p>
          </div>
      </div> -->

      </div>
      <div class="row text-center">
      <router-link class="col login__navigation_links"  to="/">Home</router-link>
      <router-link class="col login__navigation_links" to="/login">Login</router-link>
      </div>
    </form>
      </div>
    </div>
  </div>
  
</template>

<script>
import HTTP from '@/js/http-base.js'

  export default {
    data(){
      return {
        errors: null,
        user : {
          email : "",
          password : "",
          name : "",
          password_confirmation : ""
        }
        
      }
    },
    methods : {
      getErrorText (error) {
          let str = '';
          if(this.errors[error]) {
            for(let i = 0; i < this.errors[error].length; i++) {
                str += this.errors[error][i];
            }
            return this.errors[error].join(' ');
          }
          return str;
      },
      hendleRegister () {
          this.$store.dispatch('register', this.user)
          .then(
            //() => this.$router.push('/')
            (response) => {
              console.log('register request ok',response)
            }
          )
          .catch((e) => {
            if(e.response.data.errors) {
                this.errors = e.response.data.errors
                //console.log('errors ->',this.errors.name);
            }
          })
        
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>