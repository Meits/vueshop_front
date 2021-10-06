<template>
  <div>
    <navigation/>
    <header-component/>
    <router-view/>
    <preloader/>
    <footer-component/>
  </div>
  
</template>

<script>

import Preloader from "./Preloader.vue"
import Navigation from "./Navigation.vue"
import HeaderComponent from "./HeaderComponent.vue"
import FooterComponent from "./FooterComponent.vue"

export default {

  name: 'Layout',
  components: {
    Preloader,
    Navigation,
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      title: 'Category page'
    }
  },
  computed : {
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>

</style>