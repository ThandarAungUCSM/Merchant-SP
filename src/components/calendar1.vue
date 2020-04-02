<template>
  <b-container class="my-new">
    <commonHeader :calendar1 = 'calendar1'></commonHeader>
    
    <b-row class="modifyrow">
        <b-col cols="12" class="date-time">
            <span class="">02-05昨日 </span>
            <span class="">
                <b-img src="/static/images/arrow.png" class="arrow-img" style="margin-right: 2rem;" />
                <b-img src="/static/images/back.png" class="arrow-img" />
            </span>
        </b-col>
        
        <b-col cols="12" class="zerocss">
            <span class="">访客数</span>
            <p class="zero1">0</p>
        </b-col>

        <!-- <b-col cols="12" class="date-time">
            <span class="">实时</span>
            <span>1天</span>
            <span>近7天</span>
            <span>近30天</span>
            <span>周</span>
            <span>月</span>
        </b-col>
        <b-col cols="12" class="zerocss1">
            <p class="zero1">0</p>
        </b-col> -->

        <!-- <b-col cols="12" class="zerocss">
            <span class="">支付金额</span>
            <p class="zero1">0</p>
        </b-col> -->

        <b-col cols="12" class="date-time1">
            <span id="show-modal">详细数据</span>
        </b-col>
        <b-col>
            <b-row class="titlerow">
                <b-col class="col1">日期</b-col>
                <b-col class="col2">访客数 </b-col>
                <b-col class="col3"> 较前日</b-col>
            </b-row>
            <b-row>
                <b-col class="col1">
                    <p>02-05 </p>
                    <p>02-04 </p>
                    <p>02-03 </p>
                    <p>02-02 </p>
                    <p>02-05 </p>
                    <p>02-01 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                    <p>02-05 </p>
                </b-col>
                <b-col class="col2">
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                </b-col>
                <b-col class="col3-text"> 
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                    <p>+12%</p>
                </b-col>
            </b-row>
        </b-col>    
    </b-row>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'

export default {
  name: 'calendar1',
  data () {
    return {
      calendar1: 'calendar1',
    }
  },
  components: {
      commonHeader
  },
  methods: {
        
  },
      
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .arrow-img {
            height: 0.75rem; 
            width: 0.4375rem;
        }
        .titlerow {
            padding-bottom: 1rem;
        }
        .col1 {
            text-align: left;
        }
        .col2 {
           
        }
        .col3 {
            text-align: right;
        }
        .col3-text {
            text-align: right;
            color: #E1564F;
        }
        .ptext {
            margin-bottom: 1.5rem;
        }
        .tab1css {
            text-align: left; 
            padding-left: 0px; 
            padding-right: 0px;
        }
        .tab2css {
            text-align: left; 
            padding-left: 0px; 
            padding-right: 0px;
        }
        .tab3css {
            text-align: left; 
            padding-left: 0px; 
            padding-right: 0px;
        }
        .tab4css {
            text-align: right;
            padding-left: 0px; 
            padding-right: 0px;
        }
        .nodisplay {
            visibility: hidden;
        }
        .tabLine {
            display: flex; 
            justify-content: flex-start; 
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .tabLine1 {
            display: flex; 
            justify-content: flex-end; 
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .tablinein {
            background: #00A4FF; 
            height: 1px; 
            width: 45px;
        }
        .tablineinElse {
            height: 3px; 
            width: 45px;
        }
        .tabActive {
            font-size: 0.9375rem;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
        }
        .header-css1 {
            background: #FFF;
            display: flex;
            padding-top: 10px;
            margin-right: 0px;
            margin-left: 0px;
        }
        .modal-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            display: table;
            transition: opacity .3s ease;
        }

        .modal-wrapper {
            display: table-cell;
            vertical-align: middle;
        }
        .modal-dialog {
            position: fixed;
            width: 100%;
            margin: 0rem;
            pointer-events: none;
            height: 400px;
            bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
        }
        .modal-content {
            height: 405px;
            border-radius: 0rem;
            outline: 0;
        }
        .first-row {
            padding-bottom: 15px;
        }
        .row-edit {
            background: #F0F0F0;
            color: #888888;
            font-size: 0.9375rem;
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
        .zerocss {
            padding-top: 15px;
            padding-bottom: 5px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 1px solid #F0F0F0;
        }
        .zerocss1 {
            font-size: 0.875rem;
            color: #282828;
            border-bottom: 1px solid #F0F0F0;
        }
        .zero1 {
            font-size: 2.0625rem;
            margin-bottom: 0rem;
        }
        .date-time {
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            padding-bottom: 15px;

            font-size: 0.875rem;
            color: #282828;

            border-bottom: 1px solid #F0F0F0;
        }
        .date-time1 {
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            padding-bottom: 10px;

            font-size: 1.0625rem;
            color: #000000;
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
            padding-bottom: 10px;
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
        
    }
  
</style>
