<template>
    <section>
        <div class="container-fluid ">
    <div class="row d-flex justify-content-center align-items-center ">

        <ul >
    <li v-for="friend in $store.state.friends" :key="friend.id">
      <ul  >
     <li>
    <h2 v-if="friend.favourite">{{friend.name}} *</h2>
    <h2 v-else>{{friend.name}} </h2>

    <base-button @click="visibleToggle">{{changeText}}</base-button>

    <base-button @click="favToggle(friend.id)">Favourite</base-button>
   
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Phone:</strong>{{friend.phone}}
        </li>
        <li>
            <strong>Email:</strong>{{friend.email}}
        </li>
    </ul>
    </li> 
     <base-button @click="onDelete(friend.id)">Delete</base-button>       <!-- <button @click="$emit("delete-contact",id)">Delete</button>  -->
  
      
       <router-link :to="'/friendcontacts/edit/' +friend.id"> <base-button v-if="detailsAreVisible">Edit</base-button></router-link>
      
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