import Vue from 'vue'
import axios from 'axios'
// import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import router from '@/routers/router'

axios.defaults.baseURL = 'http://192.168.1.8:8088'
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    // 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
const http = {
    get: (url, params) => {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    post: (url, params) => {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err, '-----err')
                    reject(err)
                })
        });
    }
}

export default http