<template>
    <div class="head">
        <div class="headTop">
            <img class="avatar" :src="seller.avatar" alt="">
            <div class="content">
                <div class="title">
                    <i class="brand"></i>
                    <span class="text">{{seller.name}}</span>
                </div>
                <div class="description">
                    <span class="text">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
                </div>
                <div class="supports" v-if="seller.supports&&seller.supports.length">
                    <i class="icon" :class="iconClass[seller.supports[0].type]"></i>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="btns" v-if="seller.supports&&seller.supports.length" @click="showMask=true">
                <span class="text">{{seller.supports.length}}个</span>
                <i class="icon iconfont icongou"></i>
            </div>
        </div>
        <div class="bulletin" @click="showMask=true">
            <i class="icon"></i>
            <span class="arrow">&gt;</span>
            <span>{{seller.bulletin}}</span>
        </div>
        <div class="bg">
            <img  :src="seller.avatar" alt="">
        </div>
        <transition name="mask">
            <div class="mask" v-show="showMask">
                <div class="mask-wrap">
                    <div class="mask-main">
                        <!--主体内容-->
                        <h2 class="title">{{seller.name}}</h2>
                        <ele-stars :size="48" :score="seller.score" class="stars"></ele-stars>
                        <ele-line class="line">
                            <span class="text">优惠信息</span>
                        </ele-line>
                        <ele-list class="list" :supports="seller.supports"></ele-list>
                        <ele-line class="line">
                            <span class="text">商家公告</span>
                        </ele-line>
                        <p class="text">
                            {{seller.bulletin}}
                        </p>
                    </div>
                </div>
                <div class="mask-footer">
                    <i class="icon iconfont iconclose" @click="showMask=false"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import stars from "FooterGuide/ele-Stars/Stars.vue"
    import line from "FooterGuide/ele-line/ele-line.vue"
    import list from "FooterGuide/ele-list/ele-list.vue"
    export default {
        name: "ele-header",
        props:{
            seller:Object
        },
        data(){
            return {
                iconClass:["decrease","discount","guarantee","invoice","special"],
                showMask:false
            }
        },
         components:{
            "ele-stars":stars,
            "ele-line":line,
            "ele-list":list
         }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixin.styl"
    @import "../../common/stylus/extend.styl"
    @import "../../common/stylus/transition.styl"
    .head
        position relative
        font-size 0
        background-color rgba(7,17,17,.5)
        overflow hidden
        .headTop
            margin 24px 0px 18px 24px
            .avatar
                width 64px
                height 64px
                border-radius 2px
                margin-right 16px
                vertical-align top
            .content
                display inline-block
                .title
                    margin-top 2px
                    margin-bottom 8px
                    .brand
                        bg-image(brand)
                        display inline-block
                        margin-right 6px
                        width 30px
                        height 18px
                        vertical-align top
                    .text
                        font-size 16px
                        color rgb(255,255,255)
                        font-weight bold
                        line-height 18px
                .description
                    .text
                        color rgb(255,255,255)
                        font-size 12px
                        line-height 12px
                        font-weight 200
                .supports
                    margin-top 10px
                    margin-bottom 2px
                    .icon
                        display inline-block
                        width 12px
                        height 12px
                        margin-right 4px
                        vertical-align top
                        &.decrease
                            bg-image(decrease_1)
                        &.discount
                            bg-image(discount_1)
                        &.guarantee
                            bg-image(guarantee_1)
                        &.invoice
                            bg-image(invoice_1)
                        &.special
                            bg-image(special_1)
                    .text
                        color rgb(255,255,255)
                        font-size 10px
                        line-height 12px
                        font-weight 200
            .btns
                position absolute
                right 8px
                bottom 66px
                width 50px
                height 24px
                background-color rgba(0,0,0,.2)
                border-radius 10px
                line-height 24px
                .text
                    float left
                    margin-top 6px
                    margin-right 3px
                    color rgb(255,255,255)
                    font-size 10px
                    line-height 12px
                    font-weight 200
                .icon
                    float left
                    color hotpink
        .bulletin
            height 28px
            line-height 28px
            background-color rgba(7,17,27,.2)
            color rgb(255,255,255)
            font-size 12px
            font-weight 200
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding-right 26px
            .icon
                bg-image(bulletin)
                float left
                width 22px
                height 12px
                margin-left 12px
                margin-right 4px
                margin-top 8px
            .arrow
                position absolute
                right 12px

        .bg
            position absolute
            left 0
            right  0
            top 0
            bottom  0
            z-index -1
            filter blur(5px)
            img
                width 100%
                height 100%
        .mask
            position fixed
            left 0
            top 0
            width 100%
            height 100%
            background rgba(7,17,27,.8)
            z-index 99
            overflow auto
            .mask-wrap
                min-height 100%
                .mask-main
                    @extend .clearfix
                    padding-bottom  96px
                    padding-top 64px
                    text-align center
                    .title
                        font-size 16px
                        line-height 16px
                        color rgb(255,255,255)
                        font-weight 700
                        text-align center
                    .stars
                        margin-top 16px
                        margin-bottom 28px
                    .line
                        .text
                            color pink
                            margin 0 12px
                            font-size 14px
                            line-height 14px
                            font-weight 700
                    & > .text
                        width 80%
                        margin 0 auto
                        margin-top 24px
                        font-size 12px
                        line-height 24px
                        font-weight 200
                        color rgb(255,255,255)
                        text-align left
            .mask-footer
                margin-top -96px
                height 96px
                text-align center
                .icon
                    padding-top 32px
                    font-size 32px
                    color white
</style>