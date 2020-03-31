// const request = 'http://api.webeauty.com.au/agent/adminstore.php/';
const request = 'http://api.ihaosy.com/agent/adminstore.php/';

const config = {

  login: request + 'Public/login', //登录
  getApproval: request + 'Approval/getApproval', //获取权限

  getHome: request + 'Index/index', //获取首页信息

  checUser: request + 'ForgetThePassword/checIsExistBySellerName', //验证账号是否存在
  SendMsg: request + 'SendVerificationCode/registerSendMsg',//发送验证码
  parseReqByPassword: request + 'ForgetThePassword/parseReqByPassword',//提交（忘记密码）

}
export default config
