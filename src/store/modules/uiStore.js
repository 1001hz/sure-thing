const state = {
  menuActive: false,
  splashHasRun: false,
  splashFinished: false
}

const getters = {
  menuActive: state => {
      return state.menuActive
  },
  splashHasRun: state => {
    return state.splashHasRun
  },
  splashFinished: state => {
    return state.splashFinished
  }
}

const actions = {
  openMenu: function ({commit}) {
    commit('OPEN_MENU')
  },
  closeMenu: function ({commit}) {
    commit('CLOSE_MENU')
  },
  splashHasRun: function ({commit}) {
    commit('SPLASH_HAS_RUN')
  },
  splashFinished: function ({commit}) {
    commit('SPLASH_FINISHED')
  }
}

const mutations = {
  OPEN_MENU (state) {
    state.menuActive = true
  },
  CLOSE_MENU (state) {
    state.menuActive = false
  },
  SPLASH_HAS_RUN (state) {
    state.splashHasRun = true
  },
  SPLASH_FINISHED (state) {
    state.splashFinished = true
  }
}

const uiStore = {
  getters,
  actions,
  mutations,
  state
}

export default uiStore
