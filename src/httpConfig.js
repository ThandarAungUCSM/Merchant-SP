const request = 'http://api.webeauty.com.au/agent/adminstore.php/';

const config = {

  login: request + 'Public/login', //登录
  getApproval: request + 'Approval/getApproval', //获取权限

  getHome: request + 'Index/index', //获取首页信息

}
export default config
