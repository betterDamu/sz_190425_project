<template>
    <ul class="list">
        <li class="item" v-for="support in supports">
            <i class="icon" :class="iconClass[support.type]"></i>
            <span class="text">{{support.description}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ele-list",
        props:{
            supports:Array
        },
        data(){
            return {
                iconClass:["decrease","discount","guarantee","invoice","special"],
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixin.styl"
    .list
        width 80%
        padding 24px 12px 28px 12px
        display inline-flex
        flex-direction column
        .item
            display flex
            align-items center
            text-align left
            margin-bottom 12px
            &:last-child
                margin-bottom 0
            .icon
                display inline-block
                width 16px
                height 16px
                margin-right 6px
                vertical-align top
                &.decrease
                    bg-image(decrease_2)
                &.discount
                    bg-image(discount_2)
                &.guarantee
                    bg-image(guarantee_2)
                &.invoice
                    bg-image(invoice_2)
                &.special
                    bg-image(special_2)
            .text
                color rgb(255,255,255)
                font-size 12px
                line-height 12px
                font-weight 200

</style>