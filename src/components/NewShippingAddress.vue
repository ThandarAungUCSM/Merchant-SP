<template>
  <b-container class="my-new">
    <commonHeader :newshippingAddress = 'newshippingaddress'></commonHeader>
    
    <b-row class="modifyrow">
        <b-col cols="12" class="date-time">
            <span class="">发货人 </span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">联系电话 </span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">所在地区</span>
            <span>请选择 </span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">街道</span>
            <span>请选择</span>
        </b-col>
        <b-col cols="12" class="address">
            <span class="">请填写详细地址，不少于5个字</span>
        </b-col>
        <!-- <b-col cols="12" class="date-time">
            <span class="">设为默认</span>
            <b-img src="/static/images/圆角矩形 1.png" class="switch-img" />
        </b-col> -->
        <b-col cols="12" class="switchbtn">
            <span class="">设为默认</span>
            <label class="switch" style="margin-bottom: 0rem;">
                <input type="checkbox" v-model="switchValue" checked>
                <span class="slider round"></span>
            </label>
        </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'New-Shipping-Address',
  data () {
    return {
      newshippingaddress: 'newshippingaddress',
      switchValue: true
    }
  },
  components: {
      commonHeader
  },
  methods: {
      
  }
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .edit-text {
            padding-right: 10px;
        }
        .edit-img {
            width: 1.03125rem;
            height: 1.21875rem;
            margin-right: 5px;
        }
        .text1 {
            color: #EC632C;
            font-size: 0.875rem;
            padding-left: 10px;
        }
        .text1-black {
            font-size: 0.875rem;
            padding-left: 10px;
        }
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
        
        .date-time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 1px solid #F0F0F0;
        }
        .switchbtn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 0.875rem;
            color: #282828;
        }
        .address {
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            padding-bottom: 15px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 10px solid #F0F0F0;
        }
        .date-time1 {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;

            font-size: 0.875rem;
            color: #282828;
            padding-top: 10px;
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
            font-size: 0.875rem;
            text-align: left;
            color: #767676;
            padding-bottom: 10px;
            border-bottom: 1px solid #F0F0F0;
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
            /* padding-bottom: 10px; */
            background: #FFF;
            border-bottom: 1rem solid #f0f0f0;
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
        
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .circle-img {
            width: 1.041875rem;
            height: 1.041875rem;
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
        .switch-img {
            width: 3.44rem;
        }

        .custom-switch {
            padding-left: 1rem;
        }








        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

        }

        .switch input { 
            opacity: 0;
            width: 0;
            height: 0;
            background: #000;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #F0F0F0;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: #FFF;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: #25B603;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
        
    }

    @media screen and (max-width: 1366px) and (min-width: 768px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        .edit-text {
            padding-right: 10px;
        }
        .edit-img {
            width: 1.03125rem;
            height: 1.21875rem;
            margin-right: 5px;
        }
        .text1 {
            color: #EC632C;
            font-size: 0.875rem;
            padding-left: 10px;
        }
        .text1-black {
            font-size: 0.875rem;
            padding-left: 10px;
        }
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
        
        .date-time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 1px solid #F0F0F0;
        }
        .switchbtn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 0.875rem;
            color: #282828;
        }
        .address {
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            padding-bottom: 15px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 10px solid #F0F0F0;
        }
        .date-time1 {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;

            font-size: 0.875rem;
            color: #282828;
            padding-top: 10px;
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
            font-size: 0.875rem;
            text-align: left;
            color: #767676;
            padding-bottom: 10px;
            border-bottom: 1px solid #F0F0F0;
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
            /* padding-bottom: 10px; */
            background: #FFF;
            border-bottom: 1rem solid #f0f0f0;
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
        
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
        }
        .circle-img {
            width: 1.041875rem;
            height: 1.041875rem;
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
        .switch-img {
            width: 3.44rem;
        }

        .custom-switch {
            padding-left: 1rem;
        }








        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

        }

        .switch input { 
            opacity: 0;
            width: 0;
            height: 0;
            background: #000;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #F0F0F0;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: #FFF;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: #25B603;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
        
    }
  
</style>
