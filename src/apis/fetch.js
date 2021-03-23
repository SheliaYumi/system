import axios from 'axios'
import baseUrl from './config'

const instance = axios.create({
    // baseURL: baseUrl,
    baseURL: process.env.NODE_ENV === 'production' ? baseUrl : '/proxy',
    timeout: 30000,
    // 请求头部信息
    headers: {
        'Content-Type': 'application/json'
    },
    transformRequest: [function (data, headers) {
        // 对 data 进行任意转换处理
        return JSON.stringify(data)
    }],
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data
    }]
    // withCredentials: true // default
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.token = window.sessionStorage.getItem('token')
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return JSON.parse(response.data)
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

function createAPI (url, method, data, $this, cancel) {
    let config = {}
    if (method === 'post' || method === 'POST') {
        config = {
            method: 'post',
            url: url,
            data
        }
    } else {
        config = {
            method: 'post',
            url: url,
            params: data
        }
    }
    return instance(config)
}

export default createAPI
