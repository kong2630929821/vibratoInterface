import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'//导航栏

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavigationBar',
      component: NavigationBar
    }
  ]
})
