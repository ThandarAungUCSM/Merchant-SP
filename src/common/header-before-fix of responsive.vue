<template>
    <div>
        <b-row v-if="calendar1 != 'calendar1'" class="header-css">
            <b-col class="left-arrow-pos">
                <b-img src="/static/images/fanhui.png" class="header-img" />
            </b-col>

            <b-col v-if="shippingAddress == 'shippingaddress'" class="shipAddress">
                <span class="title-txt-ship"> 发货地址管理</span>
            </b-col>
            <b-col v-else-if="newshippingAddress == 'newshippingaddress'" class="shipAddress">
                <span class="title-txt-ship">新建发货地址</span>
            </b-col>
            <b-col v-else-if="editShippingAddress == 'editShippingAddress'" class="shipAddress">
                <span class="title-txt-ship">编辑发货地址</span>
            </b-col>
            <b-col v-else>
                <span class="title-txt" v-if="phoneNo == 'changephno' || changeshop == 'changeshopname'">修改手机号</span>
                <span class="title-txt-ship" v-else-if="findPassword == 'findPwd'">找回密码</span>
                <span class="title-txt" v-else-if="loginText == 'loginTxt'">登录</span>
                <span class="title-txt" v-else-if="changeShopInfo == 'changeShop'">修改店铺信息</span>
                <span class="title-txt-ship" v-else-if="modifyingAttribute == 'modifying'">修改属性</span>
                <span class="title-txt-ship" v-else-if="shipPage == 'ship'">发货</span>
                <span class="title-txt-ship" v-else-if="productPage == 'product'">商品管理</span>
                <span class="title-txt-ship" v-else-if="commodityConsultation == 'commodity'">商品咨询</span>
                <span class="title-txt-ship" v-else-if="shopPage == 'shop'">店铺</span>
                <span class="title-txt-ship" v-else-if="changePrice == 'price'">改价</span>
                <span class="title-txt-ship" v-else-if="refundafterSale == 'refundsaled'">退款售后</span>
            
                <span class="title-txt" v-else>消息</span>
            </b-col>

            <b-col v-if="newshippingAddress == 'newshippingaddress' || editShippingAddress == 'editShippingAddress' || addShippingAddress == 'addShippingAddress'" class="rightcol">保存</b-col>
            <b-col v-else></b-col>
        </b-row>
        <b-row v-else class="header-css1">
            <b-col class="left-arrow-pos">
                <b-img src="/static/images/fanhui1.png" class="header-img" />
            </b-col>
            <b-col class="shipAddress">
                <span class="title-txt-ship-calendar"> 数据详情</span>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        phoneNo: '',
        changeshop: '',
        findPassword: '',
        loginText: '',
        changeShopInfo: '',
        modifyingAttribute: '',
        shipPage: '',
        productPage: '',
        commodityConsultation: '',
        shopPage: '',
        changePrice: '',
        refundafterSale: '',
        capitalCenter: '',
        shippingAddress: '',
        newshippingAddress: '',
        editShippingAddress: '',
        addShippingAddress: '',
        calendar1: '',
        calendar2: ''
    }
}
</script>


<style scoped>
    .rightcol {
        color: #FFF;
        text-align: right;
    }
    .header-css {
        background-image: linear-gradient(to right, #4EBDFF, #6093FF);
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .header-css1 {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #F7F7F7;
    }
    .header-img {
        width: 0.5625rem;
        height: 1.03125rem;
    }
    .title-txt {
        color: #FFF;
        font-size: 1.03125rem;
    }
    .title-txt-ship {
        color: #FFF;
        font-size: 1.125rem;
    }
    .title-txt-ship-calendar {
        color: #333333;
        font-size: 1.125rem;
    }
    .left-arrow-pos {
        text-align: left;
    }
    .shipAddress {
        padding-left: 0px;
        padding-right: 0px;
    }
</style>