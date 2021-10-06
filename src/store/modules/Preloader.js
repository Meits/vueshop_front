const mutations = {
  setLoading (state) {
    state.loading = true
  },
  setUnLoading (state) {
    state.loading = false
  }
}

const state = {
  loading: false
}

const getters = {
  loading: state => {
    return state.loading
  }
}

const actions = {
  setLoading (context) {
    context.commit('setLoading')
  },
  setUnLoading (context) {
    // emulation of a response from the server
    setTimeout(function () {
      context.commit('setUnLoading')
    }, 1000)
  }
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
