<template>
  <b-container class="orderdetail">
      <div class="view-detail">
          <div class="orderinfo">
             <h4>订单信息</h4>  
          </div>
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
              <p>付款时间：1970-01-01 08:00:00</p>
              <p>配送时间：1970-01-01 08:00:00</p>
              <p>运费： 6677.00</p>
              <p style="border:none">配送方式： 未配送</p>
          </div>
          <div class="orderinfo">
             <h4>订单信息</h4>  
          </div>
          <div class="info">
              <p>退款原因：订单信息拍错，重新拍</p>
              <p>退款金额：￥600.00</p>
              <p>申请时间：2020-02-04- 14：11：26</p>
              <p style="border:none">退款编号：635564546565656</p>
          </div>
          <div class="check-btn">
              <input type="accept" value="同意" class="acceptcss" style="border-right: 0.09rem solid #f5f5f5;">
              <input type="refuse" value="拒绝" class="refusecss">
          </div>
      </div>
  </b-container>
</template>

<script>
export default {
  name: 'viewdetail',
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
  .acceptcss {
    width: 50%; 
  }
  .refusecss {
    width: 50%;
  }
  .orderdetail{
    background-color: #ffffff !important;
    width: 100%;
    max-width: 100%;
  }
  .view-detail{
    background-color: #ffffff !important;
    width: 100%;
    max-width: 100%;
  }
  .orderinfo h4{
      font-size: 1.3rem;
      text-align: left;
      padding: 0.95rem 0;
  }
  .detail{
       display: inline-block;
       background: #fff;
       border-bottom: 0.05rem dashed  #e8e8e8;
  }
  .detail img{
      width: 20%;
      float: left;
      padding: 1rem 0rem;
  }
  .detail p{
      text-align: left;
      padding: 0.8rem 0 0 5.5rem;
      color: #929292;
  }
  .specification{
      color:#d8d8d8;
      margin-top: -2.5rem;
  }
  .price{
      float: right;
      padding-right: 1rem;
  }
  .total{
    padding: 1rem 0;
    font-size: 1.3rem;
    text-align: right;
    background: #ffffff;
    border-bottom: 0.05rem dashed #e8e8e8;
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
      border-bottom: 0.05rem dashed #e8e8e8;
      color:#b6b6b6;
  }
  .check-btn{
      display: flex;
      justify-content: center;
      padding: 1rem 0rem;
  }
   input[type=accept], input[type=refuse]{
      text-align: center;
      border: none;
      color: #a1dbf9;
  }
}

@media screen and (max-width: 1366px) and (min-width: 768px) {
  .acceptcss {
    width: 50%; 
  }
  .refusecss {
    width: 50%;
  }
  .container {
    width: 100%;
    max-width: 100%;
  }
  .orderdetail{
    background-color: #ffffff !important;
    width: 100%;
    max-width: 100%;
  }
  .view-detail{
    background-color: #ffffff !important;
    width: 100%;
    max-width: 100%;
  }
  .orderinfo h4{
    font-size: 1.3rem;
    text-align: left;
    padding: 0.95rem 0;
  }
  .detail{
    display: inline-block;
    background: #fff;
    border-bottom: 0.05rem dashed  #e8e8e8;
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
    color: #929292;
  }
  .specification{
    color:#d8d8d8;
    margin-top: -2.5rem;
  }
  .price{
    float: right;
    padding-right: 1rem;
  }
  .total{
    padding: 1rem 0;
    font-size: 1.3rem;
    text-align: right;
    background: #ffffff;
    border-bottom: 0.05rem dashed #e8e8e8;
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
    border-bottom: 0.05rem dashed #e8e8e8;
    color:#b6b6b6;
  }
  .check-btn{
    display: flex;
    justify-content: center;
    padding: 1rem 0rem;
    width: 100%;
    max-width: 100%;
  }
  input[type=accept], input[type=refuse]{
    text-align: center;
    border: none;
    /* padding: 1rem 0; */
    color: #a1dbf9;
  }
}
</style>
