<template>
    <div class="register-wrap">
        <div v-title data-title="注册">注册</div>
        <header class="logoIn-header">
           <span @click="remove" class="btn-back">取消</span>{{title}}
        </header>
        <div class="from">
            <div class="input-main userName">
                <span class="icon"></span>
                <input type="text" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="input-main phone-number">
                <span class="icon"></span>
                <input type="text" placeholder="请输入验证手机号码" v-model="mobile">
                    <select class="form-control" v-model="selected">
                        <option v-for="option in options" v-bind:value="{name: option.name}" :key="option.id" >
                            {{ option.name }}
                        </option>
                    </select>
<!--                <select id="modelType">-->
<!--                    <option value="1">中国大陆</option>-->
<!--                    <option value="2">澳大利亚</option>-->
<!--                </select>-->
            </div>
            <div class="input-main message">
                <span class="icon"></span>
                <input type="text" placeholder="请输入短信验证码" v-model="message">
                <button class="btn-ver" :class="{active:isActive}" @click="obtain">{{btnText}}</button>
            </div>
            <div class="input-main passWord">
                <span class="icon"></span>
                <input type="password" placeholder="请输入密码...." v-model="password">
            </div>
            <div class="input-main passWord">
                <span class="icon"></span>
                <input type="password" placeholder="请再次输入密码...." v-model="re_password">
            </div>
            <!-- <div class="input-main message">
                <span class="icon"></span>
                <input type="text" placeholder="请输入电子邮箱" v-model="email">
            </div> -->
            <div class="input-main rec">
                <span class="icon"></span>
                <input type="text" placeholder="请输入推荐人编码" :disabled="status" v-model="p_id">
            </div>
            <div class="agreement">
                注册表示您已同意<router-link to="agreement" >《服务协议》</router-link>
            </div>
            <button class="btn-in" @click="register">注&nbsp;&nbsp;册</button>
        </div>
        <div class="return-btn">
            <router-link to="LogoIn" class="btn">已有账号 ></router-link>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import Qs from 'qs'
    export default {
        name : 'register',
        data(){
            return {
                title:'2天聚清注册',
                username : '',
                mobile:'',
                message:'',
                password:'',
                re_password:'',
                email:'',
                btnText:'获取验证码',
                isActive:false,
                scrollWatch:true,
                sessionId:'',  
                p_id:'',
                status:false,
                selected: {name: '中国大陆'},
                options: [{id: '1', name: '中国大陆'},
                    {id: '2', name: '澳大利亚'}]
            }
        },
        methods : {
            remove(){
                this.$router.go(-1);
            },
            obtain(){

              /*  if(!(/^((00){1}[1-9]{1}[0-9]{1,3}|86|\+86)?1[3458]\d{9}$/.test(this.mobile))){
                    Toast('手机号码有误,请重新输入');
                    return false;
                }*/

                  // if(!(/^0[0-8]\d{8}$/g.test(this.mobile))){
                  //     Toast('手机号码有误,请重新输入');
                  //     return false;
                  // }

               if(this.mobile==''){
                   Toast('手机号码有误,请重新输入--空');
                   return false;
               }

                if(this.isActive == true)return;
                var N = 60,
                    _this = this,
                    clear = null;
                this.axios.post(API_URL + 'Home/Register/re_send_msg',Qs.stringify({
                    mobile:_this.mobile
                })).then((res) => {
                    // console.log(res)
                    this.sessionId = res.data.data
                    if(res.data.status == 1){
                            _this.isActive = true;
                            _this.btnText = '请'+ N +'秒后重试';
                            _this.isActive = true;
                            clear = setInterval(function(){
                                _this.btnText = '请'+ N-- +'秒后重试';
                                if(N < 0){
                                    clearInterval(clear);
                                    _this.btnText = '再次获取验证码';
                                    _this.isActive = true;
                                }
                            },1000);
                    }else {

                        if(!res.data.msg){
                            Toast("手机号码有误,请重新输入----假号");
                        }else {
                            Toast(res.data.msg)
                        }

                    }
                }).catch((err) => {
                    Toast('手机号码有误,请重新输入--报错');
                    console.info('FailtrueErr', err);
                    return false;
                });
            },
            register(){
                this.axios.post(API_URL + 'Home/Register/register',Qs.stringify({
                    user_name:this.username,
                    mobile:this.mobile,
                    verify:this.message,
                    // email:this.email,
                    password:this.password,
                    re_password:this.re_password,
                    sessionId:this.sessionId,
                    p_id:this.p_id
                })).then((res) => {

                    // console.log(res)
                    Toast(res.data.msg);
                    if(res.data.status == 2){
                        this.$router.push('/follow');
                    }
                }).catch((err) => {
                    console.log(err)
                });
            },
            agreement(){
                var agreeUrl = this.URL + '/App/agreement.txt';
                
                
            }
            

        },
        mounted() {
            document.body.scrollTop = 0;
            var pa =window.location.href;
            if(pa.indexOf("=")>-1){
                var tpa = pa.split('=');
                var spa = tpa[1].split('&');
                this.p_id = spa[0];
                this.status = true;
            }
             
        },
        destroyed(){
            this.scrollWatch = false;
        }
    }
