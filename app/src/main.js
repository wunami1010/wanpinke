// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
<<<<<<< HEAD
import axios from 'axios'

=======
>>>>>>> 86c8a49e4caf753f79d69d9944befab32d6078e1
import { Input, Card } from 'element-ui'
Vue.use(Input)
Vue.use(Card)
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
