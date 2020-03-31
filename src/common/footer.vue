<template>
    <div>
        <b-row v-if="shippingAddress == 'shippingaddress'" class="addbtn">
          添加发货地址
        </b-row>
        <b-row v-else v-bind:class="[tempProp == 'myNew' ? 'footerCssChange' : 'footerCss']">
          <b-col>
            <b-img v-if="homeFooter == 'footerProp'" src="/static/images/selectHome.png" class="footerImg" alt="Transparent image"></b-img>       
            <b-img v-else src="/static/images/home.png" class="footerImg" alt="Transparent image"></b-img>
            <p :class="[homeFooter == 'footerProp' ? 'selectHome' : 'row3-p']">首页 </p>
          </b-col> 
          <b-col>
            <b-img v-if="tempProp == 'myNew'" src="/static/images/select-color-overlay.png" class="selfooterImg" alt="Transparent image"></b-img> 
            <b-img v-else src="/static/images/shape.png" class="footerImg" alt="Transparent image"></b-img>
            <p v-if="tempProp !== 'myNew'" class="row3-p">消息 </p>
          </b-col> 
          <b-col>
            <b-img v-if="profileData == 'propProfile'" src="/static/images/selectPeople.png" class="footerImg" alt="Transparent image"></b-img>
            <b-img v-else src="/static/images/people.png" class="footerImg" alt="Transparent image"></b-img>
            <p v-if="profileData == 'propProfile'" class="row3-p-select">我的 </p>
            <p v-else class="row3-p">我的 </p>
          </b-col> 
        </b-row>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            tempProp: ''
        }
    },
    props: {
        bgcolor: "",
        homeFooter: "",
        profileData: "",
        shippingAddress: ""
    },
    created() {
        this.tempProp = this.bgcolor
    },
}
</script>


<style scoped>
    
    .footerCss {
      background: #FFF;
      margin-left: 0px;
      margin-right: 0px;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .footerCssChange {
      background: #F9F9F9;
      margin-left: 0px;
      margin-right: 0px;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .addbtn {
      background-image: linear-gradient(to right, #4EBDFF, #6093FF);
      color: #FFF;
      justify-content: center;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
    }
    .footerImg {
      width: 1.5rem; 
      height: 1.312rem;
      margin-top: 0.5rem;
    }
    .selfooterImg {
      width: 1.7rem; 
      height: 2.5rem;
      margin-top: 0.5rem;
    }
    .row3-p {
      margin-bottom: 0px;
      color: #929292;
    }
    .row3-p-select {
      margin-bottom: 0px;
      color: #0A9BF3;
    }
    .selectHome {
      margin-bottom: 0px;
      color: #0A9BF3;
    }
</style>