<template>
  <div class="d-flex align-items-center justify-content-center vh-100 ">
    <div class="card card-container width_30">
      <div class="card-header">Register</div>
      <div class="card-body">
    <form>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">First name</label>
        <input type="text" :class="{'form-control' : true, 'is-invalid' : status(v$.user.firstname, 'firstname')}" v-model="v$.user.firstname.$model"  aria-describedby="emailHelp">
        <ErrorMessage v-bind:errors="v$.user.firstname.$errors" v-bind:serverError="errors?errors.firstname:false"></ErrorMessage>
      </div>
      
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Last name</label>
        <input type="text" :class="{'form-control' : true, 'is-invalid' : status(v$.user.lastname, 'lastname')}" v-model="v$.user.lastname.$model"  aria-describedby="emailHelp">
        <ErrorMessage v-bind:errors="v$.user.lastname.$errors" v-bind:serverError="errors?errors.lastname:false"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" :class="{'form-control' : true, 'is-invalid' : status(v$.user.email, 'email')}" v-model="v$.user.email.$model" id="exampleInputEmail1" aria-describedby="emailHelp">
        
        <ErrorMessage v-bind:errors="v$.user.email.$errors" v-bind:serverError="errors?errors.email:false"></ErrorMessage>

      </div>
      
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Phone</label>
        <input type="email" :class="{'form-control' : true, 'is-invalid' : status(v$.user.phone, 'email')}" v-model="v$.user.phone.$model" id="exampleInputEmail1" aria-describedby="emailHelp">
        
        <ErrorMessage v-bind:errors="v$.user.phone.$errors" v-bind:serverError="errors?errors.phone:false"></ErrorMessage>

      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" :class="{'form-control' : true, 'is-invalid' : status(v$.user.password, 'password')}" v-model="v$.user.password.$model" class="form-control">
        <ErrorMessage v-bind:errors="v$.user.password.$errors" v-bind:serverError="errors?errors.password:false"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input type="password" v-model="v$.user.password_confirmation.$model" :class="{'form-control' : true, 'is-invalid' : status(v$.user.password_confirmation, 'password_confirmation')}" >

        <ErrorMessage v-bind:errors="v$.user.password_confirmation.$errors"> </ErrorMessage>
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
      <!-- <p
        v-for="error of v$.$errors"
        :key="error.$uid"
      >
        <strong>{{ error.$validator }}</strong>
        <small> on property</small>
        <strong>{{ error.$property }}</strong>
        <small> says:</small>
        <strong>{{ error.$message }}</strong>
      </p> -->

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
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'
import ErrorMessage from "@/components/validation/ErrorMessage.vue"

  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    components : {
      ErrorMessage
    },
    data(){
      return {
        errors: null,
        user : {
          email : "",
          password : "",
          firstname : "",
          lastname : "",
          phone : "",
          password_confirmation : ""
        }
        
      }
    },
    validations () {
      return {
        user: {
          email: { required, email },
          firstname: { required },
          lastname: { required },
          phone: { required },
          password: {
            required,
            serverFailed : helpers.withMessage(this.getServerErrorMessage('password'), function(){
              return !this.hasServerError('password');  
            })
          },
          password_confirmation: { required, sameAsPassword: sameAs(this.user.password) }
        }
      }
    },
    methods : {
      getServerErrorMessage (field) {
        if(this.hasServerError(field)) {
            return 'default'; 
        }
        return 'sever validation error';
      },
      hasServerError(field)
        {
            return (this.errors && field && this.errors[field]);
        },
      status (validation, field) {
        return ((this.errors && this.errors[field]) || (validation.$error))
      },
      validate () {
        this.user.$touch();
      },
       async hendleRegister () {

         this.errors = [];

        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) return

        this.$store.dispatch('register', this.user)
        .then(
          (response) => {
            console.log('register request ok',response)
            this.$router.push('login')
          }
        )
        .catch((e) => {
          if(e.response && e.response.data.errors) {
              this.errors = e.response.data.errors
          }
        })
        
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>