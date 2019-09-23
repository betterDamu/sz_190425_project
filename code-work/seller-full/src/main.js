import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store/store.js"
import http from "@/api"
import HeaderTop from "components/HeaderTop/HeaderTop"
import "./validate"
import "@/mock"
import "@/common/common-layout/stylus/icon.styl"

Vue.prototype.$http=http;
Vue.config.productionTip = false
Vue.component("HeaderTop",HeaderTop)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
