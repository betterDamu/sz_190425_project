<template>
    <div id="shop">
        <ele-header :seller="seller" :id="id"></ele-header>
        <nav>
            <div>
                <router-link :to="`/Shop/${id}/goods`">商品</router-link>
            </div>
            <div>
                <router-link :to="`/Shop/${id}/ratings`">评价</router-link>
            </div>
            <div>
                <router-link :to="`/Shop/${id}/shops`">商家</router-link>
            </div>
        </nav>
        <router-view :seller="seller"></router-view>
    </div>
</template>

<script>
    import axios from "axios";
    import header from "components/ele-header/ele-header.vue"
    const OK = 0;
    export default {
        name: 'Shop',
        data(){
            return {
                seller:{}
            }
        },
        props:{
          id:String
        },
        components:{
            "ele-header":header
        },
        async created(){
            //拿到商家id 根据id去数据库中选出id对应的商家
            const  sellerData = await  axios.get("/seller")
            if(sellerData.data.errno === OK){
                this.seller = sellerData.data.data
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    #shop
        width 100%
        height 100%
        overflow auto
        nav
            border-1px-damu(rgba(7,17,27,.1))
            display flex
            height 40px
            & > div
                flex 1
                text-align center
                line-height 40px
                a
                    font-size 14px
                    color rgb(77,85,93)
                    display block
                    width 100%
                    height 100%
                    &.active
                        color rgb(240,20,20)
</style>
