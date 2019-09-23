import http from "@/api"
import router from "@/router"
import {Toast} from "vant"
import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY,RECEIVE_USER} from "./mutation-types"

const OK = 0;
const ERROR = 1;
const loginSuccsee = (commit,res)=>{
    //登录成功之后要将用户信息保存
    commit(RECEIVE_USER,res.data)
    //登录成功之后要跳转到个人中心
    router.replace("/Profile")
}
const loginFail = (res)=>{
    Toast.fail(res.msg)
}
export default {
    async getAddress({commit,state}){
        // 调用native的接口 获取经纬度
        const res = await http.msite.getAddress({
            latitude:state.latitude,
            longitude:state.longitude
        })

       if(res.code === OK){
           //调用mutation
           commit(RECEIVE_ADDRESS,res.data)
       }
    },
    async getShops({commit,state}){
        const res = await http.msite.getShops({
            latitude:state.latitude,
            longitude:state.longitude
        })

        if(res.code === OK){
            //调用mutation
            commit(RECEIVE_SHOPS,res.data)
        }
    },
    async getCategorys({commit,state},callback){
        const res = await http.msite.getCategorys()
        if(res.code === OK){
            //调用mutation
            commit(RECEIVE_CATEGORY,res.data)
            // 数据准备完毕
            typeof callback === "function" && callback()
        }
    },
    async getUser({commit},{loginWay,user,getCaptcha}){
        // true:短信登录  false:密码登录
        let res = null;
        if(loginWay){
             res =  await http.login.loginSms({
                phone:user.phone,
                code:user.code
            })
        }else {
            res =  await http.login.loginPwd({
                name:user.name,
                pwd:user.pwd,
                captcha:user.captcha,
            })
            ;(res.code === ERROR) && getCaptcha()
        }
        //将用户信息存入state
        ;(res.code === OK) && loginSuccsee(commit,res)
        ;(res.code === ERROR) && loginFail(res)
    }
}