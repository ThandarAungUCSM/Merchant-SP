<template>
  <b-container class="my-profile">
    <div style="position: relative;">
        <div class="title-bgcolor">
          <div class="title-row1">
            
          </div>
          <b-row class="title-row2">
            
          </b-row>
        </div>
        <div class="row1">
            <b-row class="body-row1">
                <b-col>
                    <b-img src="/static/images/椭圆 1.png" class="profile-title-img" alt=""></b-img>
                </b-col>
                <b-col cols="7" class="headerCss">
                    <p style="margin-bottom: 0px;">小天鹅官方旗舰店</p>
                    <span>所在城市：上海市 徐家汇</span>
                </b-col>
                <b-col cols="2">
                    <b-img src="/static/images/fanhui-right.png" class="profile-right" alt=""></b-img>
                </b-col>
            </b-row>
        </div>  
    </div>

    <b-row class="rowImg" v-for="i in 4" :key="i">
        <b-col cols="4" class="rowcol3">
            <b-img src="/static/images/daifukuan.png" class="row-img1" />
            <span>待付款</span>
        </b-col>
        <b-col cols="8" class="rightcol" style="text-align: right;">
            <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
        </b-col>
    </b-row>
    <b-row class="" style="padding-bottom: 12px; margin-left: 0px; margin-right: 0px;">
    </b-row>
    <b-row class="row2" v-for="i in 2" :key="i">
        <b-col cols="4" class="rowcol3">
            <b-img src="/static/images/daifukuan.png" class="row-img1" />
            <span>待付款</span>
        </b-col>
        <b-col cols="8" class="rightcol" style="text-align: right;">
            <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
        </b-col>
    </b-row>

    <b-row class="row2" style="margin-top: 12px;">
        <b-col cols="4" class="rowcol3">
            <b-img src="/static/images/daifukuan.png" class="row-img1" />
            <span>待付款</span>
        </b-col>
        <b-col cols="8" class="rightcol" style="text-align: right;">
            <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
        </b-col>
    </b-row>

    <b-row class="row2" style="margin-top: 50px; margin-bottom: 150px; background: orange;">
        <b-col>
            退出登录
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
  name: 'MyProfile',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .row2 {
            background: #FFF;

            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            
        }
        .rightcol {
            text-align: right;
        }
        .body-css {
            background: #FFF;
            padding-top: 15px;
        }
        .rowcol3 {
            padding-left: 15px;
        }
        .rowImg {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .row-img1 {
            width: 25px;
        }
        .row-img2 {
            width: 10px;
        }
        .profile-title-img {
            width: 60px;
            height: 60px;
        }
        .profile-right {
            width: 10px;
            height: 20px;
        }
        .headerCss {
            padding-left: 0px; 
            text-align: left;
        }
        .my-profile {
            padding-left: 0px;
            padding-right: 0px;
            max-width: 46.875rem;
            max-height: 25.4375‬rem;
        }
        .title-bgcolor {
            background: #5D9AFF;
            padding-bottom: 100px;
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
            width: 5.25rem;
            height: 5.25rem;
        }
        .scan-img {
            width: 2.625‬rem;
            height: 2.625rem;
        }
        .body-bgcolor {
            background: #707070;
        }

        .row1 {
            margin-top: -20px; 
        }
        .body-row1 {
            background: #5D9AFF;
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 5px;

            padding-bottom: 20px;
            display: flex;
            align-items: center;
        }

        .body-row2 {
            background: #dedede;
            padding: 15px;
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .body-row2-title {
            padding-left: 15px;
        }
        .vertical-line {
            height: 25px;
            border: 1px solid;
        }
        .body-row3 {
            background: #dedede;
            padding: 15px;
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .body-row3-row1{
            margin-top: 1rem;
        }
        .row3-p {
            margin-bottom: 0px;
        }
        
        .footerCss {
            background: honeydew;
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
