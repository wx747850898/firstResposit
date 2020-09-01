import Vue from 'vue'
import Router from 'vue-router'
import EasyMock from '@/components/EasyMock'
import CreateSignature from '@/components/CreateSignature'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EasyMock',
      component: EasyMock
    },
    {
      path: '/sss',
      name: 'CreateSignature',
      component: CreateSignature
    }
  ]
})
