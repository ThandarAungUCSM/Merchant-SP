<template>
  <b-container class="password">
    <commonHeader :findPassword = 'findPwd'></commonHeader>
    <b-row>
        <div class="find_password">
          <div class="backlogin">
            <p class="logtext" >点击获取验证码。系统会给您账号所绑定或注册的手机号<b style="color: #333333;">185****3665</b>发送一条验证短信</p>
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
    padding: 1rem 1.2rem 1rem 1.2rem;
    background: #23b8ff;
    border: none;
    color:#82d2ff;
    border-radius: 0.2rem;
    font-size: 1.15rem;
  }
  
}

  
  
</style>
