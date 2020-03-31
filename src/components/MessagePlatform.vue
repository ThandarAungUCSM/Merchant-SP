<template>
  <b-container class="my-new">
    <commonHeader></commonHeader>
    <b-row class="header-css1">
        <b-col v-bind:class="[tabActive == 'tab1' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab1')">
            订单消息  
            <div v-if="tabActive == 'tab1'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
        <b-col v-bind:class="[tabActive == 'tab2' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab2')">
            平台消息
            <div v-if="tabActive == 'tab2'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
    </b-row>
    <b-row class="row-horizontal-line">
        <b-col class="horizontal-line"></b-col>
    </b-row>
    <div class="divtopbot">
        <b-row class="text-center body-css" v-for="(i, index) in 6" :key="index">
            <b-col>
                <div class="circle">
                    <b-img src="/static/images/消息 (2).png" class="row-img" />
                 </div>
            </b-col>
            <b-col cols="9" class="row1-txt">
                <b-row class="row1-txt-inner">
                    <span class="text1">此处是消息标题 </span>
                    <span class="text2">9月24日</span>
                </b-row>
                <b-row>
                    <span class="text3">此处是消息内容围绕着设计人群及泛台中...</span>
                </b-row>
                <b-row>
                    <b-col class="horizontal-line"></b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
    <!-- <b-row class="footerCss">
      <b-col>
        <b-img src="/static/images/group.png" class="footerImg" alt="Transparent image"></b-img>       
        <p class="row3-p">首页</p>
      </b-col> 
      <b-col>
        <b-img src="/static/images/group.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">消息 </p>
      </b-col>
      <b-col>
        <b-img src="/static/images/group.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">我的 </p>
      </b-col> 
    </b-row> -->
    <div>
        <commonFooter :bgcolor='myNew'> </commonFooter>
    </div>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
import commonFooter from '@/common/footer'
export default {
  name: 'Message-Platform',
  data () {
    return {
      tabActive: 'tab2',
      myNew: 'myNew'
    }
  },
  components: {
      commonHeader,
      commonFooter
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
        .text1 {
            font-size: 1.0625rem;
            color: #333333;
        }
        .text2 {
            font-size: 0.75rem;
            color: #A3A3A3;
        }
        .text3 {
            font-size: 0.9375rem;
            color: #A3A3A3;
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
            /* padding-bottom: 10px; */
        }
        .body-css {
            /* background: #FFF; */
            padding-top: 15px;
        }
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .row-img {
            width: 1.375rem;
            height:  1.375rem;
        }
        .row1-txt {
            margin-left: 10px; 
            margin-right: 10px;
        }
        .row1-txt-inner {
            display: flex; 
            justify-content: space-between;
        }
        .divtopbot {
            padding-top: 1rem;
            padding-bottom: 2rem;
        }
        .row-horizontal-line {
            background: #F0F0F0;
        }
        .horizontal-line {
            width: 100%; 
            height: 1px; 
            margin-top: 10px;
            background: #EFEFEE;
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
        }
        .tabNoA {
            color: #333333;
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
        .circle {
            background: #5594EF;
            width: 2.8125rem;
            height: 2.8125rem;
            border-radius: 1.40625rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .footerupdate {
            background: lemonchiffon;
        }
        
    }
  
</style>
