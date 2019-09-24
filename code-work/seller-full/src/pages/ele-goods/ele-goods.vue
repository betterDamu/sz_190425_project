<template>
    <div>
        <div>
            <div class="goods">
                <div class="menu-wrapper" ref="leftWrapper">
                    <ul ref="leftUL">
                        <li class="menu-item" :class="{current: currentIndex=== index}"
                            v-for="(good,index) in goods" @click="handleCForItem(index)">
                            <span class="text bottom-border-1px">
                                <img class="icon" :src="good.icon" v-show="good.icon">
                                {{good.name}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="foods-wrapper" ref="rightWrapper">
                    <ul ref="rightUL">
                        <li class="food-list-hook" v-for="good in goods" >
                            <h1 class="title">{{good.name}}</h1>
                            <ul>
                                <li class="food-item bottom-border-1px" v-for="food in good.foods">
                                    <div class="icon">
                                        <img width="57" height="57" :src="food.icon">
                                    </div>
                                    <div class="content">
                                        <h2 class="name">{{food.name}}</h2>
                                        <p class="desc">{{food.description}}</p>
                                        <div class="extra">
                                            <span class="count">月售{{food.sellCount}}份</span>
                                            <span>好评率{{food.rating}}%</span></div>
                                        <div class="price">
                                            <span class="now">￥{{food.price}}</span>
                                            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                        </div>
                                        <div class="cartcontrol-wrapper">
                                            <ele-cartControl></ele-cartControl>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ele-cart></ele-cart>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import BScroll from 'better-scroll'
    import cart from "components/ele-cart/ele-cart"
    import cartControl from "components/ele-cartControl/ele-cartControl"
    const OK = 0;
    export default {
        name: "ele-goods",
        data(){
            return {
                goods:[],
                tops: [],
                scrollY:0
            }
        },
        props:{
            id:String
        },
        computed:{
            currentIndex(){
                const {scrollY, tops} = this
                const index = tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
                // 如果index有变动 让左边的列表运动index所在的那个节点上
                if(index !== this.index){
                    this.index = index;
                    let li = this.$refs.leftUL.children[index];
                    this.leftScroll.scrollToElement(li,300)
                }
                return index
            }
        },
        methods:{
            initTops(){
                const lis = this.$refs.rightUL.children;
                const tops =[];
                let top = 0;
                tops.push(top);
                Array.from(lis).forEach((liNode)=>{
                    top += liNode.offsetHeight;
                    tops.push(top);
                })
                this.tops = tops;
            },
            handleCForItem(index){
                const top = this.tops[index];
                this.scrollY = top;
                this.rightScroll.scrollTo(0,-top,300)
            }
        },
        components:{
            "ele-cart":cart,
            "ele-cartControl":cartControl
        },
        async mounted(){
            let res = await axios.get("/goods")
            if(res.data.errno === OK){
                this.goods = res.data.data
            }

            this.leftScroll = new BScroll(this.$refs.leftWrapper)
            this.rightScroll = new BScroll(this.$refs.rightWrapper,{
                probeType:1
            })
            this.rightScroll.on('scroll', ({x, y}) => {
                this.scrollY = Math.abs(y)
            })
            this.rightScroll.on('scrollEnd', ({x, y}) => {
                this.scrollY = Math.abs(y)
            })

            this.$nextTick(()=>{
                this.initTops()
            })
        },
        watch:{
            goods(){
                this.$nextTick(()=>{
                    this.initTops()
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .goods
        display: flex
        position: absolute
        top: 173px
        bottom: 46px
        width: 100%
        background: #fff;
        overflow: hidden
        .menu-wrapper
            flex: 0 0 80px
            width: 80px
            background: #f3f5f7
            .menu-item
                display: table
                height: 54px
                width: 56px
                padding: 0 12px
                line-height: 14px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    color: $green
                    font-weight: 700
                    .text
                        border-none()
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 2px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                .text
                    display: table-cell
                    width: 56px
                    vertical-align: middle
                    bottom-border-1px(rgba(7, 17, 27, 0.1))
                    font-size: 12px
        .foods-wrapper
            flex: 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex: 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc, .extra
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                    .extra
                        .count
                            margin-right: 12px
                    .price
                        font-weight: 700
                        line-height: 24px
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                        .old
                            text-decoration: line-through
                            font-size: 10px
                            color: rgb(147, 153, 159)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 12px
</style>
