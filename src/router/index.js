import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'
import Login from '@/components/Login'
import home from '@/components/home/home'
import MyNew from '@/components/MyNew'
import MyProfile from '@/components/MyProfile'
import ChangePhoneNo from '@/components/ChangePhoneNo'
import ChangeShopName from '@/components/ChangeShopName'
import ChangeShopInfo from '@/components/ChangeShopInfo'
import ModifyingAttribute from '@/components/ModifyingAttribute'
import Ship from '@/components/Ship'
import Product from '@/components/Product'
import CommodityConsultation from '@/components/CommodityConsultation'
import Shop from '@/components/Shop'
import PendingPayment from '@/components/PendingPayment'
import PendingPaymentViewDetail from '@/components/PendingPaymentViewDetail'
import PendingDeliveryViewDetail from '@/components/PendingDeliveryViewDetail'
import TobeDeliver from '@/components/TobeDeliver'
import ChangePrice from '@/components/ChangePrice'
import RefundAfterSale from '@/components/RefundAfterSale'
import CapitalCenter from '@/components/CapitalCenter'
import Order from '@/components/Order'
import MessagePlatform from '@/components/MessagePlatform'
import MessageInner from '@/components/MessageInner'
import ShippingAddress from '@/components/ShippingAddress'
import NewShippingAddress from '@/components/NewShippingAddress'
import EditShippingAddress from '@/components/EditShippingAddress'
import AddShippingAddress from '@/components/AddShippingAddress'
import calendar1 from '@/components/calendar1'
import calendar2 from '@/components/calendar2'

import FindMyPassword from '@/components/FindMyPassword'
import ViewDetail from '@/components/ViewDetail'
import ForgetPassword from '@/components/ForgotPassword'

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
          },//chit su
          {
            path: '/my-profile',
            name: 'MyProfile',
            component: MyProfile
          },
          {
            path: '/modifying-attribute',
            name: 'ModifyingAttribute',
            component: ModifyingAttribute
          },
          {
            path: '/ship',
            name: 'Ship',
            component: Ship
          },
          {
            path: '/product',
            name: 'Product',
            component: Product
          },
          {
            path: '/commodity-consultation',
            name: 'CommodityConsultation',
            component: CommodityConsultation
          },
          {
            path: '/edit-shipping-address',
            name: 'EditShippingAddress',
            component: EditShippingAddress
          },
          {
            path: '/shop',
            name: 'Shop',
            component: Shop
          },
          {
            path: '/pending-payment',
            name: 'PendingPayment',
            component: PendingPayment
          },
          {
            path: '/to-deliver',
            name: 'TobeDeliver',
            component: TobeDeliver
          },// can delete but
          {
            path: '/order',
            name: 'Order',
            component: Order
          },// can delete but
          {
            path: '/refund-after-sale',
            name: 'RefundAfterSale',
            component: RefundAfterSale
          },
          {
            path: '/pending-payment-view-detail',
            name: 'PendingPaymentViewDetail',
            component: PendingPaymentViewDetail
          },
          {
            path: '/pending-delivery-view-detail',
            name: 'PendingDeliveryViewDetail',
            component: PendingDeliveryViewDetail
          },
          {
            path: '/calendar1',
            name: 'calendar1',
            component: calendar1
          },//need to add calendar (may be date picker)
          {
            path: '/calendar2',
            name: 'calendar2',
            component: calendar2
          },// can delete but
          {
            path: '/change-price',
            name: 'ChangePrice',
            component: ChangePrice
          },
          {
            path: '/capital-center',
            name: 'CapitalCenter',
            component: CapitalCenter
          },
          {
            path: '/my-new',
            name: 'MyNew',
            component: MyNew
          },
          {
            path: '/message-platform',
            name: 'MessagePlatform',
            component: MessagePlatform
          }, // can delete but 
          {
            path: '/message-inner',
            name: 'MessageInner',
            component: MessageInner
          },
          {
            path: '/shipping-address',
            name: 'ShippingAddress',
            component: ShippingAddress
          },
          {
            path: '/new-shipping-address',
            name: 'NewShippingAddress',
            component: NewShippingAddress
          },
          {
            path: '/add-shipping-address',
            name: 'AddShippingAddress',
            component: AddShippingAddress
          },// need to hide popup when click other place
          {
            path: '/view-detail',
            name: 'ViewDetail',
            component: ViewDetail
          },//myatsu // khaing yee mon //thandaraung
          {
            path: '/find-password',
            name: 'FindMyPassword',
            component: FindMyPassword
          },//myatsu // khaing yee mon
          {
            path: '/change-ph-no',
            name: 'ChangePhoneNo',
            component: ChangePhoneNo
          },//chitsu // khaing yee mon
          {
            path: '/change-shop-name',
            name: 'ChangeShopName',
            component: ChangeShopName
          },//chitsu // khaing yee mon
          {
            path: '/change-shop-info',
            name: 'ChangeShopInfo',
            component: ChangeShopInfo
          },//myatsu // khaing yee mon
          {
            path: '/forget-password',
            name: 'ForgetPassword',
            component: ForgetPassword
          }//error
          
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
