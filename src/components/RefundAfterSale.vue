<template>
  <b-container class="my-new">
    <commonHeader :refundafterSale = 'refundsaled'></commonHeader>
    <b-row class="header-css1">
        <b-col v-bind:class="[tabActive == 'tab1' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab1')">
            <span>全部</span>
            <div v-if="tabActive == 'tab1'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
        <b-col v-bind:class="[tabActive == 'tab2' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab2')">
            <span>进行中</span>
            <div v-if="tabActive == 'tab2'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
    </b-row>

    <div v-for="i in 4" :key="i">
        <b-row class="modifyrow">
            <b-col cols="4" class="leftcol">
                <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="8" class="rightcss">
                <p class="p-bot">春装新款女假两件女装春季长袖拼接T恤</p>
                <p class="p-bot">宽松韩版上衣服ins潮    </p>
                <p class="p-bot-1">买家ID：6564654656 </p>         
                <p class="p-bot">价格：2980.00   数量：2件 </p>
            </b-col>
        </b-row>
        <b-row class="horizontal-line">
            <b-col cols="6" class="leftcol">
                <b-img src="/static/images/矢量智能对象.png" class="chtextimg" alt=""></b-img> 
                <span>状态：</span><span class="text-css">未退货退款 </span>
            </b-col>
            <b-col cols="6" style="padding-left: 0rem;">
                <div class="tabgroup1">
                    <div class="common-tab1">联系买家</div>
                    <div class="common-tab">查看详情</div>
                </div>
            </b-col>
        </b-row>
    </div> 
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'RefundAfterSale',
  data () {
    return {
      tabActive: 'tab2',
      refundsaled: 'refundsaled'
    }
  },
  components: {
      commonHeader
  },
  methods: {
      tabClick(value) {
          if(value) {
              this.tabActive = value
          }
      }
  }
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .my-new {
        }
        .text-css {
            color: #0FA9FE;
        }
        .chtextimg {
            width: 1.25rem;
            height: 1.25rem;
        }
        .leftcol {
            padding-left: 15px; 
            padding-right: 0px; 
            text-align: left;
            font-size: 0.9375rem;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 1rem solid #f0f0f0;
        }
        .horizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            align-items: center;
        }
        .modifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }.rightcss {
            text-align: left;
            padding-left: 0px;
        } .p-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .p-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .p-bot-2 {
            margin-bottom: 3px;
            font-size: 1rem;
            color: #FF7800;
        }
       
        .header-css {
            background-image: linear-gradient(to right, #4EBDFF, #6093FF);
            display: flex;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .header-css1 {
            background: #FFF;
            display: flex;
            align-items: center;
            padding-top: 10px;
        }
        
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
       
       
        .row1 {
            margin-top: -20px; 
        }
        .footerCss {
            background: #F9F9F9;
            margin-left: 0px;
            margin-right: 0px;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        .footerImg {
            width: 40px; 
            height: 40px;
            margin-top: 0.5rem;
        }
        .tabActive {
            color: #0FA9FE;
            font-size: 0.9375rem;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
        }
        .tabLine {
            display: flex; 
            justify-content: center; 
        }
        .tablinein {
            background: #00A4FF; 
            height: 3px; 
            width: 65px;
        }
        .tablineinElse {
            height: 3px; 
            width: 65px;
        }
        .title-txt {
            color: #FFF;
            font-size: 1.03125rem;
        }
        .common-tab {
            width: 4.8rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
        }
        .common-tab1 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #999999;
            margin-right: 0.5rem;
        }
        .common-tab2 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
            margin-left: 0.5rem;
        }
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabgroup2 {
            display: flex; 
            justify-content: flex-end;
        }
        
    }

    @media screen and (max-width: 1366px) and (min-width: 768px) {
        .my-new {
            width: 100%;
            max-width: 100%;
        }
        .text-css {
            color: #0FA9FE;
        }
        .chtextimg {
            width: 1.25rem;
            height: 1.25rem;
        }
        .leftcol {
            text-align: left;
            padding-left: 15px; 
            padding-right: 0px; 
            /* text-align: right; */
            font-size: 0.9375rem;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 1rem solid #f0f0f0;
        }
        .horizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            align-items: center;
        }
        .modifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }.rightcss {
            text-align: left;
            padding-left: 0px;
        } .p-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .p-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .p-bot-2 {
            margin-bottom: 3px;
            font-size: 1rem;
            color: #FF7800;
        }
       
        .header-css {
            background-image: linear-gradient(to right, #4EBDFF, #6093FF);
            display: flex;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .header-css1 {
            background: #FFF;
            display: flex;
            align-items: center;
            padding-top: 10px;
        }
        
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
       
       
        .row1 {
            margin-top: -20px; 
        }
        .footerCss {
            background: #F9F9F9;
            margin-left: 0px;
            margin-right: 0px;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        .footerImg {
            width: 40px; 
            height: 40px;
            margin-top: 0.5rem;
        }
        .tabActive {
            color: #0FA9FE;
            font-size: 0.9375rem;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
        }
        .tabLine {
            display: flex; 
            justify-content: center; 
        }
        .tablinein {
            background: #00A4FF; 
            height: 3px; 
            width: 65px;
        }
        .tablineinElse {
            height: 3px; 
            width: 65px;
        }
        .title-txt {
            color: #FFF;
            font-size: 1.03125rem;
        }
        .common-tab {
            width: 4.8rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
        }
        .common-tab1 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #999999;
            margin-right: 0.5rem;
        }
        .common-tab2 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
            margin-left: 0.5rem;
        }
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabgroup2 {
            display: flex; 
            justify-content: flex-end;
        }
        
    }
  
</style>
