<template>
  <b-container class="forgotpassword" >
      <div class="findpassword">
          <h3>找回密码</h3>
          <div class="accno">
              <label>*账号</label>
              <input type="number"  name="账号">
          </div>
          <div class="phno" style="margin-left:-2rem;">
              <label>*手机号码</label>
              <input type="number"  name="手机号码">
          </div>
           <div class="verifycode" style="margin-left:-1rem;">
              <label>*验证码</label>
              <input type="text"  name="验证码" style="width:25%">
              <button>获取验证码</button>
          </div>
          <div class="newpassword" style="margin-left:-1rem;">
              <label>*新密码</label>
              <input type="number"  name="新密码">
          </div>
          <div class="re-enter" style="margin-left:-2rem;">
              <label>*再次输入</label>
              <input type="number"  name="再次输入">
          </div>
          <div class="click">
            <input type="submit" value="取消" class="cancel">
            <input type="button" value="确定" class="sure">
          </div>
      </div>
  </b-container>
</template>

<script>
export default {
  name: 'forgotpassword',
  data () {
    return {
        
    }
  },
  components: {
   
  },
  created() {
     
  },
  methods: {
     
}
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .forgotpassword{
        background: #ffffff;
        padding: 2rem 1.5rem;
    }
    .accno,.phno,.verifycode,.newpassword,.re-enter{
        padding: 1rem 0 0.5rem 0;
        left: 25%;
    }
    .accno label,.phno label,.verifycode label,.newpassword label,.re-enter label{
        margin-left: 0.1rem;
        color: #808884;
        font-weight: 600;
    }
   .findpassword h3{
       text-align: left;
       font-size: 1.2rem;
       color: #252525;
   }
   input[type=number],input[type=text]{
       border-radius: 0.2rem;
       border: 0.075rem solid #e8e8e8;
       line-height: 2;
       margin-left: 0.5rem;
   }
   button{
       background: #909399;
       color: #ffffff;
       border: none;
       padding: 0.4rem 0.5rem;
       border-radius: 0.2rem;
       font-weight: 600;
   }
   .click{
       float: right;
       margin: 1.2rem 2.5rem 0 0;
   }
   input[type=submit]{
       border: 0.03rem solid #c8c8c8;
       padding: 0.4rem 1.2rem 0.4rem 1.2rem;
       background: transparent;
       color:#b5b3ba;
       border-radius: 0.2rem;
       font-size: 0.97rem;
   }
   input[type=button]{
       border: 0.03rem solid #c8c8c8;
       padding: 0.4rem 1.2rem 0.4rem 1.2rem;
       background: #39a0ff;
       border-radius: 0.2rem;
       font-size: 0.8rem;
       color:#ffffff;
       font-size: 0.97rem;
   }
   
} 
</style>
