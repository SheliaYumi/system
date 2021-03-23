<template>
    <header>
      <div class="l-content">
        <!--设置button的背景色为plain,定义@click="collapsMenu"-->
        <el-button plain icon="el-icon-menu" size="mini" @click="collapsMenu"></el-button>   <!--菜单栏伸缩按钮-->
        <el-breadcrumb separator="/">   <!--面包屑-->
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="curent.path" v-if="curent && curent.label !== '首页'">{{curent.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">  <!--用户信息-->
        <el-dropdown trigger="click" size="mini">
          <span class="el-dropdown-link">
            <img :src="userImg" class="user">  <!--绑定图片-->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-switch-button"><span @click="signOut()">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
        curent: state => state.tab.currentMenu // 直接获取当前菜单的值,因为 tab.js在index.js中是modules中，不在公共组件中，所以要使用state.模块名.属性名
    }),
    data () {
        return {
            userImg: require('../../assets/images/user.jpg') // src后面不能直接用在字符串，需要以模块的方式导入，需要用到require
        }
    },
    methods: {
        // 退出事件
        signOut () {
            console.log(11)
            /* window.sessionStorage.removeItem("user") // 清除token */
            this.$router.replace('/') // 返回登录页面
            // 触发后禁止浏览器的后退键
            history.pushState(null, null, document.URL)
            window.addEventListener('popstate', function (e) {
                history.pushState(null, null, document.URL)
            }, false)
        },
        collapsMenu () { // 调用 vuex中的tab.js中collapseMenu的方法
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style scoped>
  header {   /*header容器，一个template必须只能有一个容器*/
    display: flex;  /*弹性布局*/
    height: 100%;
    align-items: center;
    justify-content: space-between; /*不用float浮动布局，采用两边布局*/
  }
  .l-content {    /*左边的菜单拉伸按钮*/
    display: flex;
    align-items: center;
  }
  .l-content .el-button{   /*面包屑跟 菜单按钮的间距*/
    margin-right: 20px;
  }

  .r-content .user {   /*设置图片的大小，以及圆滑度*/
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>

<style> /*组件嵌套组件的样式不能写scoped，所以这边重新写一个style*/
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {   /*面包屑除首页之外的按钮字体颜色*/
    color: #f4f4f4;
  }

  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{   /*面包屑除首页字体颜色*/
    color: #666666;
    font-weight: normal;
  }
</style>
