// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//swiper
import  '../node_modules/swiper/dist/css/swiper.min.css'
//config
import config from './modules/config'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   data:{config},
  components: { App },
  template: '<App/>'
})
