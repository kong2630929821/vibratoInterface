import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'//导航栏
import Index from '../components/Index.vue'//首页
import BatchDewateringLink from '../components/BatchDewateringLink.vue'//批量去水印按链接
import BatchDewateringUser from '../components/BatchDewateringUser.vue'//批量去水印按用户
import PseudoOriginal from '../components/PseudoOriginal.vue'//视频伪原创
import VideoLibrary from '../components/VideoLibrary.vue'//无水印视频仓库
import CustomerService from '../components/CustomerService.vue'//客服

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/navigationBar/index'
    },
    {
      path: '/navigationBar',
      name: 'navigationBar',
      component: NavigationBar,
      children:[
        {
          path:'index',
          name:'index',
          component:Index
        },
        {
          path:'batchDewateringLink',
          name:'batchDewateringLink',
          component:BatchDewateringLink
        },
        {
          path:'batchDewateringUser',
          name:'batchDewateringUser',
          component:BatchDewateringUser
        },
        {
          path:'pseudoOriginal',
          name:'pseudoOriginal',
          component:PseudoOriginal
        },
        {
          path:'videoLibrary',
          name:'videoLibrary',
          component:VideoLibrary
        },
        {
          path:'customerService',
          name:'customerService',
          component:CustomerService
        }
      ]
    }
  ]
})
