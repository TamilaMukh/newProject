import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import shower from './shower'
import theme from './theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter, shower, theme
  }
})
