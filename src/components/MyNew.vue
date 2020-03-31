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
        <b-row class="body-css" v-for="(i, index) in 7" :key="index">
            <b-col cols="2" class="img-col">
                <b-img src="/static/images/Clip.png" class="row-img" />
                <div class="circle">
                    <span class="number-css">2</span>
                </div>
            </b-col>
            <b-col cols="10">
                <b-row class="row1-txt-inner">
                    <span class="left-txt">西西小公主</span>
                    <span class="right-txt">9月24日</span>
                </b-row>
                <b-row>
                    <span class="row-txt">我付款成功了，看一下什么时候可以来你...</span>
                </b-row>
                <b-row>
                    <b-col class="horizontal-line"></b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
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
        .right-txt {
            font-size: 0.75rem;
            color: #A3A3A3;
        }
        .row-txt {
            font-size: 0.9375rem;
            color: #A3A3A3;
        }
        .left-txt {
            font-size: 1.0625rem;
            color: #333333;
        }
        .img-col {
            padding-right: 0px;
            padding-left: 0px;
        }
        .number-css {
            font-size: 0.5rem;
            display: flex; 
            justify-content: center;
            align-items: center;
        }
        
        .header-css1 {
            background: #FFF;
            display: flex;
            align-items: center;
            padding-top: 10px;
        }
        .body-css {
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 10px;
        }
        .row-img {
            width: 50px;
            height: 50px;
        }
        .row1-txt-inner {
            display: flex; 
            justify-content: space-between;
        }
        .divtopbot {
            padding-top: 1rem;
            padding-bottom: 5rem;
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
        .circle {
            width: 0.875rem;
            height: 0.875rem;
            background: #F23B3C; 
            border-radius: 0.437rem; 
            top: -5px;
            position: absolute;
            right: -1px;
            color: #FFF;
        }
        
    }
  
</style>
