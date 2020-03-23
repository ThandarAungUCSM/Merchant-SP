import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'
import Login from '@/components/Login'
import home from '@/components/home/home'
import MyNew from '@/components/MyNew'
import MyProfile from '@/components/MyProfile'
import ChangePhoneNo from '@/components/ChangePhoneNo'
import ChangeShopName from '@/components/ChangeShopName'
import FindMyPassword from '@/components/FindMyPassword'
import Profile from '@/components/Profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
          {
            path: '',
            redirect: '/login'
          },
          {
            path: '/login',
            name: 'Login',
            component: Login
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
            path: '/change-ph-no',
            name: 'ChangePhoneNo',
            component: ChangePhoneNo
          },
          {
            path: '/change-shop-name',
            name: 'ChangeShopName',
            component: ChangeShopName
          },
          {
            path: '/find-password',
            name: 'FindMyPassword',
            component: FindMyPassword
          },
          {
            path: '/profile',
            name: 'Profile',
            component: Profile
          }
          
      ]
    }
  ]
});



Router.prototype.initLocalRouters = function () {
  let allPrivilege = sessionStorage.getItem('allPrivilege');
  if (allPrivilege) {
      // allPrivilege = JSON.parse(allPrivilege);
      // let topMenu = [];
      // for (var i in allPrivilege) {
      //   let json = {
      //       name: allPrivilege[i].name,
      //       path: allPrivilege[i].path,
      //       component: eval(allPrivilege[i].name)
      //   } 
      //   topMenu.push(json)
      //   router.addRoutes(topMenu)
      // }

      router.addRoutes([{
        name: "home",
        path: "/home",
        component: home           
      }]);
      console.log(router.options.routes);
  }

}
router.initLocalRouters();
export default router
