<template>
<section>
  <div class=" firstline"></div>
  <section class="vh-100 mt-5">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Logimage"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="lead fw-normal mb-0 me-3">Sign up with</p>
              <button
                type="button"
                class="btn btn-success  mt-1 mx-1"
              >
                <BootstrapIcon icon="google" />
              </button>

              <button
                type="button"
                class="btn btn-primary mt-1 mx-1"
              >
                <BootstrapIcon icon="linkedin" />
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Name input -->
            <div :class="{invalid:isName==='invalid'}">
            <div class="form-outline mb-3 ">
              <input
                type="text"
                id="name"
                class="form-control form-control-lg"
                placeholder="Enter Your Name"
                v-model="enteredName"
                @blur="validityName"
              />
              <label class="form-label" for="name" v-if="isName==='valid'">Name</label>
              <label class="form-label" for="name" v-if="isName==='invalid'">Name - Invalid</label>
            </div>
            </div>
            <!-- Email input -->
            <div :class="{invalid:isEmail==='invalid'}">
            <div class="form-outline mb-4">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                v-model="enteredEmail"
                @blur="validityEmail"
              />
              <label class="form-label" for="email" v-if="isEmail==='valid'">Email</label>
              <label class="form-label" for="email" v-if="isEmail==='invalid'">Email - Invalid</label>
            </div>
            </div>

            <!-- Password input -->
            <div :class="{invalid:isPassword==='invalid'}">
            <div class="form-outline mb-3">
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="enteredPassword"
                @blur="validityPassword"
              />
              <label class="form-label" for="password" v-if="isPassword==='valid'">Password</label>
              <label class="form-label" for="password" v-if="isPassword==='invalid'">Password - Input Password</label>
            </div>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
                @click="signUp()"
                :disabled="isEmail==='invalid'||isName==='invalid'"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  </section>
</section>
</template>

<script>

import axios from "axios";
export default{
  data() {
     return{
      enteredName:"",
      enteredEmail:"",
      enteredPassword:"",
      isName:"valid",
      isEmail:"valid",
      isPassword:"valid"
      }
  },
  methods:{
    async signUp(){
            const newUser={
                user_name:this.enteredName,
                user_email:this.enteredEmail,
                password:this.enteredPassword
            }
           this.$store.state.user =await axios.post('http://localhost:3000/user/signup',newUser)
            console.log(this.$store.state.user)
            this.$router.push('/theresources')
    },
    validityName(){
        if(this.enteredName.trim()===""){this.isName="invalid"}
        else{this.isName="valid"}
    },
    validityEmail(){
        if(this.enteredEmail.trim()===""  || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.enteredEmail.trim()))
        {this.isEmail="invalid"}
        else{this.isEmail="valid"}
    },
    validityPassword(){
        if(this.enteredPassword.trim()==""){this.isPassword="invalid"}
        else{this.isPassword="valid"}
    }
  }
}
</script>

<style scoped>

.firstline {
  padding: 25px;
   background-color:#020c22
}
.invalid input{
    border-color: red;
}
.invalid label{
    color: red;
}
</style>
