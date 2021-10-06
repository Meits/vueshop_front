<template>
  <component :is="layoutName"></component>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Layout from "./components/layout/Layout.vue"
import EmptyLayout from "./components/layout/EmptyLayout.vue"

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
