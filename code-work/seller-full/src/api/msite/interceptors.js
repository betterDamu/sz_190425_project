import axios from "axios";
import {Toast,Dialog} from "vant"
import store from "@/store/store.js"
import router from "@/router"

const msiteAxios = axios.create({
    timeout:5000
})

msiteAxios.interceptors.request.use((config)=>{
    /*
        处理一些请求时需要携带token的接口
            没有token 请求进入失败流程 跳转回登录页
            拥有token 则携带上token(Authorization)
    */
    let needToken = config.headers.needToken;
    //处理一些请求时需要携带token的接口
    if(needToken){
        const token = store.state.token;
        if(token){
            //拥有token 则携带上token(Authorization)
            config.headers.Authorization=store.state.token;
        }else {
            //没有token 请求进入失败流程 跳转回登录页
            let error = new Error("没有token 请先登录")
            error.status = 401
            throw error
        }
    }

    // 对params参数进行处理
    if(config.url === "/4000/position"){
        config.url = config.url+"/"+config.params.latitude+","+config.params.longitude;
        config.params={}
    }

    //轻提示
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

    const {response,message} = err;
    if(response){
        // 发生异常时  请求已经抵达过后台了
        //退出登录 跳转到登录页 进行提醒
        store.dispatch("restUser")
        Dialog({ message });
        router.replace("/Login")
    }else{
        // 发生异常时 请求压根没去到后台 (请求拦截器中抛出异常  404)
        Dialog({ message });
        router.replace("/Login")
    }

    return Promise.reject(err)
})


export default msiteAxios