import { createApp } from 'vue'
import App from './App.vue'

import router from './route'
import store from './store.js'


import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';


const app=createApp(App)
app.use(router)
app.use(store)

app.component('BootstrapIcon', BootstrapIcon);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"