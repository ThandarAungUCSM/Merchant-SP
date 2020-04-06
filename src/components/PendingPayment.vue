<template>
  <b-container class="my-new">
    <b-row class="header-css">
        <b-col cols="1" class="left-arrow-pos">
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col cols="10" style=""><!-- class="search-css" -->
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

    <!-- Order tab -->
    <div v-if="tabActive == 'tab1'">
        <b-row class="ordermodifyrow">
            <b-col cols="3" class="orderleftcol">
                <b-img src="/static/images/圆角矩形 12.png" class="ordermodifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="9" class="orderrightcss">
                <p class="orderp-bot">春装新款女假两件女装春季长袖拼宽松</p>
                <p class="orderp-bot">韩版上衣服ins潮</p>
                <p class="orderp-bot-1">买家ID：6564654656 </p>         
                <p class="orderp-bot">价格：2980.00   数量：2件 </p>
            </b-col>
        </b-row>
        <b-row class="orderhorizontal-line">
            <b-col cols="3" class="orderleftcol">
            </b-col>
            <b-col cols="9" style="padding-right: 10px;">
                <div class="ordertabgroup1">
                    <div class="ordercommon-tab1">联系买家</div>
                    <div class="ordercommon-tab1">查看详情</div>
                    <div class="ordercommon-tab1-color">立即发货</div>
                </div>
            </b-col>
        </b-row>  
        <b-row class="ordermodifyrow">
            <b-col cols="3" class="orderleftcol">
                <b-img src="/static/images/圆角矩形 13.png" class="ordermodifyimg" alt=""></b-img>  
            </b-col>
            <b-col cols="9" class="orderrightcss">
                <p class="orderp-bot">春装新款女假两件女装春季长袖拼接宽</p>
                <p class="orderp-bot">松韩版上衣服ins潮    </p>
                <p class="orderp-bot-1">买家ID：6564654656 </p>         
                <p class="orderp-bot">价格：2980.00   数量：2件 </p>
            </b-col>
        </b-row>
        <b-row class="orderhorizontal-line">
            <b-col cols="3" class="orderleftcol">
            </b-col>
            <b-col cols="9" style="padding-right: 10px;">
                <div class="ordertabgroup1">
                    <div class="ordercommon-tab1">联系买家</div>
                    <div class="ordercommon-tab1">关闭订单</div>
                    <div class="ordercommon-tab1-color">查看详情</div>
                </div>
            </b-col>
        </b-row> 
        <div v-for="i in 2" :key="i">
            <b-row class="ordermodifyrow">
                <b-col cols="3" class="orderleftcol">
                    <b-img src="/static/images/圆角矩形 12.png" class="ordermodifyimg" alt=""></b-img>  
                </b-col>
                <b-col cols="9" class="orderrightcss">
                    <p class="orderp-bot">春装新款女假两件女装春季长袖拼接T恤</p>
                    <p class="orderp-bot">宽松韩版上衣服ins潮    </p>
                    <p class="orderp-bot-1">买家ID：6564654656 </p>         
                    <p class="orderp-bot">价格：2980.00   数量：2件 </p>
                </b-col>
            </b-row>
            <b-row class="orderhorizontal-line">
                <b-col cols="6" class="orderleftcol-new">
                    <b-img src="/static/images/矢量智能对象.png" class="orderchtextimg" alt=""></b-img> 
                    <span>状态：</span><span class="ordertext-css">未退货退款 </span>
                </b-col>
                <b-col cols="6" class="orderrightcol-new">
                    <div class="ordertabgroup1">
                        <div class="ordercommon-tab11">联系买家</div>
                        <div class="ordercommon-tab">查看详情</div>
                    </div>
                </b-col>
            </b-row>                                                    
        </div>
    </div>

    <!-- PendingPayment tab -->
    <div v-else-if="tabActive == 'tab2'">
        <div v-for="i in 4" :key="i">
            <b-row class="modifyrow">
                <b-col cols="3" class="leftcol">
                    <b-img src="/static/images/圆角矩形 12.png" class="modifyimg" alt=""></b-img>  
                </b-col>
                <b-col cols="9" class="rightcss">
                    <p class="p-bot">春装新款女假两件女装春季长袖拼接宽</p>
                    <p class="p-bot">松韩版上衣服ins潮  </p>
                    <p class="p-bot-1">买家ID：6564654656 </p>         
                    <p class="p-bot">价格：2980.00   数量：2件 </p>
                </b-col>
            </b-row>
            <b-row class="horizontal-line">
                <b-col cols="2" class="leftcol">
                </b-col>
                <b-col cols="10">
                    <div class="tabgroup1">
                        <div class="common-tab1">联系买家</div>
                        <div class="common-tab1">关闭订单</div>
                        <div class="common-tab1-color">查看详情</div>
                    </div>
                </b-col>
            </b-row>  
        </div> 
    </div>

    <!-- TobeDeliver tab -->
    <div v-else-if="tabActive == 'tab3'">
        <b-row class="delitabrow">
            <div >
                <b-img src="/static/images/circle.png" class="delicircle-img" />
            </div>
            <div class="delitabgroup">
                <div class="delicommon-tab">批量</div>
            </div>
        </b-row>
        <div>
            <b-row class="delimodifyrow">
                <b-col cols="4" class="delileftcol">
                    <b-img src="/static/images/图层 5.png" class="delisquare-img" alt=""></b-img> 
                    <b-img src="/static/images/圆角矩形 12.png" class="delimodifyimg" alt=""></b-img>  
                </b-col>
                <b-col cols="8" class="delirightcss">
                    <p class="delip-bot">春装新款女假两件女装春季长袖拼接</p>
                    <p class="delip-bot">宽松韩版上衣服ins潮 </p>
                    <p class="delip-bot-1">买家ID：6564654656 </p>         
                    <p class="delip-bot">价格：2980.00   数量：2件 </p>
                </b-col>
            </b-row>
            <b-row class="delihorizontal-line">
                <b-col cols="2" class="delileftcol">
                </b-col>
                <b-col cols="10">
                    <div class="delitabgroup1">
                        <div class="delicommon-tab1">联系买家</div>
                        <div class="delicommon-tab1">查看详情</div>
                        <div class="delicommon-tab1-color">立即发货</div>
                    </div>
                </b-col>
            </b-row>  
        </div>  
        <div v-for="i in 3" :key="i">
            <b-row class="delimodifyrow">
                <b-col cols="4" class="delileftcol">
                    <b-img src="/static/images/border-fill.png" class="delisquare-img" alt=""></b-img> 
                    <b-img src="/static/images/圆角矩形 12.png" class="delimodifyimg" alt=""></b-img>  
                </b-col>
                <b-col cols="8" class="delirightcss">
                    <p class="delip-bot">春装新款女假两件女装春季长袖拼接</p>
                    <p class="delip-bot">宽松韩版上衣服ins潮 </p>
                    <p class="delip-bot-1">买家ID：6564654656 </p>         
                    <p class="delip-bot">价格：2980.00   数量：2件 </p>
                </b-col>
            </b-row>
            <b-row class="delihorizontal-line">
                <b-col cols="2" class="delileftcol">
                </b-col>
                <b-col cols="10">
                    <div class="delitabgroup1">
                        <div class="delicommon-tab1">联系买家</div>
                        <div class="delicommon-tab1">查看详情</div>
                        <div class="delicommon-tab1-color">立即发货</div>
                    </div>
                </b-col>
            </b-row>  
        </div>  
    </div>  

           
  </b-container>
