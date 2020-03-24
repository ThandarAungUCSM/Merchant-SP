<template>
  <b-container class="profile" style="background: #fff;">
      <commonHeader :changeShopInfo = 'changeShop'></commonHeader>
      <div class="editshop_profile">
          <div class="shopinfo">
                <div>
                  <span>头像</span>
                </div>
                <div id="myBtn" @click="myBtn" >
                    <img src="/static/images/profile.png" class="pp-img">
                    <img src="/static/images/arrow.png" class="leftarrowImg">
                </div>
          </div>
          <div class="fange"></div>
           <div class="shopname">
                <div><p class="">店铺名称</p></div>
                <div>
                  <span class="padright">小天鹅官方旗舰店</span>
                  <img src="/static/images/arrow.png" class="leftarrowImg">
                </div>
          </div>
          <div class="shopname">
                <div>
                  <p class="">手机号</p>
                </div>
                <div>
                  <span class="padright">15675999803</span>
                  <img src="/static/images/arrow.png" class="leftarrowImg">
                </div>
          </div>
          <div class="shopname" style="border:none;">
                <p class="">登录密码</p>
                <img src="/static/images/arrow.png" class="leftarrowImg">
          </div>
      </div>
      <div id="myModal" class="modal">
        <div class="modal-content modalbg">
          <div class="modal-body modalBody" >
            <p class="modaltxtcolor">拍照</p>
            <div class="" style="border: 1px solid #F1F1F1; margin-bottom: 1rem;"></div>
            <p class="modaltxtcolor">我的相册</p>
          </div>
          <div class="modal-footer footerCss">
            <span class="modaltxtcolor">取消</span>
          </div>
        </div>
      </div>
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'profile',
  data () {
    return {
        changeShop: 'changeShop'
    }
  },
  components: {
    commonHeader
  },
  created() {
     
  },
  methods: {
     getCamera: function(){
        console.log("打开照相机")
      },
      getLibrary: function(){
        console.log("打开相册")
      },
      myBtn() {
        var modal = document.getElementById("myModal")
        modal.style.display = "block"
      },
      close() {
        var modal = document.getElementById("myModal")
        modal.style.display = "none"
      }
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .editshop_profile{
        background-color: #ffffff;
        color: #989898;
    }
    .shopinfo{
        border-bottom: #fbfbfb 0.2rem solid; 
        padding: 1rem 0 1rem 0rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        color: #333333;
    }
    .shopname{
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: #fbfbfb 0.2rem solid; 
        font-size: 0.875rem;
        color: #333333;
    }
    

    .pp-img{
      width: 5.236rem;
      height: 5.236rem;
    }
    .leftarrowImg {
      width: 0.366rem; 
      height: 0.659rem;
    }
    .padright {
      padding-right: 10px; 
    }





    
    /* The Modal (background) */
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      -webkit-animation-name: fadeIn; /* Fade in the background */
      -webkit-animation-duration: 0.4s;
      animation-name: fadeIn;
      animation-duration: 0.4s
    }

    /* Modal Content */
    .modal-content {
      position: fixed;
      bottom: 50px;
      background-color: #fefefe;
      width: 94%;
      margin-left: 3%;
      -webkit-animation-name: slideIn;
      -webkit-animation-duration: 0.4s;
      animation-name: slideIn;
      animation-duration: 0.4s
    }

    /* The Close Button */
    .close {
      color: white;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }

    .modal-header {
      padding: 0px 16px;
      background-color: #FFF;
      color: white;
      border-radius: 10px;
    }

    .modal-body {padding: 2px 16px;}

    .modal-footer {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: white;
    }

    /* Add Animation */
    @-webkit-keyframes slideIn {
      from {bottom: -300px; opacity: 0} 
      to {bottom: 0; opacity: 1}
    }

    @keyframes slideIn {
      from {bottom: -300px; opacity: 0}
      to {bottom: 0; opacity: 1}
    }

    @-webkit-keyframes fadeIn {
      from {opacity: 0} 
      to {opacity: 1}
    }

    @keyframes fadeIn {
      from {opacity: 0} 
      to {opacity: 1}
    }


    .modalBody {
      background: #FFF; 
      margin-bottom: 10px; 
      border-radius: 15px;
      padding-top: 1rem;
      padding-left: 0rem;
      padding-right: 0rem;
      font-size: 1.1875rem;
      color: #3D94FD; 
    }

    .footerCss {
      background: #FFF; 
      color: #000; 
      border-radius: 15px; 
      font-size: 1.1875rem;
      color: #3D94FD; 
      justify-content: center;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .modalbg {
      background: none; 
      border: 0px;
    }
    .modaltxtcolor {
      color: #0074FF;
    }





} 
</style>
