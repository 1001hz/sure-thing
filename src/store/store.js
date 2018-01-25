import Vuex from 'vuex'
import Vue from 'vue'
import uiStore from './modules/uiStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    uiStore
  }
})
