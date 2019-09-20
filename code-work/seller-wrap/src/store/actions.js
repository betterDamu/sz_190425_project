import http from "@/api"
import {RECEIVE_ADDRESS,RECEIVE_SHOPS} from "./mutation-types"

const OK = 0;
export default {
    async getAddress({commit,state}){
        // 调用native的接口 获取经纬度
        const res = await http.Msite.getAddress({
            latitude:state.latitude,
            longitude:state.longitude
        })

       if(res.code === OK){
           //调用mutation
           commit(RECEIVE_ADDRESS,res.data)
       }
    },
    async getShops({commit,state}){
        const res = await http.Msite.getShops({
            latitude:state.latitude,
            longitude:state.longitude
        })

        if(res.code === OK){
            //调用mutation
            commit(RECEIVE_SHOPS,res.data)
        }
    }
}