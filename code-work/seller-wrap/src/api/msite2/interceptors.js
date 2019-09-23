import axios from "axios";
import {Toast} from "vant"

const msiteAxios = axios.create({
    // baseURL:"http://localhost:4000",
    timeout:5000
})

// code review
msiteAxios.interceptors.request.use((config)=>{
    if(config.url === "/4000/position"){
        config.url = config.url+"/"+config.params.latitude+","+config.params.longitude;
        config.params={}
    }

    Toast.loading({
        mask: true,
        message: '加载中...',
        duration:0,
        forbidClick:true
    })
    return config
},(err)=>{
    Toast.clear()
    Toast.fail('请求失败 请稍后重试');
    return Promise.reject(err)
})

msiteAxios.interceptors.response.use((res)=>{
    Toast.clear()
    return res.data
},(err)=>{
    Toast.clear()
    Toast.fail('请求失败 请稍后重试');
    return Promise.reject(err)
})


export default msiteAxios