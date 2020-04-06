<template>
  <b-container class="orderdetail">
    <b-row class="header-css">
        <b-col class="left-arrow-pos">
            <b-img src="/static/images/right-arrow.png" class="header-img" />
        </b-col>
        <b-col class="headermid" >
            订单详情
        </b-col>
        <b-col  style="">
            
        </b-col>
    </b-row>
    <b-row class="first-row">
        <b-col class="first-row-col">
            <span class="firsttxt">
                等待买家付款
            </span>
            <b-img src="/static/images/clock1.png" class="clock-img" />
            <span class="firsttxt2">23时57分43秒后系统将关闭订单</span>
        </b-col>
    </b-row>
    <b-row class="second-row">
        <b-col class="orderinfo">
            <span>订单信息</span>  
        </b-col>
    </b-row>
    <div class="view-detail">
        <div class="detail">
            <img src="/static/images/detail.png">
            <p>
                牛仔外套女短款新款春秋学生港风夹克上衣
                女韩版宽松牛仔衣服</p>
            <br>
            <p class="specification">
            <span class="color">蓝色</span>
            <span class="price">2980.00*2</span>
            </p>
        </div>
        <div class="total">
            <span>共<b>2</b>件，实付<b>3680.00</b></span>
        </div>
        <div class="info">
            <p>收货人：张三</p>
            <p>收货地址：新疆-五家渠市-五家渠市 新疆五家渠市凉州</p>
            <p>订单编号：202002061654363028736925</p>
            <p>下单时间：2020-02-06 16:54:36</p>
            <p>运费： 6677.00</p>
            <p style="border:none">配送方式： 未配送</p>
        </div>
    </div>                              
    <b-row class="check-btn">
        <b-col style="border-right: 1px solid #F0F0F0;"> 改价 </b-col>
        <!-- <b-col v-b-modal.modal-center> 关闭订单</b-col> -->
        <!-- <b-modal id="modal-center" class="modal-content modal-body" centered hide-header="true" hide-footer="true" cancel-title= "取消" ok-title="确认">
            <p style="text-align: center; font-size: 1.1875rem; color: #000000;">确认关闭订单？</p>
            <p style="text-align: center; font-size: 0.875rem; color: #000000;" class="my-4"> 删除之后可以从电脑端回收站恢复</p>
                <footer id="modal-center___BV_modal_footer_" class="modal-footer">
                    <b-row style="width: 100%; padding-left: 0px;">
                        <b-col style="text-align: center; border-right: 1px solid #E0E0E2;">
                            <button type="button" style="background: #FFF; border: none; color: #236CF6; font-size: 1.0625‬rem;" class="btn btn-secondary">取消</button>
                        </b-col>
                        <b-col style="text-align: center;">
                            <button type="button" style="background: #FFF; border: none; color: #236CF6; font-size: 1.0625‬rem;" class="btn btn-primary">确认</button>
                        </b-col>
                    </b-row>
                </footer>
        </b-modal> -->

        <b-col @click="showModal = true"> 关闭订单</b-col>
        <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
        <modal v-if="showModal" @close="showModal = false">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <!-- <div class="modal-header">
                                <slot name="header">
                                default header
                                </slot>
                            </div> -->
                            <div class="modal-body">
                                <slot name="body">
                                    <p style="padding-top: 1.5rem; margin-bottom: 0rem; text-align: center; font-size: 1.1875rem; color: #000000;" >确认关闭订单？</p>
                                    <p style="margin-top: 1rem !important; text-align: center; font-size: 0.875rem; color: #000000;" class="my-4"> 删除之后可以从电脑端回收站恢复</p>
                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <b-row style="width: 100%; margin: 0rem !important; ">
                                        <b-col style="text-align: center; padding: 0.5rem 0rem; border-right: 1px solid #E0E0E2;">
                                            <button type="button" @click="showModal = false" style="background: #FFF; border: none; color: #236CF6; font-size: 1.0625‬rem;" class="btn btn-secondary">取消</button>
                                        </b-col>
                                        <b-col style="text-align: center; padding: 0.5rem 0rem; ">
                                            <button type="button" style="background: #FFF; border: none; color: #236CF6; font-size: 1.0625‬rem;" class="btn btn-primary">确认</button>
                                        </b-col>
                                    </b-row>
                                    <!-- <button class="modal-default-button" @click="showModal = false"> OK </button> -->
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </modal>
    </b-row>

  </b-container>
</template>
<script>
export default {
  name: 'PendingPaymentViewDetail',
  
  data () {
    return {
        showModal: false
    }
  },
  components: {

  },
  created() {
     
  },
  methods: {
     
  }
}
</script>

