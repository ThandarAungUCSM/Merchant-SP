<template>
  <b-container class="my-new">
    <commonHeader :addShippingAddress = 'addShippingAddress'></commonHeader>
    
    <b-row class="modifyrow">
        <b-col cols="12" class="date-time">
            <span class="">省份，城市，区县</span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">详细地址，如街道，楼牌号等</span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">姓名 </span>
        </b-col>
        <b-col cols="12" class="date-time1">
            <span id="show-modal" @click="showModal = true" class="">手机号码</span>
        </b-col>
    </b-row>
        <div v-if="showModal">
            <transition name="modal" style="height: 200px;">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <!-- <div class="modal-header">
                            <button type="button" class="close" @click="showModal=false">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title">Modal title</h4>
                        </div> -->
                            <div class="modal-body">
                                <b-row class="header-css1">
                                    <b-col v-bind:class="[tabActive == 'tab1' ? 'tabActive' : 'tabNoA']" style="text-align: left;" @click="tabClick('tab1')">
                                        <span>请选择</span>
                                        <div v-if="tabActive == 'tab1'" class="tabLine">
                                            <div class="tablinein"></div>   
                                        </div> 
                                        <div v-else class="tabLine">
                                            <div class="tablineinElse"></div>   
                                        </div> 

                                        <div :class="tabActive == 'tab1' ? 'displaycss' : 'nodisplay'">
                                            <div>
                                                <p>北京市</p>
                                            </div>
                                            <div>
                                                <p>天津市</p>
                                            </div>
                                            <div>
                                                <p>河北省</p>
                                            </div>
                                            <div>
                                                <p>山西省</p>
                                            </div>
                                            <div>
                                                <p>内蒙古自治区</p>
                                            </div>
                                            <div>
                                                <p> 辽宁省</p>
                                            </div>
                                            <div>
                                                <p>吉林省</p>
                                            </div>
                                            <div>
                                                <p>黑龙江省</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col v-bind:class="[tabActive == 'tab2' ? 'tabActive' : 'tabNoA']" style="text-align: right;" @click="tabClick('tab2')">
                                        <span>确定</span>
                                        <div v-if="tabActive == 'tab2'" class="tabLine1">
                                            <div class="tablinein"></div>   
                                        </div> 
                                        <div v-else class="tabLine1">
                                            <div class="tablineinElse"></div>   
                                        </div> 

                                        <div :class="tabActive == 'tab2' ? 'displaycss1' : 'nodisplay'">
                                            <div>北京市</div>
                                            <div>天津市</div>
                                            <div>河北省</div>
                                            
                                            
                                        </div>
                                        
                                    </b-col>
                                </b-row>
                            </div>

                            
                        </div>
                    </div>
                    </div>
                </div>
            </transition>
        </div>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'Add-Shipping-Address',
  data () {
    return {
      addShippingAddress: 'addShippingAddress',
      showModal: false,
      tabActive: 'tab1'
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
            height: 410px;
            bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
        }
        .modal-content {
            height: 415px;
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

    @media screen and (max-width: 1366px) and (min-width: 768px) {
        .container {
            width: 100%;
            max-width: 100%;
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
            max-width: 100%;
            margin: 0rem;
            pointer-events: none;
            height: 410px;
            bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
        }
        .modal-content {
            height: 415px;
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
