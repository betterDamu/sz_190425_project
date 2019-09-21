import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY} from "./mutation-types"
export default {
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops = shops
    },
    [RECEIVE_CATEGORY](state,categorys){
        state.categorys = categorys
    }
}