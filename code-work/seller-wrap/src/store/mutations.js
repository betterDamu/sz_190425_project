import {RECEIVE_ADDRESS,RECEIVE_SHOPS,
        RECEIVE_CATEGORY,RECEIVE_USER,REST_USER} from "./mutation-types"
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
        state.user = user
    },
    [REST_USER](state,user){
        state.user = {}
    }
}