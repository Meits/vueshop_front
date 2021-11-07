/**
 * Created by viktor on 17.02.21.
 */

 import {HTTP} from '@/js/http-base'

 const mutations = {
   
 }
 
 const state = {
   
 }
 
 const getters = {
   
 }
 const actions = {
   register ({ commit, dispatch }, form) {

    return new Promise((resolve, reject) => {
      // enable preloader
      dispatch('setLoading', null, { root: true })
      
      HTTP.post('/api/register', form
      ).then((response) => {

      console.log('Store request ok',response)
      resolve(response)
        
      })
      .catch(err => {
        console.log('Error register store','111',err)
        reject(err);
      })
      .finally(() => dispatch('setUnLoading', null, { root: true }))
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
 