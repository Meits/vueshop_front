<template>
  <component :is="layoutName"></component>
</template>


<script>
import Layout from "./components/layout/Layout.vue"
import EmptyLayout from "./components/layout/EmptyLayout.vue"
import axios from 'axios'
import {HTTP} from './js/http-base'

export default {
  mounted() {
    console.log('Component mounted.')
  },
  data: () => ({

  }),
  components : {
    Layout,
    EmptyLayout
  },
  mounted () {
    this.setBackEndSession()
  },
  methods : {
    setBackEndSession () {
        HTTP.get('/sanctum/csrf-cookie').then(response => {
          console.log(response);
        });
    },
  },
  computed : {
    layoutName () {
      if(this.$route.meta.layout ) {
        return this.$route.meta.layout + 'Layout'
      }
      return 'Layout'
    },
  }
}

</script>
