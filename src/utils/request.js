import axios from "axios";
import { getBaseUrl } from "../utils/index";

const baseURL = getBaseUrl()
const instance = axios.create({
    baseURL,
    timeout:50000,
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    let token = localStorage.getItem('token')
    if(token){
        config.headers['authorization'] = token
    }
    return config
},
err=>{
    return Promise.reject(err)
}
)



//响应拦截器
instance.interceptors.response.use(res=>{
    return res
},
err=>{
    return Promise.reject(err)
}
)


export default instance



