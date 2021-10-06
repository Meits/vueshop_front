<template>
  <div>
    <router-view/>
    <preloader/>
  </div>
  
</template>

<script>

import Preloader from "./Preloader.vue"

export default {

  name: 'Layout',
  components: {
    Preloader
  },
  data () {
    return {
      
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