<style scoped>
    @media screen and (max-width: 767px) {
        
        .modal-footer {
            display: flex;
            justify-content: space-between;
            margin: 0px !important;
            padding: 0px !important;
        }
        .color {
            color: #999999;
            font-size: 0.8125rem;
        }
        .second-row {
            padding-top: 13px;
            padding-bottom: 13px;
            background: #E4E4E4;
        }
        .first-row {
            background: #FEF0E7;
            padding-top: 13px;
            padding-bottom: 13px;
        }
        .first-row-col {
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
        }
        .header-css {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .clock-img {
            width: 0.9375rem;
            height: 0.9375rem;
            margin-left: 10px;
            margin-right: 10px;
        }
        .firsttxt {
            font-size: 1.0625rem;
            color: #F65700;
        }
        .firsttxt2 {
            font-size: 0.9375rem;
            color: #7C7A79;
        }
        .left-arrow-pos {
            text-align: left;
        }
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .headermid {
            font-size: 1.125rem;
        }
        .orderinfo {
            font-size: 1rem;
            color: #333333;
            text-align: left;
        }
        .detail{
            display: inline-block;
            background: #fff;
        }
        .detail img{
            width: 20%;
            float: left;
            padding: 1rem 0rem;
        }
        .detail p{
            text-align: left;
            padding: 0.8rem 0 0 5.5rem;
            color: #333333;
            font-size: 0.875rem;
        }
        .specification{
            color:#d8d8d8;
            margin-top: -2.5rem;
        }
        .price{
            float: right;
            padding-right: 1rem;
            color: #8B8886;
            font-size: 0.875rem;
        }
        .total{
            font-size: 1.3rem;
            text-align: right;
            background: #ffffff;
        }
        b{
            font-weight: 100;
            font-size: 1.1rem;
            color: #f29674;
        }
        .info{
            text-align: left;
            background: #ffffff;
            padding-top: 1.2rem;
        }
        .info p{
            padding: 0.01rem 0 1rem 0;
            color:#666666;
            font-size: 0.875rem;
        }
        .check-btn{
            border-top: 1.5rem solid #F0F0F0;
            padding: 1rem 0;
            color: #13A4EF;
            font-size: 1rem;
            margin-bottom: 3rem;
        }




        .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
        }

        .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        }

        .modal-container {
        width: 300px;
        margin: 0px auto;
        /* padding: 20px 30px; */
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;

        border-radius: 0.7rem;
        }

        .modal-header h3 {
        margin-top: 0;
        color: #42b983;
        }

        .modal-body {
        margin: 0px 0px;
        padding: 0rem 1rem;
        }

        .modal-default-button {
        float: right;
        }

        .modal-footer {
            margin: 0rem;
        }

        /*
        * The following styles are auto-applied to elements with
        * transition="modal" when their visibility is toggled
        * by Vue.js.
        *
        * You can easily play with the modal transition by editing
        * these styles.
        */

        .modal-enter {
        opacity: 0;
        }

        .modal-leave-active {
        opacity: 0;
        }

        .modal-enter .modal-container,
        .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        }
    } 


    @media screen and (max-width: 1366px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        
        .modal-footer {
            display: flex;
            justify-content: space-between;
            margin: 0px !important;
            padding: 0px !important;
        }
        .color {
            color: #999999;
            font-size: 0.8125rem;
        }
        .second-row {
            padding-top: 13px;
            padding-bottom: 13px;
            background: #E4E4E4;
        }
        .first-row {
            background: #FEF0E7;
            padding-top: 13px;
            padding-bottom: 13px;
        }
        .first-row-col {
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
        }
        .header-css {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .clock-img {
            width: 0.9375rem;
            height: 0.9375rem;
            margin-left: 10px;
            margin-right: 10px;
        }
        .firsttxt {
            font-size: 1.0625rem;
            color: #F65700;
        }
        .firsttxt2 {
            font-size: 0.9375rem;
            color: #7C7A79;
        }
        .left-arrow-pos {
            text-align: left;
        }
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .headermid {
            font-size: 1.125rem;
        }
        .orderinfo {
            font-size: 1rem;
            color: #333333;
            text-align: left;
        }
        .detail{
            display: inline-block;
            background: #fff;
            width: 100%;
        }
        .detail img{
            width: 20%;
            float: left;
            padding: 1rem 0rem;
            margin-right: 1rem;
        }
        .detail p{
            text-align: left;
            padding: 0.8rem 0 0 5.5rem;
            color: #333333;
            font-size: 0.875rem;
        }
        .specification{
            color:#d8d8d8;
            margin-top: -2.5rem;
        }
        .price{
            float: right;
            padding-right: 1rem;
            color: #8B8886;
            font-size: 0.875rem;
        }
        .total{
            font-size: 1.3rem;
            text-align: right;
            background: #ffffff;
        }
        b{
            font-weight: 100;
            font-size: 1.1rem;
            color: #f29674;
        }
        .info{
            text-align: left;
            background: #ffffff;
            padding-top: 1.2rem;
        }
        .info p{
            padding: 0.01rem 0 1rem 0;
            color:#666666;
            font-size: 0.875rem;
        }
        .check-btn{
            border-top: 1.5rem solid #F0F0F0;
            padding: 1rem 0;
            color: #13A4EF;
            font-size: 1rem;
            margin-bottom: 3rem;
        }




        .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
        }

        .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        }

        .modal-container {
        width: 300px;
        margin: 0px auto;
        /* padding: 20px 30px; */
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;

        border-radius: 0.7rem;
        }

        .modal-header h3 {
        margin-top: 0;
        color: #42b983;
        }

        .modal-body {
        margin: 0px 0px;
        padding: 0rem 1rem;
        }

        .modal-default-button {
        float: right;
        }

        .modal-footer {
            margin: 0rem;
        }

        /*
        * The following styles are auto-applied to elements with
        * transition="modal" when their visibility is toggled
        * by Vue.js.
        *
        * You can easily play with the modal transition by editing
        * these styles.
        */

        .modal-enter {
        opacity: 0;
        }

        .modal-leave-active {
        opacity: 0;
        }

        .modal-enter .modal-container,
        .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        }
    } 
</style>



<!--  
    https://vuejs.org/v2/examples/modal.html 
    https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component?from-embed
-->