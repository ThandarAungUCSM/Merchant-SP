<template>
  <b-container>
    <commonHeader :changePrice="price"></commonHeader>
    <b-row class="modifyrow">
        <b-col cols="3" class="ipadcss">
            <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
        </b-col>
        <b-col cols="9" class="rightcss" style="padding-right: 10px; padding-left: 20px;">
            <p class="p-bot">春装新款女假两件女装春季长袖拼接</p>
            <p class="p-bot">宽松韩版上衣服ins潮 </p>
            <p class="p-bot-1">买家ID：6564654656</p>         
            <p class="p-bot">价格：2980.00   数量：2件 </p>
        </b-col>
    </b-row>
    <b-row class="modifyrow1">
        <p class="row2">价格：<span class="row2-red">2980.00</span></p>
        <b-img src="/static/images/exit.png" class="cross-img" />
    </b-row>
    <b-row class="click-button">
      <button class="click-me">确定</button>
    </b-row>
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'change-price',
  data () {
    return {
      price: 'price'
    }
  },
  components: {
    commonHeader
  },
  created() {
     
  },
  methods: {
      
  }  
}
</script>

<style scoped>

@media screen and (max-width: 767px) {
  .modifyimg {
      width: 5.625rem;
      height: 5.625rem;
  }
  .modifyrow {
      padding-top: 20px;
      padding-bottom: 20px;
      background: #FFF;
  }
  .rightcss {
      text-align: left;
  }
  .p-bot {
      margin-bottom: 3px;
      font-size: 0.875rem;
      color: #333333;
  }
  .p-bot-1 {
      margin-bottom: 3px;
      font-size: 0.875rem;
      color: #999999;
  }
  .row2 {
      color: #333333;
      font-size: 0.9375rem;
      margin-bottom: 0px;
  }
  .row2-red {
      color: #EC632C;
  }
  .cross-img {
      width: 1.025625rem;
      height: 1.025rem;
  }
  .modifyrow1 {
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-top: 0.5rem solid #f1f1f1;
  }
  .click-button{
    background:#f1f1f1;
    padding-top: 15px;
    border-top: 0.7rem solid #f1f1f1;
  }
  .click-me{
    font-size: 0.9375rem;
    color: #FFF;
    border: none;
    border-radius: 3px;
    background: #23B8FF;
    width: 100%;
    outline: none;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 15px;
    margin-right:15px;
  }
}

@media screen and (max-width: 1366px) and (min-width: 768px) {
  .container {
    width: 100%;
    max-width: 100%;
  }
  .ipadcss {
    padding-left: 15px;
    text-align: left;
    padding-right: 0px;
  }
  .modifyimg {
      width: 5.625rem;
      height: 5.625rem;
  }
  .modifyrow {
      padding-top: 20px;
      padding-bottom: 20px;
      background: #FFF;
  }
  .rightcss {
      text-align: left;
  }
  .p-bot {
      margin-bottom: 3px;
      font-size: 0.875rem;
      color: #333333;
  }
  .p-bot-1 {
      margin-bottom: 3px;
      font-size: 0.875rem;
      color: #999999;
  }
  .row2 {
      color: #333333;
      font-size: 0.9375rem;
      margin-bottom: 0px;
  }
  .row2-red {
      color: #EC632C;
  }
  .cross-img {
      width: 1.025625rem;
      height: 1.025rem;
  }
  .modifyrow1 {
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-top: 0.5rem solid #f1f1f1;
  }
  .click-button{
    background:#f1f1f1;
    padding-top: 15px;
    border-top: 0.7rem solid #f1f1f1;
  }
  .click-me{
    font-size: 0.9375rem;
    color: #FFF;
    border: none;
    border-radius: 3px;
    background: #23B8FF;
    width: 100%;
    outline: none;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 15px;
    margin-right:15px;
  }
}
  
</style>
