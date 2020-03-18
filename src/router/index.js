import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyNew from '@/components/MyNew'
import MyProfile from '@/components/MyProfile'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my-new',
      name: 'MyNew',
      component: MyNew
    },
    {
      path: '/my-profile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
