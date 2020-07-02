import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import useEUI from './ui/eui'

Vue.config.productionTip = false
useEUI()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
