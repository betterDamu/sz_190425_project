<template>
    <div class="stars" :class="starsSize">
        <div class="star" v-for="item in classArr" :class="item"></div>
      <!--  <div class="star on"></div>
        <div class="star on"></div>
        <div class="star on"></div>
        <div class="star half"></div>
        <div class="star off"></div>-->
    </div>
</template>

<script>
    const ON = "on";
    const HALF = "half";
    const OFF = "off";
    const LENGTH = 5;
    export default {
        name: "ele-stars",
        props:{
            size:Number,
            score:Number
        },
        computed:{
            starsSize(){
                return `stars-${this.size}`
            },
            classArr(){
                let arr = [];
                // 0.4  0.6  1  1.4  1.6
                let onSize = Math.floor(this.score *2) / 2;
                let hasHalf =  onSize%1 !== 0 ;
                onSize = Math.floor(onSize)

                for(var i=0;i<onSize;i++){
                    arr.push(ON)
                }
                if(hasHalf){
                    arr.push(HALF)
                }
                while (arr.length < LENGTH){
                    arr.push(OFF)
                }

                return arr
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/common-layout/stylus/mixin.styl"
    .stars
        display inline-flex
        .star
            background-size 100% 100%
            background-repeat no-repeat
        &.stars-48
            .star
                width 20px
                height 20px
                margin-right 20px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star48_on)
                &.half
                    bg-image(star48_half)
                &.off
                    bg-image(star48_off)
        &.stars-36
            .star
                width 15px
                height 15px
                margin-right 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star36_on)
                &.half
                    bg-image(star36_half)
                &.off
                    bg-image(star36_off)
        &.stars-24
            .star
                width 10px
                height 10px
                margin-right 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star24_on)
                &.half
                    bg-image(star24_half)
                &.off
                    bg-image(star24_off)


</style>