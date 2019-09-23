<template>
    <div style="background: gray;height:100px;text-align: center;
                line-height: 100px;color: pink;font-size: 40px">
        <p>详细信息</p>
        <van-button type="danger" @click="$router.replace('/Profile')">返回</van-button>
    </div>
</template>

<script>
    import {Button} from "vant"
    export default {
        name: "UserDetail",
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>