<template>
  <b-container class="my-profile">
    <div style="position: relative;" >
        <div class="title-bgcolor">
          <div class="title-row1">
            
          </div>
          <b-row class="title-row2">
            
          </b-row>
        </div>
        <div class="row1" style="height: 0px;">
            <b-row class="body-row1">
                <b-col class="profilecol">
                    <b-img src="/static/images/椭圆 1.png" class="profile-title-img" alt=""></b-img>
                </b-col>
                <b-col cols="7" class="headerCss">
                    <p class="right-name">小天鹅官方旗舰店</p>
                    <span style="color: #999999">所在城市：上海市 徐家汇</span>
                </b-col>
                <b-col cols="2" class="col3right">
                    <b-img src="/static/images/fanhui-right.png" class="profile-right" alt=""></b-img>
                </b-col>
            </b-row>
        </div>  
    </div>
    <div class="body-bgcolor">
        <!-- v-for="i in 4" :key="i" -->
        <b-row class="rowImg">
            <b-col cols="5" class="rowcol3">
                <b-img src="/static/images/daifukuan.png" class="row-img1" />
                <span class="fontsizeTxt">待付款</span>
            </b-col>
            <b-col cols="7" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>
        <b-row class="rowImgv-line">
            <b-col cols="12" class="rowcol3" >
                <div style="border: 0.5px solid #F6F6F6;"></div>
            </b-col>
        </b-row>
        <b-row class="rowImg">
            <b-col cols="5" class="rowcol3">
                <b-img src="/static/images/msg.png" class="row-img1" />
                <span class="fontsizeTxt">待发货</span>
            </b-col>
            <b-col cols="7" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>
        <b-row class="rowImgv-line">
            <b-col cols="12" class="rowcol3" >
                <div style="border: 0.5px solid #F6F6F6;"></div>
            </b-col>
        </b-row>
        <b-row class="rowImg">
            <b-col cols="5" class="rowcol3">
                <b-img src="/static/images/tuikuan.png" class="row-img1" />
                <span class="fontsizeTxt">退款售后</span>
            </b-col>
            <b-col cols="7" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>
        <b-row class="rowImgv-line">
            <b-col cols="12" class="rowcol3" >
                <div style="border: 0.5px solid #F6F6F6;"></div>
            </b-col>
        </b-row>
        <b-row class="rowImg">
            <b-col cols="5" class="rowcol3">
                <b-img src="/static/images/商品管理.png" class="row-img1" />
                <span class="fontsizeTxt">商品管理</span>
            </b-col>
            <b-col cols="7" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>
        <b-row class="" style="padding-bottom: 12px; margin-left: 0px; margin-right: 0px;">
        </b-row>

        <!-- v-for="i in 2" :key="i" -->
        <b-row class="row2" >
            <b-col cols="6" class="rowcol3">
                <b-img src="/static/images/形状 616.png" class="row-img1" />
                <span class="fontsizeTxt">今日成交额</span>
            </b-col>
            <b-col cols="6" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>
        <b-row class="rowImgv-line">
            <b-col cols="12" class="rowcol3" >
                <div style="border: 0.5px solid #F6F6F6;"></div>
            </b-col>
        </b-row>
        <b-row class="row2" >
            <b-col cols="6" class="rowcol3">
                <b-img src="/static/images/形状 617.png" class="row-img1" />
                <span class="fontsizeTxt">今日访客数</span>
            </b-col>
            <b-col cols="6" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>

        <b-row class="row2" style="margin-top: 12px;">
            <b-col cols="6" class="rowcol3">
                <b-img src="/static/images/形状 618.png" class="row-img1" />
                <span class="fontsizeTxt">我的发货地址</span>
            </b-col>
            <b-col cols="6" class="rightcol" style="text-align: right;">
                <b-img src="/static/images/图层 68 副本 3.png" class="row-img2" />
            </b-col>
        </b-row>

        <b-row class="row2 btncss" style="">
            <b-col>
                退出登录
            </b-col>
        </b-row>
    </div>
 

    

    <!-- <b-row class="row2" style="margin-top: 150px; "></b-row> -->
    <commonFooter :profileData = "propProfile"> </commonFooter>
    <!-- <b-row class="footerCss">
      <b-col>
        <b-img src="/static/images/home.png" class="footerImg" alt="Transparent image"></b-img>       
        <p class="row3-p">首页</p>
      </b-col> 
      <b-col>
        <b-img src="/static/images/shape.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">消息 </p>
      </b-col>
      <b-col>
        <b-img src="/static/images/people.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">我的 </p>
      </b-col> 
    </b-row> -->
  </b-container>
</template>

<script>
import commonFooter from '@/common/footer'
export default {
  name: 'MyProfile',
  data () {
    return {
      propProfile: 'propProfile'
    }
  },
  components: {
      commonFooter
  },
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .col3right {
            padding-right: 0px;
        }
        .profilecol {
            padding-right: 0px;
            padding-left: 0px;
        }
        .row2 {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            
        }
        .btncss {
            margin-top: 50px; 
            margin-bottom: 100px; 
            background: white; 
            font-size: 0.875rem;
            font-weight: bold;
        }
        .right-name {
            margin-bottom: 0px;
            color: #333333; 
            font-size: 1rem; 
            font-weight: bold;
        }
        .rightcol {
            text-align: right;
        }
        .body-css {
            background: #FFF;
            padding-top: 15px;
        }
        .rowcol3 {
            padding-left: 25px;
            padding-right: 0px;
            text-align: left;
        }
        .rowImg {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .rowImgv-line {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
        }
        .row-img1 {
            width: 1.125rem;
            height: 1rem;
            margin-right: 10px;
        }
        .row-img2 {
            width: 10px;
        }
        .profile-title-img {
            width: 60px;
            height: 60px;
        }
        .profile-right {
            width: 8px;
            height: 15px;
        }
        .headerCss {
            padding-left: 0px; 
            padding-right: 0px;
            text-align: left;
        }
        .my-profile {
            padding-left: 0px;
            padding-right: 0px;
            max-width: 46.875rem;
            max-height: 25.4375‬rem;
        }
        .title-bgcolor {
            background-image: linear-gradient(to right, #4EBDFF, #6191FF);
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
            background: #F2F3F6;
            padding-top: 90px;
        }

        .row1 {
            margin-top: -20px; 
        }
        .body-row1 {
            background: #4EBDFF;
            background-image: linear-gradient(to right, #4EBDFF, #6191FF);
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 10px;

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
            background: #FFF;
            margin-left: 0px;
            margin-right: 0px;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        .footerImg {
            
            width: 1.5rem; /* 48, 43.99 */
            height: 1.312rem; /* 46, 44 */
            margin-top: 0.5rem;
            
        }
        .fontsizeTxt {
            font-size: 0.875‬rem;
        }
        
    }
  
</style>
