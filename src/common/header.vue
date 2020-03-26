<template>
    <b-row class="header-css">
        <b-col class="left-arrow-pos">
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col>
            <span class="title-txt" v-if="phoneNo == 'changephno' || changeshop == 'changeshopname'">修改手机号</span>
            <span class="title-txt-find-pwd" v-else-if="findPassword == 'findPwd'">找回密码</span>
            <span class="title-txt" v-else-if="loginText == 'loginTxt'">登录</span>
            <span class="title-txt" v-else-if="changeShopInfo == 'changeShop'">修改店铺信息</span>
            <span class="title-txt-ship" v-else-if="modifyingAttribute == 'modifying'">修改属性</span>
            <span class="title-txt-ship" v-else-if="shipPage == 'ship'">发货</span>
            <span class="title-txt-ship" v-else-if="productPage == 'product'">商品管理</span>
            <span class="title-txt-ship" v-else-if="commodityConsultation == 'commodity'">商品咨询</span>
            <span class="title-txt-ship" v-else-if="shopPage == 'shop'">店铺</span>
            
            <span class="title-txt" v-else>消息</span>
        </b-col>
        <b-col></b-col>
    </b-row>
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
        shopPage: ''
    }
}
</script>


<style scoped>
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
    .title-txt {
        color: #FFF;
        font-size: 1.03125rem;
    }
    .title-txt-ship {
        color: #FFF;
        font-size: 1.125rem;
    }
    
    .left-arrow-pos {
        text-align: left;
    }
</style>