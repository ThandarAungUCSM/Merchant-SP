<template>
  <b-container class="my-profile">
    
    <div style="position: relative;" >
        <div class="title-bgcolor">
            <commonHeader :shopPage='shop'></commonHeader>
        </div>
        <div class="row1" style="height: 0px;">
            <b-row class="body-row1">
                <b-col cols="3">
                    <b-img src="/static/images/椭圆 1.png" class="profile-title-img" alt=""></b-img>
                </b-col>
                <b-col cols="9" class="headerCss">
                    <p class="right-name">小天鹅官方旗舰店</p>
                    <span style="color: #999999">所在城市：上海市 徐家汇</span>
                </b-col>
                <!-- <b-col cols="2">
                    <b-img src="/static/images/fanhui-right.png" class="profile-right" alt=""></b-img>
                </b-col> -->
            </b-row>
        </div> 
        
    </div>
    <div class="body-bgcolor">
        
        <b-row class="rowImg">
            <b-col cols="12" class="rowcol3">
                <p class="today-turn"> 今日营业总额（元） </p>
                <p class="today-price">0.0</p>
            </b-col>
        </b-row>
        
        <b-row class="rowImg-1">
            <b-col cols="4" class="rowcol4edit vertical-col">
                <p class="today-visitors">今日访客</p>
                <p class="today-record">03</p>
            </b-col>
            <b-col cols="4" class="rowcol4edit vertical-col">
                <p class="today-visitors">今日订单</p>
                <p class="today-record">06</p>
            </b-col>
            <b-col cols="4" class="rowcol4edit">
                <p class="today-visitors">今日有效订单</p>
                <p class="today-record">05</p>
            </b-col>
        </b-row>

        <b-row class="row2" >
            <b-col cols="12">
                <p class="shop-rating">店铺综合评分</p>
            </b-col>
        </b-row>
        
        <b-row class="rowImg-2">
            <b-col cols="4" class="rowcol4">
                <div class="circle-img">
                    <span class="center-circle">5.00分</span>
                </div>
                <p class="project-score">项目评分</p>
            </b-col>
            <b-col cols="4" class="rowcol4">
                <div class="circle-img">
                    <span class="center-circle">5.00分</span>
                </div>
                <p class="project-score">服务评分</p>
            </b-col>
            <b-col cols="4" class="rowcol4">
                <div class="circle-img">
                    <span class="center-circle">5.00分</span>
                </div>
                <p class="project-score">环境评分</p>
            </b-col>
        </b-row>

    </div>
 
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'shop',
  data () {
    return {
      shop: 'shop'
    }
  },
  components: {
      commonHeader
  },
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .center-circle {
            color: #23B8FF;
            font-size: 1.067rem;
        }
        .circle-img {
            width: 4.98rem;
            height: 4.98rem;
            border-radius: 2.5rem;
            border: 2px solid #23B8FF;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }
        .project-score {
            font-size: 0.875rem;
            color: #666666;
            /* margin-left: -15px; */
            margin-top: 1rem;
        }
        .shop-rating {
            font-size: 0.875rem; 
            color: #555555;
            text-align: left;
            margin-bottom: 0px;
            padding-left: 15px;
        }
        .today-record {
            font-size: 1rem;
            color: #17B4FE;
        }
        .today-visitors {
            font-size: 0.875rem;
            color: 0.875rem;
            margin-bottom: 5px;
        }
        .today-turn {
            color: #666666; 
            font-size: 0.875rem; 
            margin-bottom: 0px;
        }
        .today-price {
            color: #17B4FE; 
            font-size: 1.625rem;
            margin-bottom: 0px;
        }
        .headercss {
            margin-left: 0px;
            margin-right: 0px;
        }
        .headerCss {
            padding-left: 0px; 
            text-align: left;
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
            text-align: left;
        }
        .rowcol4 {
            /* padding-left: 25px;
            text-align: center; */
        }
        .rowcol4edit {
            padding-left: 0px;
            padding-right: 0px;
            text-align: center;
        }
        .rowImg {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #F6F6F6;
        }
        .rowImg-1 {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 10px solid #F6F6F6;
        }
        .rowImg-2 {
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
        
        .my-profile {
            padding-left: 0px;
            padding-right: 0px;
            max-width: 46.875rem;
            max-height: 25.4375rem;
        }
        .title-bgcolor {
            background-image: linear-gradient(to right, #4EBDFF, #6191FF);
            padding-bottom: 50px;
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
        .vertical-col {
            border-right: 1px solid #F2F2F2;
            height: 45px;
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
            font-size: 0.875rem;
        }
        
    }

    @media screen and (max-width: 1366px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        .center-circle {
            color: #23B8FF;
            font-size: 1.067rem;
        }
        .circle-img {
            width: 4.98rem;
            height: 4.98rem;
            border-radius: 2.5rem;
            border: 2px solid #23B8FF;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }
        .project-score {
            font-size: 0.875rem;
            color: #666666;
            /* margin-left: -15px; */
            margin-top: 1rem;
        }
        .shop-rating {
            font-size: 0.875rem; 
            color: #555555;
            text-align: left;
            margin-bottom: 0px;
            padding-left: 15px;
        }
        .today-record {
            font-size: 1rem;
            color: #17B4FE;
        }
        .today-visitors {
            font-size: 0.875rem;
            color: 0.875rem;
            margin-bottom: 5px;
        }
        .today-turn {
            color: #666666; 
            font-size: 0.875rem; 
            margin-bottom: 0px;
        }
        .today-price {
            color: #17B4FE; 
            font-size: 1.625rem;
            margin-bottom: 0px;
        }
        .headercss {
            margin-left: 0px;
            margin-right: 0px;
        }
        .headerCss {
            padding-left: 0px; 
            text-align: left;
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
            text-align: left;
        }
        .rowcol4edit {
            padding-left: 0px;
            padding-right: 0px;
            text-align: center;
        }
        .rowImg {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #F6F6F6;
        }
        .rowImg-1 {
            background: #FFF;
            margin-right: 0px;
            margin-left: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 10px solid #F6F6F6;
        }
        .rowImg-2 {
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
        
        .my-profile {
            padding-left: 0px;
            padding-right: 0px;
            max-height: 25.4375rem;
        }
        .title-bgcolor {
            background-image: linear-gradient(to right, #4EBDFF, #6191FF);
            padding-bottom: 50px;
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
        .vertical-col {
            border-right: 1px solid #F2F2F2;
            height: 45px;
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
            font-size: 0.875rem;
        }
        
    }
  
</style>
