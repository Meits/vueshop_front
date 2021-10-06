/**
 * Created by viktor on 17.02.21.
 */

import axios from 'axios'

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
  getItems ({ commit, dispatch }, form) {
    // enable preloader
    dispatch('setLoading', null, { root: true })

    axios.get('http://laravelapp.loc/api/product', {
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
