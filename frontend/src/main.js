import { createApp } from 'vue'
import App from './App.vue'

import router from './route'
import store from './store.js'

import BaseDialog from './components/UI/BaseDialog.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

import httpInterceptor from './interceptor.js';


const app=createApp(App)
app.use(router)
app.use(store)

app.component('BootstrapIcon', BootstrapIcon);
app.component('base-dialog',BaseDialog)

httpInterceptor();
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"