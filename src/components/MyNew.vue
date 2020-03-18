<template>
  <b-container class="my-new">
    <b-row class="header-css">
        <b-col>
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col><span class="">消息</span></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="header-css1">
        <b-col>
            订单消息                        
        </b-col>
        <b-col>
            平台消息                 
        </b-col>
    </b-row>
    <b-row>
        <b-col class="horizontal-line"></b-col>
    </b-row>
    <b-row class="text-center body-css" v-for="(i, index) in 7" :key="index">
        <b-col style="background: #FFF;">
            <b-img src="/static/images/Clip.png" class="row-img" />
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
                <!-- <h1>#EFEFEE</h1> -->
            </b-row>
        </b-col>
    </b-row>
    <b-row class="footerCss">
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
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MyNew',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .my-new {

        }
        .header-css {
            background: #46CEFE;
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
            width: 20px;
            height: 30px;
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
        
        
    }
  
</style>
