import { createStore } from 'vuex'
import Preloader from './modules/Preloader'
import Product from './modules/Product'

import axios from 'axios'
axios.defaults.withCredentials = true;

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Preloader,
    Product
  }
})
