<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "components/FooterGuide/FooterGuide.vue";
import {mapActions} from "vuex"
export default {
  name: 'app',
  components:{
      FooterGuide
  },
  methods:{
      ...mapActions(["getUserByToken"])
  },
  created(){
      this.getUserByToken()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
