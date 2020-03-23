<template>
  <b-container class="password">
    <commonHeader :findPassword = 'findPwd'></commonHeader>
    <b-row>
        <div class="find_password">
          <div class="backlogin">
            <p class="logtext" >点击获取验证码。系统会给您账号所绑定或注册的手机号<b>185****3665</b>发送一条验证短信</p>
          </div>
          <div class="message">
              <p class="shortpassword">
              <img src="/static/images/message.png">
                请输入短信验证码
              <span>获取验证码</span>
              </p>  
          </div>
          <div class="message">
              <p class="shortpassword">
              <img src="/static/images/lock.png">
                请设置新密码（6-16个字符)
              </p>  
          </div> 
          <b-button >确定</b-button>




<button id="myBtn" @click="myBtn">Open Modal</button>
<div id="myModal" class="modal" style="">
  <div class="modal-content" style="background: #777777;">
    <div class="modal-body modalBody" >
      <p>拍照</p>
      <div class="" style="border: 1px solid #F1F1F1; margin-bottom: 1rem;"></div>
      <p>我的相册</p>
    </div>
    <div class="modal-footer footerCss">
      <span>取消</span>
    </div>
  </div>

</div>





        </div>
    </b-row>
    

  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'FindPassword',
  data () {
    return {
        findPwd: 'findPwd',
        show: false
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
    },
    
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 767px) {
  .find_password{
    background-color: #f0f0f0;
  }
  .backlogin{
    text-align: center;  
  }
  .logtext{
      color: #bcbcbc;
      padding: 1.2rem 1.5rem 0.3rem 1.5rem;
      font-size: 0.85rem;
  }
  .message{
    background: #ffffff;
    width: 100%;
    text-align: left;
    padding: 0.3rem 0.7rem 0rem 0.7rem;
    color: #bcbcbc;
    margin-bottom: 1rem;
  }
  .message img{
    padding: 0 0 0.5rem 0;
  }
  .shortpassword{
    padding: 0.4rem 0 0.02rem 0;
  }
  .shortpassword span{
    float: right;
    border: 0.08rem solid;
    border-radius: 2rem;
    padding: 0.25rem 0.6rem 0.25rem 0.6rem;
    color: #a1d2fe !important;
  }
  button{
    width:90%;
    padding:1.2rem;
    background: #23b8ff;
    border:none;
    color:#82d2ff;
    border-radius: 0.2rem;
    font-size: 1.15rem;
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
  width: 90%;
  margin-left: 5%;
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
  
}

  
  
</style>
