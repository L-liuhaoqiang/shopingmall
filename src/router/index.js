import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
Vue.use(VueRouter)
const search = () =>
    import ('../views/Search/search')
const Cart = () =>
    import ('../views//Cart/cart')
const My = () =>
    import ('../views/My/My')


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'home',
        component: Home
    }, {
        path: '/search',
        name: 'search',
        component: search
    }, {
        path: '/Cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/My',
        name: 'my',
        component: My
    }
]

const router = new VueRouter({
    routes
})

export default router