import { createRouter, createWebHistory } from 'vue-router';

import loginComponent from './components/authourisation/loginComponent.vue';
import signupComponent from './components/authourisation/signupComponent.vue';
import TheResources from './components/service/TheResources.vue'

import FriendContacts from './components/service/FriendContacts.vue';
import AddFriendContact from './components/service/AddFriendContact.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login', component:loginComponent},
        {path:'/signup', component:signupComponent},
        {path:'/theresources',component:TheResources,children:[
            {path:'friendcontacts',component:FriendContacts},
            {path:'addfriendcontact',component:AddFriendContact}
        ]}
    ]
})

export default router;




