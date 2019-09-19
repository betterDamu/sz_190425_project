import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "@/mock"
import "@/common/stylus/icon.styl"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
