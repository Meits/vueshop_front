<template>
    <span class="invalid-feedback" v-for="(error, index) of errors" :key="index">
          <strong>{{ error.$property }} - {{ error.$message }}</strong>
    </span>
    <span class="invalid-feedback" v-if="serverError" ><strong>{{ getErrorText()}}</strong></span>
</template>

<script>

import { mapState } from 'vuex'

export default {

  name: 'ErrorMessage',
  components: {},
  data () {
    return {
      
    }
  },
  props: [
    'errors',
    'serverError'
  ],
  computed : {
    ...mapState({
        
    }),
  },
  methods : {
    getErrorText () {
          let str = '';
          if(this.serverError) {
            return this.serverError.join(' ');
          }
          return str;
    },
  },
  mounted() {
  },
}
</script>

<style lang="sass" scoped>

</style>