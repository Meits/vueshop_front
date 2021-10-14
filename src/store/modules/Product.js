/**
 * Created by viktor on 17.02.21.
 */

import {HTTP} from '@/js/http-base'

const mutations = {
  setItems (state, items) {
    state.items = items
  }
}

const state = {
  items: []
}

const getters = {
  items: state => {
    return state.items
  }
}
const actions = {
  getProducts ({ commit, dispatch }, form) {
    // enable preloader
    dispatch('setLoading', null, { root: true })

    HTTP.get('/api/product', {
      params: form
    }).then((response) => {
      if (response.data.data.items) {
        commit('setItems', response.data.data.items)
      }
      // disable preloader
      dispatch('setUnLoading', null, { root: true })
    })
  }
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
