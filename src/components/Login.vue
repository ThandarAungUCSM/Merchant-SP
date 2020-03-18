<template>
  <b-container class="login">
      <b-row class="header-css">
        <b-col>
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col><span class="">登录</span></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    @media screen and (max-width: 767px) {
        .login {

        }
        .header-css {
            background: cyan;
            display: flex;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .header-img {
            width: 20px;
            height: 30px;
        }
    }
</style>
