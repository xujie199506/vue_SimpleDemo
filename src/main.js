// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Field,
  NavBar
}
from 'vant'
import 'vant/lib/index.css';

Vue.use(Field).use(NavBar).use(Button).use(Lazyload).use(Row).use(Col).use(Swipe).use(SwipeItem).use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
