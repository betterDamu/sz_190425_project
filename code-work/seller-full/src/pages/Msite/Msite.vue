<template>
    <section class="content">
        <div class="on">
            <section class="msite">
                <HeaderTop :title="address.name">
                    <span class="header_search" slot="left">
                      <i class="iconfont icon-sousuo"></i>
                    </span>
                    <span class="header_login" slot="right">
                      <span class="header_login_text">登录|注册</span>
                    </span>
                </HeaderTop>
                <!--首页导航-->
                <nav class="msite_nav">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="categorys in categorysArr">
                                <a href="javascript:" class="link_to_food" v-for="category in categorys">
                                    <div class="food_container">
                                        <img :src="baseImgUrl + category.image_url">
                                    </div>
                                    <span>{{category.title}}</span>
                                </a>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </nav>
                <!--首页附近商家-->
                <ShopList></ShopList>
            </section>
        </div>
    </section>
</template>

<script>
    import ShopList from "components/ShopList/ShopList";
    import {mapState,mapActions} from "vuex";
    import _ from "lodash"
    import Swiper from "swiper"
    import "swiper/css/swiper.css"
    const SIZE = 8;
    export default {
        name: "Msite",
        components:{
            ShopList
        },
        computed:{
            ...mapState(["address","categorys","baseImgUrl"]),
            categorysArr(){
                return _.chunk(this.categorys,SIZE)
            }
        },
        methods:{
            ...mapActions(["getAddress","getCategorys"]),
            // watch + $nextTick(包裹渲染函数)
            // callback + $nextTick(包裹渲染函数)
            // promise + 渲染函数
            swiperRender(){
               new Swiper ('.swiper-container', {
                   loop: true,
                   pagination: {
                       el: '.swiper-pagination',
                   },
               })
            }
        },
        async created(){
            this.getAddress();
            // 分发action返回的结果是一个promise  这个promise是在数据改变并且dom更新之后才会确定
            await this.getCategorys();
            this.swiperRender()
        }
       /* watch:{
            //categorys数据发生了改变!!!   dom还没有更新
            categorys(){
                this.$nextTick(()=>{
                    this.swiperRender()
                })
            }
        }*/
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
.content  //每个页面的内容
    >div //决定哪个页面显示
        display none
        &.on
            display block
        >section
            &.msite  //首页
                width 100%
                .msite_nav
                    bottom-border-1px(#e4e4e4)
                    margin-top 45px
                    height 200px
                    background #fff
                    .swiper-container
                        width 100%
                        height 100%
                        .swiper-wrapper
                            width 100%
                            height 100%
                            .swiper-slide
                                display flex
                                justify-content center
                                align-items flex-start
                                flex-wrap wrap
                                .link_to_food
                                    width 25%
                                    .food_container
                                        display block
                                        width 100%
                                        text-align center
                                        padding-bottom 10px
                                        font-size 0
                                        img
                                            display inline-block
                                            width 50px
                                            height 50px
                                    span
                                        display block
                                        width 100%
                                        text-align center
                                        font-size 13px
                                        color #666
                        .swiper-pagination
                            >span.swiper-pagination-bullet-active
                                background #02a774
</style>