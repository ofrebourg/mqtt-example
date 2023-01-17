import './assets/main.css'

// import { Buffer } from 'buffer'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  vuetify,
  render: h => h(App)
}).$mount('#app')

// window.global = window
// // window.Buffer = window.Buffer || require('buffer').Buffer
// window.Buffer = window.Buffer || Buffer
