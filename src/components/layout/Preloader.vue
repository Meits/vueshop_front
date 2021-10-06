<template>
  <div>
    <div v-if="loading">
      preloader show
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

  name: 'Preloader',
  components: {},
  data () {
    return {
      title: 'Category page'
    }
  },
  computed : {
    ...mapState({
        loading: state => state.Preloader.loading,
    }),
        },
  mounted() {
  },
}
</script>

<style lang="sass" scoped>

</style>