import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deltaYcounter: 0
  },

  mutations: {
    setCounterToCero() {
      this.state.deltaYcounter = 0
    }
  }
})
