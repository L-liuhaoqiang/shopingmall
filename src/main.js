import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(VueAxios, axios)
    //vant
import './plugins/vant'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://123.207.32.32:8000/api/h8';
axios.defaults.timeout = 8000;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')