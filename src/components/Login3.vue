<template>
 <!-- class="login" -->
  <b-container style="background: #F0F0F0;">
    <!-- <b-row class="header-css">
        <b-col>
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col><span class="">登录</span></b-col>
        <b-col></b-col>
    </b-row> -->
    <commonHeader :loginText="loginTxt"></commonHeader>
    <b-row class="user" >
        <b-col class="left-col-pos1">
            <div class="username">输入账号</div>
            <input class="text" 
                type="text"
                v-model="user_name"
            >
        </b-col>
    </b-row>
    <!--<b-row>
        <b-col class="hrcss"></b-col>
    </b-row>-->
    <b-row class="pass">
        <b-col class="left-col-pos">
            <div class="password">密码</div>
            <input class="text1" 
                :type="passwordFieldType"
                v-model="pass_word">
            <b-img @click="switchVisibility" :src="eyeimg" v-bind:class="[eyeimg == '/static/images/eye.png' ? 'eye-img' : 'openeye-img']" />
        </b-col>
    </b-row>
   <!-- <b-row>
        <b-col class="hrcss"></b-col>
    </b-row>-->
    <b-row class="forgetpwd">
        <b-col @click="cipherLayer"><span class="footer">忘记密码</span></b-col>
    </b-row>
    <b-row class="click">
        <button class="click-me" @click="loginClick">登录</button>
    </b-row>

        <el-dialog
            :close-on-click-modal="false"
            title="找回密码"
            :visible.sync="dialogVisible"
            :before-close="close"
            width="400px"
            top="15%"
        >
            <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="100px"
                class="demo-ruleForm"
            >
                <div class="pw-content">
                    <el-form-item label="账号" prop="account_num">
                        <el-input
                            style="width:220px;"
                            v-model="ruleForm2.account_num"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone_num">
                        <el-input
                            style="width:220px;"
                            v-model.number="ruleForm2.phone_num"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="验证码"
                        prop="check_code"
                        :rules="[
                            { required: true, message: '验证码不能为空' },
                            { type: 'number', message: '验证码必须为数字值' }
                        ]"
                    >
                        <el-input
                            style="width:105px;"
                            v-model.number="ruleForm2.check_code"
                        ></el-input>
                        <el-button
                            type="info"
                            :disabled="isActive"
                            @click="submitForm1('ruleForm2')"
                            >{{ btn_text }}</el-button
                        >
                    </el-form-item>
                    <el-form-item label="新密码" prop="pass">
                        <el-input
                            type="password"
                            style="width:220px;"
                            v-model="ruleForm2.pass"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="再次输入" prop="checkPass">
                        <el-input
                            type="password"
                            style="width:220px;"
                            v-model="ruleForm2.checkPass"
                        ></el-input>
                    </el-form-item>
                </div>
                <div style="padding-left:150px;">
                    <el-button @click="close">取 消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm2')"
                        >确 定</el-button
                    >
                </div>
            </el-form>
        </el-dialog>
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'Login',
  data () {
    var validateAccountNum = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("请输入账号"));
        } else {
            //验证账号是否存在
            this.$HTTP(this.$httpConfig.checUser, {
                seller_name: this.ruleForm2.account_num
            })
                .then(res => {
                    callback();
                    this.isUser = true;
                    this.token = res.data.data;
                    this.isPassAccount = true;
                })
                .catch(err => {
                    callback(new Error("该用户不存在"));
                    this.isUser = false;
                    this.token = "";
                    this.isPassAccount = false;
                });
        }
    };
    var checkPhone = (rule, value, callback) => {
        if (!value) {
            callback(new Error("手机号不能为空"));
        } else {
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if (reg.test(value)) {
                callback();
            } else {
                callback(new Error("请输入正确的手机号"));
            }
        }
    };
    var validatePass = (rule, value, callback) => {
        if (!value) {
            callback(new Error("请输入密码"));
        } else if (value.length < 6) {
            callback(new Error("新密码必须大于6位"));
        } else {
            callback();
        }
    };
    var validatePass2 = (rule, value, callback) => {
        if (!value) {
            callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm2.pass) {
            callback(new Error("两次输入密码不一致!"));
        } else if (value.length < 6) {
            callback(new Error("新密码必须大于6位"));
        } else {
            callback();
        }
    };
    return {
      user_name: "",
      pass_word: "",
      configInfo: [],
      token: "",
      passwordFieldType: 'password',
      eyeimg: '/static/images/eye.png',
      loginTxt: 'loginTxt',



      configInfo: [],
        ruleForm2: {
            account_num: "",
            phone_num: "",
            check_code: "",
            pass: "",
            checkPass: "",
            isPassAccount: false
        },
        rules2: {
            account_num: [
                {
                    required: true,
                    validator: validateAccountNum,
                    trigger: "blur"
                }
            ],
            phone_num: [
                { required: true, validator: checkPhone, trigger: "blur" }
            ],
            pass: [
                { required: true, validator: validatePass, trigger: "blur" }
            ],
            checkPass: [
                {
                    required: true,
                    validator: validatePass2,
                    trigger: "blur"
                }
            ]
        },
        user_name: "",
        pass_word: "",
        dialogVisible: false,
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        btn_text: "获取验证码",
        isActive: false,
        isUser: "",
        token: "",
      
    }
  },
  components: {
    commonHeader
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
        //提交
        submitForm(formName) {
            // this.$refs[formName].validate((valid) => {
            // if (valid) {
            sessionStorage.setItem("data_token", this.token);
            this.$HTTP(this.$httpConfig.parseReqByPassword, {
                password: this.ruleForm2.pass,
                password_again: this.ruleForm2.checkPass,
                code: this.ruleForm2.check_code
            })
                .then(res => {
                    this.$message({
                        message: res.data.message,
                        type: "success"
                    });
                    this.close();
                })
                .catch(res => {
                    this.$message({
                        message: res.data.message,
                        type: "error"
                    });
                });
            // } else {
            // 	return false;
            // }
            // });
        },
        submitForm1() {
            if (!this.isPassAccount) {
                this.$message({
                    message: "账号不存在",
                    type: "error"
                });

                return;
            }
            //验证用户是否存在
            this.$refs.ruleForm2.validateField("phone_num", validMessage => {
                //再验证手机号码
                if (validMessage == "") {
                    this.obtain();
                } else {
                    return false;
                }
            });
        },
        //获取验证码
        obtain() {
            let N = 60;
            let clear = null;
            if (this.isActive == true) {
                return false;
            }
            this.isActive = true;
            this.$HTTP(this.$httpConfig.SendMsg, {
                mobile: this.ruleForm2.phone_num
            })
                .then(res => {
                    clear = setInterval(() => {
                        this.btn_text = "请" + N-- + "秒后重试";
                        if (N < 0) {
                            clearInterval(clear);
                            this.btn_text = "获取验证码";
                            this.isActive = false;
                        }
                    }, 1000);
                    this.$message({
                        message: res.data.message,
                        type: "success"
                    });
                })
                .catch(res => {
                    this.$message({
                        message: res.data.message,
                        type: "error"
                    });
                });
        },
        cipherLayer() {
            this.dialogVisible = true;
        },
        close() {
            this.$refs.ruleForm2.resetFields(); //关闭时重置表单数据和验证
            this.dialogVisible = false;
        },
        forgetPassword() {
            this.$router.push('/forget-password')
        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType == 'password' ? 'text' : 'password'
            this.eyeimg = this.eyeimg == '/static/images/eye.png' ? '/static/images/open-eye.png' : '/static/images/eye.png'
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
        .user{
          font-size: .26rem;
          padding: 1rem 0;
          margin: 0 .1rem;
          border-bottom: .04rem solid #dee2e6;
        }
        .pass{
          font-size: .26rem;
          padding: 1rem 0;
          margin: 0 .1rem;
          border-bottom: .04rem solid #dee2e6;
        }
        .username{
            color: #707070;
            padding: 0 .8rem 0 0;
            font-size: 1rem;
        }

        .text {
            border: none;
            outline: none;
            font-size: 1rem;
            width: 70%;
            background: #F0F0F0;
        }
        
        .password{
            color: #707070;
            font-size: 1rem;
            padding: 0 2.5rem 0 0;
        }
       .text1{
            border: none;
            outline: none;
            font-size: 1rem;
            width: 59%;
            background: #F0F0F0;
        }
        /* input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
                -webkit-box-shadow: 0 0 0 30px #F0F0F0 inset !important;
        } */
        input:-webkit-autofill {
            -webkit-text-fill-color: #F0F0F0 !important;
        }
        .eye-img{
            height: .5rem;
            margin: .5rem 0 0 1rem;
        }
        .openeye-img {
            height: .8rem;
          margin: .5rem 0 0 1rem;

        }
        .footer {
            color: #000;
            float: right;
          font-size: 1rem;
        }

        .click{
            background:#f1f1f1;
            margin: 0 .2rem 0 .2rem;
        }
        .click-me{
            font-size: 1rem;
            color: white;
            border: none;
            background: #23B8FF;
            width: 100%;
            outline: none;
            padding: .8rem 0 .8rem 0;
            border-radius: .06rem;

        }
        .forgetpwd {
            padding: 2rem 0 1rem 0;
        }
        .left-col-pos1 {
          display: flex;
        }
        .left-col-pos {
            display: flex;

            /*align-items: center;*/
        }
        .hrcss {
            border: .02rem solid #EAEAE9;
            margin: 0 .6rem 0 .6rem;
        }
       /* input{
          background-color: red !important;
        }*/
    }

    @media screen and (max-width: 1366px) and (min-width: 768px) {
      .container {
        width: 100%;
        max-width: 100%;
      }
      .user{
        font-size: .26rem;
        padding: 1rem 0;
        margin: 0 .1rem;
        border-bottom: .04rem solid #dee2e6;
      }
      .pass{
        font-size: .26rem;
        padding: 1rem 0;
        margin: 0 .1rem;
        border-bottom: .04rem solid #dee2e6;
      }
      .username{
        color: #707070;
        padding: 0 .8rem 0 0;
        font-size: 1rem;
      }

      .text {
        border: none;
        outline: none;
        font-size: 1rem;
        width: 70%;
        background: #F0F0F0;
      }

      .password{
        color: #707070;
        font-size: 1rem;
        padding: 0 2.5rem 0 0;
      }
      .text1{
        border: none;
        outline: none;
        font-size: 1rem;
        width: 59%;
        background: #F0F0F0;
      }
      /* input:-webkit-autofill,
      input:-webkit-autofill:hover, 
      input:-webkit-autofill:focus, 
      input:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px #F0F0F0 inset !important;
      } */
      input:-webkit-autofill {
            -webkit-text-fill-color: #F0F0F0 !important;
      }
     
      .eye-img{
        height: .5rem;
        margin: .5rem 0 0 1rem;

      }
      .openeye-img {
        height: .8rem;
        margin: .5rem 0 0 1rem;

      }
      .footer {
        color: #000;
        float: right;
        font-size: 1rem;
      }

      .click{
        background:#f1f1f1;
        margin: 0 .2rem 0 .2rem;
      }
      .click-me{
        font-size: 1rem;
        color: white;
        border: none;
        background: #23B8FF;
        width: 100%;
        outline: none;
        padding: .8rem 0 .8rem 0;
        border-radius: .06rem;

      }
      .forgetpwd {
        padding: 2rem 0 1rem 0;
      }
      .left-col-pos1 {
        display: flex;
      }
      .left-col-pos {
        display: flex;

        /*align-items: center;*/
      }
      .hrcss {
        border: .02rem solid #EAEAE9;
        margin: 0 .6rem 0 .6rem;
      }
      /* input{
         background-color: red !important;
       }*/
    }
</style>
