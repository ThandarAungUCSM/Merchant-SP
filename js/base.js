exports.install = function(Vue, options) {
    //验证登录
    Vue.prototype.isLogin = function() {

        var token = sessionStorage.getItem('data_token');

        if (token === 'undefined' || token === null) {
            window.parent.location.href = "/#/login";
        }

    };
};