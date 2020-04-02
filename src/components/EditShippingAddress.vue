<template>
  <b-container class="my-new">
    <commonHeader :editShippingAddress = 'editShippingAddress'></commonHeader>
    
    <b-row class="modifyrow">
        <b-col cols="12" class="date-time">
            <span class="">天津市 天津市 和平区  小白楼街道 </span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">星城小区1208室 </span>
        </b-col>
        <b-col cols="12" class="date-time">
            <span class="">张玲</span>
        </b-col>
        <b-col cols="12" class="date-time1" @click="showModall" >
            <span id="show-modal">185****3665</span>
        </b-col>
        <!-- <b-col cols="12" class="date-time1" @click.stop="show" >
            <span id="show-modal">185****3665</span>
        </b-col> -->
    </b-row>
    <!-- <b-row class="row-edit">
        <b-col cols="12" class="first-row">
            设为默认地址
        </b-col>
        <b-col cols="12">
            设为默认地址
        </b-col>
    </b-row> -->
    <b-row class="row-edit">
        <b-col cols="12">
            <b-form-group>
                <b-form-radio v-model="selected" name="some-radios" value="A" class="radiocss">设为默认地址</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="B">设为默认地址</b-form-radio>
            </b-form-group>
        </b-col>    
    </b-row>
    <!--v-if="showInside" v-click-outside="closeEvent"-->
    <div v-if="showModal == true" >
        <transition name="modal" style="height: 200px;">
            <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <b-row class="header-css1">
                                <b-col cols="6">
                                    <b-row>
                                        <b-col cols="7" v-bind:class="[tabActive == 'tab1' ? 'tabActive' : 'tabNoA']" class="tab1css" @click="tabClick('tab1')">
                                            <span style="padding-right: 7px;">天津市 </span>
                                            <span> 天津市</span>
                                            <div v-if="tabActive == 'tab1'" class="tabLine">
                                                <div class="tablinein"></div>   
                                            </div> 
                                            <div v-else class="tabLine">
                                                <div class="tablineinElse"></div>   
                                            </div> 

                                            <div :class="tabActive == 'tab3' ? 'displaycss' : 'nodisplay'">
                                                <div>
                                                    <p class="ptext">劝业场街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">小白楼街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">五大道街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">新兴街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">南营门街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">南市街道</p>
                                                </div>
                                                <div>
                                                    <p class="ptext">其他</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <!-- <b-col cols="4" v-bind:class="[tabActive == 'tab2' ? 'tabActive' : 'tabNoA']" class="tab2css" @click="tabClick('tab2')">
                                            <span>天津市</span>
                                            <div v-if="tabActive == 'tab2'" class="tabLine">
                                                <div class="tablinein"></div>   
                                            </div> 
                                            <div v-else class="tabLine">
                                                <div class="tablineinElse"></div>   
                                            </div> 
                                        </b-col> -->
                                        <b-col cols="5" v-bind:class="[tabActive == 'tab3' ? 'tabActive' : 'tabNoA']" class="tab3css" @click="tabClick('tab3')">
                                            <span>小白楼</span>
                                            <div v-if="tabActive == 'tab3'" class="tabLine">
                                                <div class="tablinein"></div>   
                                            </div> 
                                            <div v-else class="tabLine">
                                                <div class="tablineinElse"></div>   
                                            </div> 
                                        </b-col>
                                    </b-row>    
                                </b-col>    
                                <b-col cols="6" v-bind:class="[tabActive == 'tab4' ? 'tabActive' : 'tabNoA']" class="tab4css" @click="tabClick('tab4')">
                                    <span>确定</span>
                                    <div v-if="tabActive == 'tab4'" class="tabLine1">
                                        <div class="tablinein"></div>   
                                    </div> 
                                    <div v-else class="tabLine1">
                                        <div class="tablineinElse"></div>   
                                    </div> 

                                    <div :class="tabActive == 'tab4' ? 'displaycss1' : 'nodisplay'">
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
  name: 'Edit-Shipping-Address',
  data () {
    return {
      editShippingAddress: 'editShippingAddress',
      showModal: false,
      tabActive: 'tab3',
      showInside: false,
      selected: 'A'
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
        },
        
        showModall() {
            if(this.showModal == true) {
                this.showModal = false
            } else {
                this.showModal = true
            }
        },
        show() {
            this.showInside = true
        },
        hide() {
            this.showInside =  false
        }
  },
    // directive: {
    //     'click-outside': {
    //         priority: 700,
    //         bind () {
    //             let self = this
    //             this.event = function(event) {
    //                 self.vm.$emit(self.expression, event)
    //             }
    //             this.el.addEventListener('click', this.stopProp)
    //             document.body.addEventListener('click', this.event)
    //         },
    //         unbind() {
    //             this.el.removeEventListener('click', this.event)
    //         },
    //         stopProp(event) {
    //             event.stopPropagation()
    //         }
    //     }
    
    // },
    // events: {
    //         closeEvent: function() {
    //         this.hide();
    //     }
    // }
      
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .radiocss {
            margin-bottom: 0.5rem;
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
