import Vuex from 'vuex'
import Vue from 'vue'
import cart from './modules/cart'
import goods from './modules/goods'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    goods
  }
})
