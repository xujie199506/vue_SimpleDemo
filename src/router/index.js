import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/page/Shoppingmall'
import Register from '@/components/page/Register'
import LogIn from '@/components/page/LogIn'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ShoppingMall',
    component: ShoppingMall
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }]
})
