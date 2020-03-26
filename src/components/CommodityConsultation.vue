<template>
  <b-container class="my-new">
    <commonHeader :commodityConsultation = 'commodity'></commonHeader>
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
            <span>未回复 </span>
            <div v-if="tabActive == 'tab2'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
    </b-row>

    <div v-for="i in 2" :key="i">
        <b-row class="modifyrow">
            <b-col cols="12" class="date-time">
                <span class="datecss">张三</span>
                <span class="datetimecss">2019.3.23.09:13</span>
            </b-col>
            <b-col cols="12" class="fontp1">
                <div class="p1">
                    藏式小金刚108佛珠9×7mm
                </div>
                <p style="margin-bottom: 7px;">   
                    <span class="p2">问：</span>
                    <span class="">13PLUS独立自制纯棉高腰文艺抽绳流苏民族蓝色</span>
                </p>
                <div>连衣裙这个产品的电池经用吗？</div>
                <div class="reply-btn">
                    <div class="right-btn">回复</div>
                </div>
                <div>
                    <span class="p2">状态：</span><span class="p3">未回复 </span>
                </div>
            </b-col>
        </b-row>

        <b-row class="modifyrow">
            <b-col cols="12" class="date-time">
                <span class="datecss">李四 </span>      
                <span class="datetimecss"> 2019.3.23.09:13 </span>
            </b-col>
            <b-col cols="12" class="fontp1">
                <div class="p1">
                    荣耀9X 麒麟810 4000mAh续航
                </div>
                <p style="margin-bottom: 7px;">   
                    <span class="p2">问：</span>
                    <span class="">13PLUS独立自制纯棉高腰文艺抽绳流苏民族蓝色</span>
                </p>
                <div>连衣裙这个产品的电池经用吗？</div>
                <div style="padding-bottom: 2rem;">
                    <span class="p2">答：</span>
                    <span>提供售后服务. 23:00前下单，预计02月08日送达，
                            受全国道路交通影响，您的订单会延迟派送，请您
                            耐心等待。
                    </span>
                </div>

                <div>
                    <span class="p2">状态：</span><span class="p3">已回复 </span>
                </div>
            </b-col>
        </b-row>
    </div>
    
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'Commodity-Consultation',
  data () {
    return {
      tabActive: 'tab1',
      commodity: 'commodity'
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
        .reply-btn {
            display: flex;
            justify-content: flex-end;
        }
        .right-btn {
            width: 5rem;
            border: 1px solid #DDDDDD;
            text-align: center;
            border-radius: 2.5rem;
            padding-top: 3px;
            padding-bottom: 3px;
        }
        .datecss {
            font-size: 0.875rem;
        }
        .datetimecss {
            font-size: 0.75rem;
            color: #888888;
        }
        .p1 {
            color: #333333;
            padding-bottom: 5px;
        }
        .p2 {
            color: #59A2FF;
        }
        .p3 {
            color: #E9573E;
        }
        .fontp1 {
            font-size: 0.9375rem;
            text-align: left;
        }
        .leftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
        }
        .square-img {
            width: 1.0625rem;
            height: 1.0625rem;
            margin-right: 0.7rem;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 1rem solid #f0f0f0;
        }
        .date-time {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;
        }
        .horizontal-line {
            border-top: 1px solid #f0f0f0;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .modifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }.rightcss {
            text-align: left;
            padding-left: 0.7rem;
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
        .circle-img {
            width: 1.125rem;
            height: 1.2375rem;
            margin-right: 5px;
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
            width: 5rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            margin-right: 0.5rem;
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
            margin-left: 1rem; 
        }
        .tabgroup1 {
            display: flex; 
            justify-content: space-between;
        }
        .tabgroup2 {
            display: flex; 
            justify-content: flex-end;
        }
        .tabrow {
            align-items: center;
            padding: 0.7rem 0rem 0.7rem 1rem; 
        }
        
    }
  
</style>
