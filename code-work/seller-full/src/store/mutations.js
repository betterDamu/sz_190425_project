import {RECEIVE_ADDRESS,RECEIVE_SHOPS,
        RECEIVE_CATEGORY,RECEIVE_USER,REST_USER,AUTO_LOGIN} from "./mutation-types"
export default {
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops = shops
    },
    [RECEIVE_CATEGORY](state,categorys){
        state.categorys = categorys
    },
    [RECEIVE_USER](state,user){
        state.user = user,
        state.token =  user.token;
        localStorage.setItem("atguigu_token",user.token)
    },
    [REST_USER](state,user){
        state.user = {};
        state.token = "";
        localStorage.removeItem("atguigu_token")
    },
    [AUTO_LOGIN](state,user){
        state.user = user
    },
}