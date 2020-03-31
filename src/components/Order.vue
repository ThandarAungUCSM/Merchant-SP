<template>
  <b-container class="my-new">
    <b-row class="header-css">
        <b-col cols="1" class="left-arrow-pos">
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col cols="11" style="padding-left: 0px;"><!-- class="search-css" -->
            <!-- <b-img src="/static/images/search.png" class="search-img" /> -->
            <input class="form-control input-css" type="text" placeholder="订单号 / 昵称 / 宝贝关键词 / 运单号......" aria-label="Search"/>
        </b-col>
    </b-row>
    <b-row class="header-css1">
        <b-col v-bind:class="[tabActive == 'tab1' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab1')">
            <span>全部</span>
            <div v-if="tabActive == 'tab1'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
        <b-col v-bind:class="[tabActive == 'tab2' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab2')">
            <span>待付款</span>
            <div v-if="tabActive == 'tab2'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
        <b-col v-bind:class="[tabActive == 'tab3' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab3')">
            <span>待发货</span>
            <div v-if="tabActive == 'tab3'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
        <b-col v-bind:class="[tabActive == 'tab4' ? 'tabActive' : 'tabNoA']" @click="tabClick('tab4')">
            <span>退款售后</span>
            <div v-if="tabActive == 'tab4'" class="tabLine">
                <div class="tablinein"></div>   
            </div> 
            <div v-else class="tabLine">
                <div class="tablineinElse"></div>   
            </div> 
        </b-col>
    </b-row>

        <b-row class="modifyrow">
            <b-col cols="3" class="leftcol">
                <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="9" class="rightcss">
                <p class="p-bot">春装新款女假两件女装春季长袖拼宽松</p>
                <p class="p-bot">韩版上衣服ins潮</p>
                <p class="p-bot-1">买家ID：6564654656 </p>         
                <p class="p-bot">价格：2980.00   数量：2件 </p>
            </b-col>
        </b-row>
        <b-row class="horizontal-line">
            <b-col cols="3" class="leftcol">
            </b-col>
            <b-col cols="9">
                <div class="tabgroup1">
                    <div class="common-tab1">联系买家</div>
                    <div class="common-tab1">查看详情</div>
                    <div class="common-tab1-color">立即发货</div>
                </div>
            </b-col>
        </b-row>  
        <b-row class="modifyrow">
            <b-col cols="3" class="leftcol">
                <b-img src="/static/images/圆角矩形 13.png" class="modifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="9" class="rightcss">
                <p class="p-bot">春装新款女假两件女装春季长袖拼接宽</p>
                <p class="p-bot">松韩版上衣服ins潮    </p>
                <p class="p-bot-1">买家ID：6564654656 </p>         
                <p class="p-bot">价格：2980.00   数量：2件 </p>
            </b-col>
        </b-row>
        <b-row class="horizontal-line">
            <b-col cols="3" class="leftcol">
            </b-col>
            <b-col cols="9">
                <div class="tabgroup1">
                    <div class="common-tab1">联系买家</div>
                    <div class="common-tab1">关闭订单</div>
                    <div class="common-tab1-color">查看详情</div>
                </div>
            </b-col>
        </b-row> 
        <div v-for="i in 2" :key="i">
            <b-row class="modifyrow">
                <b-col cols="3" class="leftcol">
                    <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
                </b-col>
                <b-col cols="9" class="rightcss">
                    <p class="p-bot">春装新款女假两件女装春季长袖拼接T恤</p>
                    <p class="p-bot">宽松韩版上衣服ins潮    </p>
                    <p class="p-bot-1">买家ID：6564654656 </p>         
                    <p class="p-bot">价格：2980.00   数量：2件 </p>
                </b-col>
            </b-row>
            <b-row class="horizontal-line">
                <b-col cols="6" class="leftcol-new">
                    <b-img src="/static/images/矢量智能对象.png" class="chtextimg" alt=""></b-img> 
                    <span>状态：</span><span class="text-css">未退货退款 </span>
                </b-col>
                <b-col cols="6" class="rightcol-new">
                    <div class="tabgroup1">
                        <div class="common-tab1">联系买家</div>
                        <div class="common-tab">查看详情</div>
                    </div>
                </b-col>
            </b-row>                                                    
        </div>
        
     
  </b-container>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      tabActive: 'tab1',
    }
  },
  components: {
      
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
        .text-css {
            color: #0FA9FE;
        }
        .chtextimg {
            width: 1.25rem;
            height: 1.25rem;
        }
        .input-css {
            border-radius: 30px;
            width: 90%;
        }
        .search-css {
            text-align: left;
            display: flex;
            align-items: center;
        }
        .search-img {
            width: 1.125rem;
            height: 1.125rem;
            position: absolute;
        }
        .left-arrow-pos {
            text-align: left;
        }
        .header-css {
            background: cyan;
            display: flex;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        
        .leftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
        }
        .leftcol-new {
            text-align: left;
        }
        .rightcol-new {
            padding-left: 10px;
        }
        .modifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 0.7rem solid #f0f0f0;
        }
        .horizontal-line {
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
        }
        .header-img {
            width: 20px;
            height: 30px;
        }
        .header-img {
            width: 0.5625rem;
            height: 1.03125rem;
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
            font-size: 0.9375rem;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
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
        .common-tab {
            width: 4.8rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #EC632C;
        }
        .common-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
        }
        .common-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
        }
       
        .tabgroup1 {
            display: flex; 
            justify-content: space-between;
            align-items: center;
        }
       
        
    }
  
</style>
