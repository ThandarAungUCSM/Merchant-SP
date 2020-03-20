// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'es6-promise/auto'

import Vue from 'vue'
import axios from 'axios'
import App from './App'
import VueI18n from 'vue-i18n'
import i18n from './domain/i18n/i18n.js'
import router from './router'

import 'es6-promise/auto'

import store from '@/domain/store'
import Vuex from 'vuex'

import httpConfig from './httpConfig';
import HTTP from '../config/HTTP';
Vue.prototype.$httpConfig = httpConfig;
Vue.prototype.$HTTP = HTTP;

import { BootstrapVue } from 'bootstrap-vue'

// import App from './App'
// import router from './router'

// import './assets/scss/custom.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import isLogin from '../js/base';



// import '../node_modules/bootstrap/scss/bootstrap';
// import '../node_modules/bootstrap-vue/src/index.scss';


Vue.config.productionTip = false
// config.i18n = i18n

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(isLogin);

new Vue({
  el: '#app',
  router: router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
