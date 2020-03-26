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
            <b-col v-b-modal.modal-center> 关闭订单</b-col>
            <b-modal id="modal-center" class="modal-content modal-body" centered hide-header="true" hide-footer="true" cancel-title= "取消" ok-title="确认">
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
            </b-modal>
        </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'PendingPaymentViewDetail',
  data () {
    return {
        
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
  }
} 
</style>
