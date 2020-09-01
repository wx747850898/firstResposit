// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { mock } from 'mockjs'
import mkData from './common/mockData'
import { httpGet, httpPost } from './common/api'
import inface from './common/interface'

Vue.config.productionTip = false

Vue.prototype.$mock = mock;
Vue.prototype.$mkData = mkData;
Vue.prototype.$httpGet = httpGet;
Vue.prototype.$httpPost = httpPost;
Vue.prototype.$inface = inface;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
