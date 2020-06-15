import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deltaYcounter: 0,
    startY: 0,
    accumulatedY: 0,
    partialY: 0
  },

  mutations: {
    setCounterToCero() {
      this.state.deltaYcounter = 0
      this.state.startY = 0
      this.state.accumulatedY = 0
      this.state.partialY = 0
    }
  }
})
