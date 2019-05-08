import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/page/Shoppingmall'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    }

  ]
})
