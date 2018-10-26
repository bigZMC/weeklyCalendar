// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

// 将moment.js引入并放置在vue原型链上
import moment from 'moment'
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
