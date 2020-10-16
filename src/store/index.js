import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: [],
    },
    getters: {
        getcartlist(state) {
            return state.cartList
        },
        getcount(state) {
            return state.cartList.length
        }
    },
    mutations: {
        addcount(state, Oldproduct) {
            Oldproduct.count += 1
        },
        addCart(state, product) {
            product.checked = true
            state.cartList.push(product)
        }
    },
    actions: {
        increment(context, product) {
            let Oldproduct = context.state.cartList.find(item => {
                return item.iid === product.iid
            })

            if (Oldproduct) {
                context.commit('addcount', Oldproduct)
            } else {
                product.count = 1
                context.commit('addCart', product)
            }
        }
    },
    modules: {}
})