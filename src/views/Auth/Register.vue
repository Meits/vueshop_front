<template>
  <div class="d-flex align-items-center justify-content-center vh-100 ">
    <div class="card card-container width_30">
      <div class="card-header">Register</div>
      <div class="card-body">
    <form>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" :class="{'form-control' : true, 'is-invalid' : status(v$.user.name, 'name')}" v-model="v$.user.name.$model"  aria-describedby="emailHelp">
        <span class="invalid-feedback" v-if="errors && errors.name" ><strong>{{ getErrorText('name')}}</strong></span>
        <span class="invalid-feedback" v-for="(error, index) of v$.user.name.$errors" :key="index">
          <strong>{{ error.$message }}</strong>
        </span>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" :class="{'form-control' : true, 'is-invalid' : status(v$.user.email, 'email')}" v-model="v$.user.email.$model" id="exampleInputEmail1" aria-describedby="emailHelp">
        <span class="invalid-feedback" v-if="errors && errors.email" ><strong>{{ getErrorText('email')}}</strong></span>
        <span class="invalid-feedback" v-for="(error, index) of v$.user.email.$errors" :key="index">
          <strong>{{ error.$message }}</strong>
        </span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" :class="{'form-control' : true, 'is-invalid' : status(v$.user.password, 'password')}" v-model="v$.user.password.$model" class="form-control">
        <span class="invalid-feedback" v-if="errors && errors.password" ><strong>{{ getErrorText('password')}}</strong></span>
        <span class="invalid-feedback" v-for="(error, index) of v$.user.password.$errors" :key="index">
          <strong>{{ error.$message }}</strong>
        </span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input type="password" v-model="v$.user.password_confirmation.$model" :class="{'form-control' : true, 'is-invalid' : status(v$.user.password_confirmation, 'password_confirmation')}" >
        <span class="invalid-feedback" v-for="(error, index) of v$.user.password_confirmation.$errors" :key="index">
          <strong>{{ error.$message }}</strong>
        </span>
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
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'

  export default {
    setup () {
      return { v$: useVuelidate() }
    },
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
    validations () {
      return {
        user: {
          email: { required, email },
          name: { required },
          password: {required},
          password_confirmation: { required, sameAsPassword: sameAs(this.user.password) }
        }
      }
    },
    methods : {
      status (validation, field) {
        return ((this.errors && this.errors[field]) || (validation.$error))
      },
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
      validate () {
        this.user.$touch();
      },
       hendleRegister () {

        if(!this.validate) {
          return false
        }

        const isFormCorrect =  this.v$.$validate()
        // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
        if (!isFormCorrect) return
        // actually submit form

        this.$store.dispatch('register', this.user)
        .then(
          //() => this.$router.push('/')
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