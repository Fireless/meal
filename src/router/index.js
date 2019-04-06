import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu'
import Signin  from '@/views/Signin'
import Join from '@/views/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: Signin
  },
  {
      path: '/join',
      name: 'join',
      component: Join
  }
  
      
  ]
    
})

