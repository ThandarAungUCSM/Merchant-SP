<template>
  <b-container class="my-new">
    <commonHeader :productPage = 'product'></commonHeader>
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
            <span>出售中</span>
            <div v-if="tabActive == 'tab2'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
    </b-row>

    <b-row class="tabrow">
        <b-col cols="3" style="padding-left: 0px; padding-right: 0px;">
            <b-img src="/static/images/circle.png" class="circle-img" />
            <span>全选</span>
        </b-col>
        <b-col cols="9" class="tabgroup">
            <div class="common-tab">上架</div>
            <div class="common-tab">下架</div>
            <div class="common-tab">删除</div>
        </b-col>
    </b-row>

    <b-row class="modifyrow">
        <b-col cols="4" class="leftcol">
            <b-img src="/static/images/图层 5.png" class="square-img" alt=""></b-img> 
            <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
        </b-col>
        <b-col cols="8" class="rightcss">
            <p class="p-bot">春装新款女假两件女装春季长袖拼接</p>
            <p class="p-bot">宽松韩版上衣服ins潮 </p>
            <p class="p-bot-1">库存：999件 </p>         
            <p class="p-bot-2">￥1499.00</p>
        </b-col>
    </b-row>
    <b-row class="horizontal-line">
        <b-col cols="3" class="leftcol">
        </b-col>
        <b-col cols="9">
            <div class="tabgroup1">
                <div class="common-tab1">上架</div>
                <div class="common-tab1">下架</div>
                <div class="common-tab1">删除</div>
            </div>
        </b-col>
    </b-row>
    <div v-for="i in 3" :key="i">
        <b-row class="modifyrow">
            <b-col cols="4" class="leftcol">
                <b-img src="/static/images/border-fill.png" class="square-img" alt=""></b-img> 
                <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="8" class="rightcss">
                <p class="p-bot">春装新款女假两件女装春季长袖拼接</p>
                <p class="p-bot">宽松韩版上衣服ins潮 </p>
                <p class="p-bot-1">库存：999件 </p>         
                <p class="p-bot-2">￥1499.00</p>
            </b-col>
        </b-row>
        <b-row class="horizontal-line">
            <b-col cols="4" class="leftcol">
            </b-col>
            <b-col cols="8" class="">
                <div class="tabgroup2">
                    <div class="common-tab2">下架</div>
                    <div class="common-tab2">删除</div>
                </div>
            </b-col>
        </b-row>
    </div>
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'Product',
  data () {
    return {
      tabActive: 'tab1',
      product: 'product'
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
        .leftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .square-img {
            width: 1.0625rem;
            height: 1.0625rem;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 1rem solid #f0f0f0;
        }
        .horizontal-line {
            border-top: 1px solid #f0f0f0;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .modifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .rightcss {
            text-align: left;
            padding-left: 0.7rem;
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
        .p-bot-2 {
            margin-bottom: 3px;
            font-size: 1rem;
            color: #FF7800;
        }
        .header-css1 {
            background: #FFF;
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-bottom: 0.8rem solid #F1F1F1;
        }
        .circle-img {
            width: 1.125rem;
            height: 1.2375rem;
            margin-right: 5px;
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
        .common-tab {
            width: 5rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            margin-left: 0.5rem;
            font-size:  0.875rem;
            color: #999999;
        }
        .common-tab1 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
            margin-left: 0.6rem;
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
        .tabgroup {
            display: flex; 
            padding-left: 0px; 
            padding-right: 15px;
        }
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabgroup2 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabrow {
            align-items: center;
            padding: 0.7rem 0rem 0.7rem 0rem; 
        }
        
    }

    @media screen and (max-width: 1366px) and (min-width: 768px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        .leftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .square-img {
            width: 1.0625rem;
            height: 1.0625rem;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 1rem solid #f0f0f0;
        }
        .horizontal-line {
            border-top: 1px solid #f0f0f0;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .modifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .rightcss {
            text-align: left;
            padding-left: 0.7rem;
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
        .p-bot-2 {
            margin-bottom: 3px;
            font-size: 1rem;
            color: #FF7800;
        }
        .header-css1 {
            background: #FFF;
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-bottom: 0.8rem solid #F1F1F1;
        }
        .circle-img {
            width: 1.125rem;
            height: 1.2375rem;
            margin-right: 5px;
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
        .common-tab {
            width: 5rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            margin-left: 0.5rem;
            font-size:  0.875rem;
            color: #999999;
        }
        .common-tab1 {
            width: 4.8rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
            margin-left: 0.6rem;
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
        .tabgroup {
            display: flex; 
            padding-left: 0px; 
            padding-right: 15px;
        }
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabgroup2 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabrow {
            align-items: center;
            padding: 0.7rem 0rem 0.7rem 0rem; 
        }
        
    }
  
</style>