</script>
<style lang="less" scoped>
    .register-wrap{
        padding:0 .6rem;
        background:#fff;
        .logoIn-header{
            width:100%;
            height:.9rem;
            line-height:.9rem;
            text-align:center;
            font-size:.36rem;
            color:#d0111b;
            position:relative;
            .btn-back{
                width:1.3rem;
                height:100%;
                font-size:.28rem;
                color:#999;
                position:absolute;
                left:-.6rem;
                top:0;
            }
        }
        .from{
            .input-main{
                height:1.1rem;
                margin-top:.3rem;
                position:relative;
                .icon{
                    width:1.1rem;
                    height:100%;
                    position:absolute;
                    left:0;
                    top:0;
                }
                input{
                    width:100%;
                    height:100%;
                    border:none;
                    background:#f5f5f5;
                    text-indent:1.1rem;
                    border-radius:5px;
                    font-size:.28rem;
                    line-height:100%;
                }
                /*select#modelType {*/
                /*    padding: .2rem .05rem;*/
                /*    margin: -.95rem .2rem 0 0;*/
                /*    position: relative;*/
                /*    float: right;*/
                /*    border-radius: 5px;*/
                /*}*/
                .form-control {
                    padding: .2rem .05rem;
                    margin: -.92rem .2rem 0 0;
                    position: relative;
                    float: right;
                    border-radius: 5px;
                }
            }
            .agreement{
                font-size:.2rem;
                color:#999;
                height:1rem;
                line-height:1rem;
                text-align:center;
                a{
                    color:#2395ff;
                    font-size:.2rem;

                }
            }
            .userName{
                .icon{
                    background:url(../../assets/userName.png) no-repeat center;
                    background-size:.44rem .55rem;
                }
            }
            .phone-number{
                .icon{
                    background:url(../../assets/phone.png) no-repeat center;
                    background-size:.36rem .5rem;
                }
            }
            .message{
                .icon{
                    background:url(../../assets/message.png) no-repeat center;
                    background-size:.41rem .33rem;
                }
                .btn-ver{
                    width:1.88rem;
                    height:1.04rem;
                    position:absolute;
                    right:.04rem;
                    top:50%;
                    margin-top:-.52rem;
                    border:none;
                    background:#fff;
                    font-size:.26rem;
                    color:#333;
                    border-radius:5px;
                    outline:none;
                }
                .btn-ver:active{
                    background:#f9781e;
                    color:#fff;
                }
                .btn-ver.active{
                    background:#f9781e;
                    color:#fff;
                }
            }
            .passWord{
                .icon{
                    background:url(../../assets/passWord.png) no-repeat center;
                    background-size:.44rem .51rem;
                }
            }
            .rec{
                .icon{
                     background:url(../../assets/rec.png) no-repeat center;
                     background-size:.5rem .46rem;
                }
            }
            .btn-in{
                width:100%;
                height:1.1rem;
                border:none;
                border-radius:20px;
                outline:none;
                margin-top:.3rem;
                background:#d0111b;
                font-size:.36rem;
                color:#fff;
                margin-bottom:.5rem;
            }
            .btn-in:active{
                box-shadow: 0 5px 5px #ccc;
            }
        }
        .return-btn{
            height:.95rem;
            width:100%;
            text-align:center;
            line-height:.95rem;
            .btn{
                display:inline-block;
                font-size:.28rem;
                color:#797979;
            }
        }
    }
</style>