<template>
  <b-container class="profile">
    <b-row class="profile-pic">
      <b-col>
        <b-img src="/static/images/fanhui.png" class="header-img" />
      </b-col>
      <b-col><span class="">修改店铺信息</span></b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="user">
      <b-col><span class="user-name">头像</span>
        <b-img src="/static/images/pic.png" class="pp-img" />
        <b-img src="/static/images/back.png" class="back-img" />
      </b-col>
    </b-row>
    <b-row class="store">
      <b-col><span class="store-name">店铺名称</span></b-col>
      <b-col><span class="store-name1">小天鹅官方旗舰店</span></b-col>
      <b-img src="/static/images/back.png" class="store-back" />
    </b-row>

    <b-row class="phone-number">
      <b-col><span class="phone-text">手机号</span></b-col>
      <b-col><span class="phone-no">15675999803</span></b-col>
      <b-img src="/static/images/back.png" class="phone-back" />
    </b-row>
    <b-row class="password">
      <b-col><span class="psd">登录密码</span></b-col>
      <b-img src="/static/images/back.png" class="psd-back" />
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Profile',
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
  .profile{
    background: #f1f1f1;
  }
  .profile-pic{
    display: flex;
    background: #1caceb;
    padding-top: 18px;
    padding-bottom: 18px;
    align-items: center;
    color: #FFFFFF;
    font-size: 15.6px;
  }
  .header-img {
    float: left;
    width:18px;
    height:20px;
  }
  .user{
    font-size: 18px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: .01rem solid #D1D7DC;
    text-align: end;
    color:black;
    background: #FFFFFF;
  }
.user-name{
  float: left;
  margin: 2.5rem -1rem 0 0;
  font-size: 18px;
}
  .pp-img{
    width:6rem;
    height:6rem;
  }
 . back-img{
   width:13px;
   height:13px;
 }
 .store{
   color: black;
   font-size: 18px;
   border-bottom: .01rem solid #D1D7DC;
   padding-top: 17px;
   padding-bottom: 17px;
   background: #FFFFFF;
 }
 .store-name{
   float: left;
 }
 .store-name1{
  float: right;
 }
 .store-back{
   text-align: end;
 }
  .phone-number{
    color: black;
    font-size: 18px;
    border-bottom: .01rem solid #D1D7DC;
    padding-top: 17px;
    padding-bottom: 17px;
    background: #FFFFFF;
  }
  .phone-text{
    float: left;
  }
  .phone-no{
    float: right;
  }
  .phone-back{
    text-align: end;
  }
  .password {
    color: black;
    font-size: 18px;
    border-bottom: .01rem solid #D1D7DC;
    padding-top: 17px;
    padding-bottom: 17px;
    background: #FFFFFF;
  }
  .psd{
    float: left;
  }
  .psd-back{
    text-align: end;
  }
 }
</style>
