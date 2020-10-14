import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from './axios'
import VueCookies from 'vue-cookies'

Vue.prototype.$axios = axios
Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// this.$cookies.config('10d')

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
