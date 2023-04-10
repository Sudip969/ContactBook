<template>
    <section >
        <div class="container-fluid ">
    <div class="row d-flex justify-content-center align-items-center ">

        <ul >
    <li v-for="friend in $store.state.friends" :key="friend.id">
      <ul  >
     <li>
        <div class="col-md-9 col-lg-6 col-xl-5">

        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 ">
    <h2 v-if="friend.favourite">{{friend.name}} *</h2>
    <h2 v-else>{{friend.name}} </h2>

    <button @click="visibleToggle">{{changeText}}</button>

    <button @click="favToggle(friend.id)">Favourite</button>
   
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Phone:</strong>{{friend.phone}}
        </li>
        <li>
            <strong>Email:</strong>{{friend.email}}
        </li>
    </ul>
        </div>
    </li> 
     <button @click="onDelete(friend.id)">Delete</button>       <!-- <button @click="$emit("delete-contact",id)">Delete</button>  -->
  
      
       <router-link :to="'/friendcontacts/edit/' +friend.id"> <button v-if="detailsAreVisible">Edit</button></router-link>
      
      </ul>
    </li>
    
</ul>

    </div>
    </div>
    </section>
</template>


<script>

import axios from 'axios'

export default{     
inject:['getContacts'],  

  data(){
    return{
         detailsAreVisible:false,
    }
  },
  async mounted(){
      this.getContacts();
      },

  computed:{
        changeText(){
            if(this.detailsAreVisible){
                return "Hide Details"
            }
            else{
                return "Show Details"
            }
        },
  },
      methods:{
        visibleToggle(){
            this.detailsAreVisible=!this.detailsAreVisible
        },
     
           async favToggle(frndId){
            const index=this.$store.state.friends.findIndex(frnd=>frnd.id===frndId)
            console.log(index)
            this.$store.state.friends[index].favourite=!this.$store.state.friends[index].favourite 
            await axios.put(`http://localhost:3000/update/${frndId}`,{favourite:this.$store.state.friends[index].favourite})
        },
          async onDelete(frndId){
            // const index = this.$store.state.friends.findIndex(frnd => frnd.id === frndId)
            await axios.delete(`http://localhost:3000/delete/${frndId}`)
            this.getContacts();
        } ,
      

      },
      
}
</script>

<style scoped>
/* section{
    margin-left:20%
} */
img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}
ul{
    list-style:none;
    margin: auto;
  max-width: 40rem;

}
li{
   
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto; /*margin :1rem auto */
  /* border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 40rem;  */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); 
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 50rem;


}
</style>