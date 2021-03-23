<template>
    <el-container style="height: 100%">
        <el-aside v-if="userId == 1" width="auto"><Aside></Aside></el-aside>
        <el-aside v-if="userId == 0" width="auto"><Bside></Bside></el-aside>
        <el-aside v-if="userId == 2" width="auto"><Cside></Cside></el-aside>
        <el-container>
            <el-header><Header></Header></el-header>
            <el-main><router-view /></el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '../components/common/Header'
import Aside from '../components/common/Aside'
import Bside from '../components/common/Bside'
import Cside from '../components/common/Cside'
export default {
    data () {
        return {
            userId: 2
        }
    },
    components: {
        Header,
        Aside,
        Bside,
        Cside
    }
}
</script>

<style scoped lang="less">
.el-header {
    background-color: #333333;
}
/*正式的使用时去掉*/
/*.el-aside {*/
/*  background-color: #D3DCE6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 200px;*/
/*}*/
.el-main {
    background-color: #e9eef3;
    color: #333;
}
</style>
