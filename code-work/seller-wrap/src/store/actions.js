import http from "@/api"
import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY} from "./mutation-types"
import msite from "../api/msite";

const OK = 0;
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
    }
}