</template>

<script>
export default {
  name: 'PendingPayment',
  data () {
    return {
      tabActive: 'tab2',
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
        .input-css {
            border-radius: 30px;
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
            padding-left: 0.3rem;
            padding-right: 0px; 
            text-align: right;
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
        }
        .rightcss {
            text-align: left;
            padding-left: 1rem;
            padding-right: 0rem;
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
            padding-left: 0px;
            padding-right: 0px;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
            padding-left: 0px;
            padding-right: 0px;
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
      
        .common-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.7rem;
        }
        .common-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.7rem;
        }
       
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }





















        /* to be deliver css */
        .delitabrow {
            align-items: center;
            padding: 0.7rem 0rem 0.7rem 0.5rem; 
            border-top: 0.7rem solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
        }
        .delicircle-img {
            width: 1.125rem;
            height: 1.2375rem;
            margin-right: 5px;
        }
        .delitabgroup {
            display: flex; 
            margin-left: 0.5rem; 
        }
        .delicommon-tab {
            width: 5rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
        }
        .delicommon-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.5rem;
        }
        .delicommon-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.5rem;
        }
       
        .delitabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .delimodifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
        }
        .delileftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .delisquare-img {
            width: 1.0625rem;
            height: 1.0625rem;
        }
        .delimodifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .delirightcss {
            text-align: left;
            padding-left: 0.7rem;
        } 
        .delip-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .delip-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .delihorizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 0.8rem solid #f0f0f0;
        }




        /* order tab css */
        .ordermodifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 0.7rem solid #f0f0f0;
        }
        .orderleftcol {
            padding-left: 5px; 
            padding-right: 0px; 
            text-align: right;
        }
        .orderleftcol-new {
            text-align: left;
            font-size: 0.9375rem;
            padding-right: 0rem;
            /* padding-left: 5px; */
        }
        .ordermodifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .orderrightcss {
            text-align: left;
            padding-left: 1.3rem;
        } 
        .orderp-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .orderp-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .orderhorizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .ordertabgroup1 {
            display: flex; 
            justify-content: flex-end;
            align-items: center;
        }
        .ordercommon-tab {
            width: 4.8rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #EC632C;
            /* margin-left: 0.5rem; */
        }
        .ordercommon-tab11 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-right: 5px;
        }
        .ordercommon-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.5rem;
        }
        .ordercommon-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.5rem;
        }
        .ordertext-css {
            color: #0FA9FE;
        }
        .orderchtextimg {
            width: 1.25rem;
            height: 1.25rem;
        }
        .orderrightcol-new {
            padding-left: 0px;
            padding-right: 10px;
        }
       
        
    }


    @media screen and (max-width: 1366px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        .input-css {
            border-radius: 30px;
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
            padding-left: 0.3rem;
            padding-right: 0px; 
            text-align: right;
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
        }
        .rightcss {
            text-align: left;
            padding-left: 1rem;
            padding-right: 0rem;
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
            padding-left: 0px;
            padding-right: 0px;
        }
        .tabNoA {
            color: #333333;
            font-size: 0.9375rem;
            padding-left: 0px;
            padding-right: 0px;
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
      
        .common-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.7rem;
        }
        .common-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.7rem;
        }
       
        .tabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }





















        /* to be deliver css */
        .delitabrow {
            align-items: center;
            padding: 0.7rem 0rem 0.7rem 0.5rem; 
            border-top: 0.7rem solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
        }
        .delicircle-img {
            width: 1.125rem;
            height: 1.2375rem;
            margin-right: 5px;
        }
        .delitabgroup {
            display: flex; 
            margin-left: 0.5rem; 
        }
        .delicommon-tab {
            width: 5rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #999999;
        }
        .delicommon-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.5rem;
        }
        .delicommon-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.5rem;
        }
       
        .delitabgroup1 {
            display: flex; 
            justify-content: flex-end;
        }
        .delimodifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
        }
        .delileftcol {
            padding-left: 0px; 
            padding-right: 0px; 
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .delisquare-img {
            width: 1.0625rem;
            height: 1.0625rem;
        }
        .delimodifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .delirightcss {
            text-align: left;
            padding-left: 0.7rem;
        } 
        .delip-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .delip-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .delihorizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 0.8rem solid #f0f0f0;
        }




        /* order tab css */
        .ordermodifyrow {
            padding-top: 20px;
            padding-bottom: 10px;
            background: #FFF;
            border-top: 0.7rem solid #f0f0f0;
        }
        .orderleftcol {
            padding-left: 5px; 
            padding-right: 0px; 
            text-align: right;
        }
        .orderleftcol-new {
            text-align: left;
            font-size: 0.9375rem;
            padding-right: 0rem;
            /* padding-left: 5px; */
        }
        .ordermodifyimg {
            width: 5.625rem;
            height: 5.625rem;
        }
        .orderrightcss {
            text-align: left;
            padding-left: 1.3rem;
        } 
        .orderp-bot {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #333333;
        }
        .orderp-bot-1 {
            margin-bottom: 3px;
            font-size: 0.875rem;
            color: #999999;
        }
        .orderhorizontal-line {
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .ordertabgroup1 {
            display: flex; 
            justify-content: flex-end;
            align-items: center;
        }
        .ordercommon-tab {
            width: 4.8rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.875rem;
            color: #EC632C;
            /* margin-left: 0.5rem; */
        }
        .ordercommon-tab11 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-right: 5px;
        }
        .ordercommon-tab1 {
            width: 5.375rem;
            border: 1px solid #999999;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #666666;
            margin-left: 0.5rem;
        }
        .ordercommon-tab1-color {
            width: 5.375rem;
            border: 1px solid #EC632C;
            border-radius: 2rem;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size:  0.78rem;
            color: #EC632C;
            margin-left: 0.5rem;
        }
        .ordertext-css {
            color: #0FA9FE;
        }
        .orderchtextimg {
            width: 1.25rem;
            height: 1.25rem;
        }
        .orderrightcol-new {
            padding-left: 0px;
            padding-right: 10px;
        }
       
        
    }
  
</style>
