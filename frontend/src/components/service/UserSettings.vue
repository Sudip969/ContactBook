<template>
<div>
    Hello 
    {{this.userEmail}}
</div>  
</template>

<script>
import jwt_decode from "jwt-decode";
export default{
    data(){
        return{
            
        }
    },
    created(){
        this.getUser()
    },
    methods:{
        getUser(){
       const token = localStorage.getItem("token");

      this.$store.state.user = jwt_decode(token);
      this.userName = this.$store.state.user.user_name;
      this.userEmail = this.$store.state.user.user_email;
      this.userId = this.$store.state.user.user_id;
        }
    }
}

</script>

<style>

</style>