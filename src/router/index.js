import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import consultantDetail from '@/pages/consultantDetail'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/consultantDetail',
      name: 'consultantDetail',
      component: consultantDetail
    }
  ]
})
