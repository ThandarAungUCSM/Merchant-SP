<template>
  <b-container>
    <commonHeader :shipPage="ship"></commonHeader>
    <b-row class="modifyrow">
        <b-col cols="3">
            <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
        </b-col>
        <b-col cols="9" class="rightcss">
            <p class="p-bot">春装新款女假两件女装春季长袖拼接</p>
            <p class="p-bot">宽松韩版上衣服ins潮 </p>
            <p class="p-bot-1">买家ID：6564654656</p>         
            <p class="p-bot">价格：2980.00   数量：2件 </p>
        </b-col>
    </b-row>
    <b-row class="modifyrow1">
        <p class="row2">物流公司名称</p>
        <b-img src="/static/images/exit.png" class="cross-img" />
    </b-row>
    <b-row class="modifyrow1">
        <p class="row2">运单编号</p>
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
  name: 'ship',
  data () {
    return {
      ship: 'ship'
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
  .fullrow {
      padding-left: 0px;
      padding-right: 0px;
  }
  .fullrowin {
      height: 9px;
      background: #F0F0F0;
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
      border-top: 0.6rem solid #f1f1f1;
  }
  .click-button{
    background:#f1f1f1;
    padding-top: 4.7rem;
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
