import { createRouter, createWebHistory } from 'vue-router';

import loginComponent from './components/authourisation/loginComponent.vue';
import signupComponent from './components/authourisation/signupComponent.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login', component:loginComponent},
        {path:'/signup', component:signupComponent}
    ]
})

export default router;




