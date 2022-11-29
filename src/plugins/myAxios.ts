import axios, {AxiosInstance} from "axios";
const isDev = process.env.NODE_ENV === 'development';

const myAxios: AxiosInstance = axios.create({
    baseURL: isDev ? 'http://localhost:8080/api' : 'https://paoyu-20696-6-1315438690.sh.run.tcloudbase.com',
});

myAxios.defaults.withCredentials = true

//添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('发请求',config)
    return config;

}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log('收到响应',response)
    //未登录跳转到登录页
    if(response?.data?.message === "未登录"){
        const redirectUrl = window.location.href;
        window.location.href = `#/user/login`;
    }
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;