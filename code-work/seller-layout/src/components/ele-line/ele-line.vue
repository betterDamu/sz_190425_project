<template>
    <div class="line">
        <div></div>
        <slot>
            <span class="text">xxx</span>
        </slot>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "ele-line"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .line
        width 80%
        display inline-flex
        align-items center
        div
            flex 1
            height 1px
            background rgba(255,255,255,.2)
        .text
            margin 0 12px
            font-size 14px
            line-height 14px
            color rgb(255,255,255)
            font-weight 700
</style>