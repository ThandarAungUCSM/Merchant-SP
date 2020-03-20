<template>
  <b-container class="login">
    <b-row class="header-css">
        <b-col>
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col><span class="">登录</span></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="user" >
        <b-col>
        <span class="username">输入账号</span>
        <input class="text" 
                type="text"
                v-model="user_name"
                >
        </b-col>
    </b-row>
    <b-row class="pass">
        <b-col>
            <span class="password">密码</span>
            <input class="text1" 
                    :type="passwordFieldType"
                    v-model="pass_word">
            <b-img @click="switchVisibility" src="/static/images/eye.png" class="eye-img" />
        </b-col>
    </b-row>
    <b-row>
        <b-col><span class="footer">忘记密码</span></b-col>
    </b-row>
    <b-row class="click">
        <button class="click-me" @click="loginClick">登录</button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user_name: "",
      pass_word: "",
      configInfo: [],
      token: "",
      passwordFieldType: 'password'
    }
  },
  created() {
      this.getConfigInfo();
      var that = this;
      document.onkeydown = function(e) {
          var keyNum = window.event ? e.keyCode : e.which;
          if (keyNum == 13) {
              that.loginClick();
          }
      };
  },
  methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType == 'password' ? 'text' : 'password'
        },
      getConfigInfo() {
          this.$HTTP(this.$httpConfig.getHome, {
              token:sessionStorage.getItem("data_token")
          })
          .then(res => {
              this.configInfo = res.data.data.config;
              console.log(res.data.data.config, 1122);
          })
          .catch(err => {
              console.error(err);
          });
      },
      loginClick() {
          if (!/^[\u4e00-\u9fa5\s_a-zA-Z0-9]+$/.test(this.user_name)) {
              // this.$layer.msg("用户名称异常");
              alert("用户名称异常")
              return false;
          }
          if (!this.pass_word || this.pass_word.length < 6) {
              // this.$layer.msg("密码必须大于6位");
              alert("密码必须大于6位")
              return false;
          }
          this.$HTTP(this.$httpConfig.login, {
              seller_name: this.user_name,
              password: this.pass_word
          })
          .then(res => {
              // this.$layer.msg(res.data.message);
              sessionStorage.setItem("data_token", res.data.data.token);
              console.log("console Login " + JSON.stringify(res.data.data))
              this.getApproval();
          })
          .catch(err => {});
      },
      getApproval() {
          let obj = this;
          this.$HTTP(this.$httpConfig.getApproval, {})
              .then(res => {
                  let menuMaster = res.data.data;
                  let nav = [];
                  for (var i in menuMaster) {
                      if (
                          typeof menuMaster[i].fid !== "undefined" &&
                          menuMaster[i].fid == 0
                      ) {
                          nav.push({
                              id: menuMaster[i].id,
                              remark: menuMaster[i].remark,
                              path: menuMaster[i].path
                          });
                      }
                  }
                  //全部权限
                  sessionStorage.setItem(
                      "allPrivilege",
                      JSON.stringify(res.data.data)
                  );
                  sessionStorage.setItem("topPrivilege", JSON.stringify(nav));
                //   obj.$router.addRoutes(res.data.data[0]);
                  console.log(res.data.data)
                  obj.$router.initLocalRouters();
                  obj.$router.push("/home");
              })
              .catch(err => {
                  // this.$message.error("没有权限，请联系管理员！");
                  // this.$message.error(err);
                  console.log("console error " + err)
              });
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

        .user{
          font-size: 13px;
          padding-top: 15px;
          padding-bottom: 15px;
          border-bottom: .01rem solid #D1D7DC;

          }
        .username{
          color: #707070;
          margin:0 1.3rem 0 0;
          font-size: 15px;
        }

        .text {
        border: none;
        outline: none;
        background:#F0F0F0;

      }
        .pass{
        font-size: 13px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: .01rem solid #D1D7DC;
      }
        .password{
          color: #707070;
          margin:0 0 0 3rem;
          font-size: 15px;

        }
       .text1{
        border: none;
        outline: none;
        margin:0 0 0 3rem;
        background:#F0F0F0;

      }
        .eye-img{
          height:10px;
          margin-left:1.5rem;
        }
        .footer {
          color: #707070;
          float: right;
        }

        .click{
         background:#f1f1f1;
         padding-top: 18px;
         margin-left: 10px;
         margin-right:10px;
       }
      .click-me{
        font-size: 20px;
        color: #707070;
        border: none;
        background: #23B8FF;
        width: 100%;
        outline: none;
      }
    }
</style>
