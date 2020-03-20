import qs from 'qs';
import axios from 'axios';

var HTTP = function(API_URL,params){
    params.token = sessionStorage.getItem("data_token");
    return new Promise((resolve,reject)=>{
        axios.post(API_URL, qs.stringify(params)).then((res) => {
            if (res.data.status == 10001) {
                window.parent.location.hash = '#/login';
            }else if (res.data.status == 1) {
                resolve(res);
            } else {
                reject(res);
            }
        })
    })
}
// module.exports = HTTP;
export default HTTP;