// import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import icons from './icons'

Vue.use(Vuetify)

const opts = {
  icons,
  theme: { dark: true }
}

export default new Vuetify(opts)
