import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    totalAll: 0,
    totalTaxes: 0
  },
  mutations: {
    addItem (state, payload) {
      state.cart = [...state.cart, payload]
      state.totalAll += payload.total
      state.totalTaxes += payload.totalTaxes
    }
  },
  actions: {
    addItem ({ commit }, payload) {
      commit('addItem', payload)
    }
  },
  modules: {
  }
})
