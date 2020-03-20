<template>
  <b-container class="home">
    
    <div style="position: relative;">
        <div class="title-bgcolor">
          <div class="title-row1">
            <b-img src="/static/images/group.png" class="title-img"/>
            <span class="title-size">小天鹅官方旗舰店</span>
            <b-img src="/static/images/shape605.png" class="scan-img"/>
          </div>
          <b-row class="title-row2">
            <b-col>
              <p class="row3-p">0</p>
              <p>待付款</p>
            </b-col>
            <b-col>
              <p class="row3-p">0</p>
              <p>待发货</p>
            </b-col>
            <b-col>
              <p class="row3-p">0</p>
              <p>退款售后</p>
            </b-col>
            <b-col>
              <p class="row3-p">0</p>
              <p>商品咨询</p>
            </b-col>
          </b-row>
        </div>
        <div class="row1">
          <b-row class="body-row1">
            <b-img src="/static/images/Color Overlay.png" class="left-img" alt="Transparent image"></b-img>
            <span class="vertical-line"></span>
            <span class="right-txt">最新好消息商户助手正式开通</span>
          </b-row>
        </div>  
    </div>

    <div class="body-bgcolor">
      <div class="body-row2">
        <b-row class="body-row2-title title-group1">经营功能</b-row>
        <b-row>
          <b-col>
            <b-img src="/static/images/icon/shop.png" style="width: 40px; height: 40px;" alt="Transparent image"></b-img>
            <p>店铺</p>
          </b-col>  
          <b-col>
            <b-img src="/static/images/icon/product.png" style="width: 40px; height: 40px;" alt="Transparent image"></b-img>
            <p>商品</p>
          </b-col> 
          <b-col>
            <b-img src="/static/images/icon/order.png" style="width: 40px; height: 40px;" alt="Transparent image"></b-img>
            <p>订单</p>
          </b-col> 
          <b-col>
            <b-img src="/static/images/icon/fund.png" style="width: 40px; height: 40px;" alt="Transparent image"></b-img>
            <p>资金中心</p>
          </b-col> 
        </b-row>  
      </div>
      <div class="body-row3">
        <b-row class="body-row2-title">
          <b-img src="/static/images/icon/shop-data.png" style="width: 20px; height: 20px;"></b-img>
          <span  class="title-group2">店铺数据</span>
        </b-row>
        <b-row class="body-row3-row1">
          <b-col>
            <p class="row3-p">0</p>
            <p>今日订单数</p>
          </b-col>  
          <b-col>
            <p class="row3-p">0</p>
            <p>退款中</p>
          </b-col> 
          <b-col>
            <p class="row3-p">0</p>
            <p>待付款</p>
          </b-col> 
        </b-row>
        <b-row class="body-row3-row1">
          <b-col>
            <p class="row3-p">0</p>
            <p>待发 货</p>
          </b-col>  
          <b-col>
            <p class="row3-p">0</p>
            <p>昨日总访客</p>
          </b-col> 
          <b-col>
            <p class="row3-p">0</p>
            <p>昨日成交金额</p>
          </b-col> 
        </b-row>  
        <b-row class="body-row3-row1">
          <b-col col sm="4">
            <p class="row3-p">0</p>
            <p>出售中</p>
          </b-col> 
          <b-col col sm="4">
            <p class="row3-p">0</p>
            <p>橱窗中</p>
          </b-col>
          <b-col col sm="4">
          </b-col>
        </b-row>  
      </div>
    </div>
    <commonFooter> </commonFooter>
  </b-container>
</template>

<script>
import commonFooter from '@/common/footer'
export default {
  name: 'home',
  data () {
    return {
      homeData: ''
    }
  },
  components: {
      commonFooter
  },
  created() {
      this.getConfigInfo();
  },
  methods: {
      getConfigInfo() {
          this.$HTTP(this.$httpConfig.getHome, {
              token:sessionStorage.getItem("data_token")
          })
          .then(res => {
              this.homeData = res.data.data;
              console.log("Home " + JSON.stringify(res.data.data));
          })
          .catch(err => {
              console.error(err);
          });
      }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 767px) {
  .home {
    padding-left: 0px;
    padding-right: 0px;
    max-width: 46.875rem;
    max-height: 25.4375‬rem;
  }
  .title-bgcolor {
      padding-top: 3rem;
      background-image: linear-gradient(to right, #4DBEFF, #6093FF);           
      padding-bottom: 20px;
  }
  .title-row1 {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .title-row2 {
    margin-left: 0px; 
    margin-right: 0px;
  }
  .title-img {
    width: 2.625rem;
    height: 2.625rem;
  }
  .scan-img {
    width: 1.31rem;
    height: 1.31rem;
  }
  .body-bgcolor {
    background: #F2F3F6;
  }
  
  .body-row1 {
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 15px 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .body-row2 {
    background: #FFF;
    padding: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .body-row2-title {
    padding-left: 15px;
  }
  .vertical-line {
    height: 25px;
    border: 1px solid #DBD6D6;
  }
  .right-txt {
    font-size: 0.9375rem;
    color: #333333;
    font-weight: bold;
  }
  .title-group1 {
    font-size: 0.9375rem;
    color: #333333;
    font-weight: bold;
    padding-bottom: 1rem;
  }
  .title-group2 {
    font-size: 0.9375rem;
    color: #333333;
    font-weight: bold;
  }
  .body-row3 {
    background: #FFF;
    padding: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .body-row3-row1{
    margin-top: 1rem;
  }
  .row3-p {
    margin-bottom: 0px;
  }
  .row1 {
    margin-top: -20px; 
  }
 
  .title-size {
    font-size: 1.0625‬rem;
  }
  .left-img {
    width: 2.384rem;
    height: 1rem;
  }
}

  
  
</style>
