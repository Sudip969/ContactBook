import { createRouter, createWebHistory } from 'vue-router';

import loginComponent from './components/authourisation/loginComponent.vue';
import signupComponent from './components/authourisation/signupComponent.vue';
import TheResources from './components/service/TheResources.vue'

import FriendContacts from './components/service/FriendContacts.vue';
import AddFriendContact from './components/service/AddFriendContact.vue';
import EditContact from './components/service/EditContact.vue';

import store from './store';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login', component:loginComponent,meta:{requiresUnauth:true}},
        {path:'/signup', component:signupComponent},
        {path:'/theresources',component:TheResources,children:[
            {path:'friendcontacts/',component:FriendContacts,meta:{requiresAuth:true}},
            {path:'addfriendcontact',component:AddFriendContact,meta:{requiresAuth:true}},
            {path:'friendcontacts/edit/:id',component:EditContact,meta:{requiresAuth:true}}
        ],meta:{requiresAuth:true}}
    ]
})

router.beforeEach(function(to,from,next){
    if(to.meta.requiresAuth && !store.getters.isAuth){
        next('/login');
    }
    // else if(to.meta.requiresUnauth && store.getters.isAuth){
    //     next('/theresources')
    // }
    else{
        next()
    }
})

export default router;




