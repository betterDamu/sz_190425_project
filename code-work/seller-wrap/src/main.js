import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import HeaderTop from "components/HeaderTop/HeaderTop"

Vue.config.productionTip = false
Vue.component("HeaderTop",HeaderTop)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
