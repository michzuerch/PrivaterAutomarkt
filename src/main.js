// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { router, head, isClient }) {
 head.htmlAttrs = { lang: 'de' }

  Vue.use(BootstrapVue)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
