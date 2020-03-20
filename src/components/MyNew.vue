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
    <b-row>
        <b-col class="horizontal-line"></b-col>
    </b-row>
    <b-row class="text-center body-css" v-for="(i, index) in 7" :key="index">
        <b-col style="background: #FFF;">
            <b-img src="/static/images/Clip.png" class="row-img" />
            <div class="circle" style="">2</div>
        </b-col>
        <b-col cols="9" class="row1-txt">
            <b-row class="row1-txt-inner">
                <span>西西小公主</span>
                <span>9月24日</span>
            </b-row>
            <b-row>
                <span>我付款成功了，看一下什么时候可以来你...</span>
            </b-row>
            <b-row>
                <b-col class="horizontal-line"></b-col>
            </b-row>
        </b-col>
    </b-row>
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
  name: 'MyNew',
  data () {
    return {
      tabActive: 'tab1',
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
            padding-bottom: 10px;
        }
        .body-css {
            background: #FFF;
            padding-top: 15px;
        }
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .row-img {
            width: 50px;
            height: 50px;
        }
        .row1-txt {
            margin-left: 10px; 
            margin-right: 10px;
        }
        .row1-txt-inner {
            display: flex; 
            justify-content: space-between;
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
            width: 20px; 
            height: 20px; 
            background: #F23B3C; 
            border-radius: 10px; 
            top: -8px;
            position: absolute;
            right: 6px;
            color: #FFF;
        }
        .footerupdate {
            background: lemonchiffon;
        }
        
    }
  
</style>
