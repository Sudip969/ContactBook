<template>
<section class="mt-5">
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError" >
    <template #default>
      <p>Unfortunately,At Least One Input Value is Invalid</p>
      <p>Please Check All Inputs</p>
    </template>
    <template #actions>
        <button class="btn btn-danger" @click="confirmError">Okay</button>
    </template>
  </base-dialog>
  <ul>
    <li>
<div class="container-fluid ">
    <div class="row d-flex justify-content-center align-items-center ">

     <div>
    <form @submit.prevent>
        <div :class="{invalid: userName==='invalid'}">
              <div class="form-outline mb-4">
        <label class="fw-bold w-25 form-label ">Name:</label>
        <input class="form-control form-control-lg" type="text" v-model="editName" @blur="validityName"> 
   
        <p v-if="userName ==='invalid'">Invalid name  </p>
            </div>
        </div>

        <div :class="{invalid: phoneNumber==='invalid'}">
             <div class="form-outline mb-3">
        <label class="fw-bold w-25 form-label">Phone-No:</label>
        <input class="form-control form-control-lg"
          type="tel" 
          maxlength="10" 
           v-model="editNo"
            @blur="validityNumber">
        <p v-if="phoneNumber=== 'invalid'">Invalid number </p>
        </div>
        </div>

        <div  :class="{invalid: email ==='invalid'}">
             <div class="form-outline mb-3">
        <label class="fw-bold w-25 form-label">E-mail:</label>
        <input  class="form-control form-control-lg" type="email" v-model="editEmail"  @blur="validityEmail">
        <p v-if="email === 'invalid'">Invalid e-mail</p>
        </div>
        </div>


        <div>
        <button class=" btn btn-success border border-dark" @click="editContact()" >Confirm</button>
        <button class ="btn btn-danger ms-1 border-dark" @click="onCancel()" >Cancel</button>
        </div>
    </form> 
     </div>
    </div>
</div>
    </li>
  </ul>
</section>   
</template>

<script>
import axios from 'axios'
export default{
 
inject:[],
data(){
   return{
      id:null,
      editName:"",
      editNo:"",
      editEmail:"",
      inputIsInvalid:false,
      userName:'pending',
      phoneNumber:"pending",
      email:"pending"
      
   }
}, 
created(){
    console.log(this.$store.state.friends)
   this.id = +this.$route.params.id
  
   const friend=this.$store.state.friends.find(frnd=>frnd.id === this.id)
   console.log(friend.name)
   this.editName=friend.name;
   this.editNo=friend.phone;
   this.editEmail=friend.email;
},
methods:{
   editContact(){
        if(this.editName.trim() === "" || this.editNo.trim() === ""|| this.editEmail.trim() === "" || this.phoneNumber==='invalid' || this.userName=='invalid' || this.email=='invalid' )
                {
                    this.inputIsInvalid=true;
                    return;
                }
           this.updateContact(this.editName,this.editNo,this.editEmail)
        },
        confirmError(){
            this.inputIsInvalid=false
        },
        validityName(){
            if (this.editName.trim()===""){
                this.userName="invalid"
               
                }
            else{
                    this.userName="valid"
            }
        },
        validityNumber(){
               if(this.editNo===null  || !/^\d{10}$/.test(this.editNo)){
                this.phoneNumber="invalid"
            }
            else{
                this.phoneNumber="valid"
            }
        },
        validityEmail(){
                if(this.editEmail.trim()===null  || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.editEmail.trim())){
                this.email="invalid"
            }
            else{
                this.email="valid"
            }
        },
         async updateContact(name,phone,email){
               
        const updateFriend={
            name:name,
            phone:phone,
            email:email,
                  
            };
            await axios.put(`http://localhost:3000/update/${this.id}`,updateFriend)
            this.$router.push('/theresources/friendcontacts') 
        },
        onCancel(){
          this.$router.push('/theresources/friendcontacts') 
        }
}
}
</script>

<style scoped>
button{
   margin-left:2px;
   
}
.invalid input{
    border-color: red;
}
.invalid label{
    color: red;
}
p{
    font-family:Verdana ;
    margin-left: 7px;
    margin-top:3px
}
li{
   
    box-shadow: 0 2px 8px rgba(19, 46, 196, 0.733); 
  /* margin: 1rem auto; */
  border-radius: 10px;
  padding: 2rem;
  /* text-align: center; */
  width: 70%;
  max-width: 50rem;


}

ul{
    list-style:none;
    margin-left: 34%;
  max-width: 38.5rem;

}
 input {
    border-width: 1px;
    border-radius: 5px;
    border-color:black;
}

</style>
