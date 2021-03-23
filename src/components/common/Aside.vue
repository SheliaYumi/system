/* 教师侧边栏 */
<template>
  <!--background-color自定义颜色-->
  <div class="aside">
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#fff"
    text-color="#303133"
    active-text-color="#46a7ff"
    :collapse="isCollage"
  >
    <h3 v-show="!isCollage"><div class="el-icon-s-order" />重修在线申报系统</h3>

    <h3 v-show="isCollage"><div class="el-icon-s-order" /></h3>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu  index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
          >
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Aside',
    computed: {
    // 计算属性，判断有无子菜单
        noChildren () {
            return this.asideMenu.filter(item => !item.children)
        },
        hasChildren () {
            return this.asideMenu.filter(item => item.children)
        },
        isCollage () {
            return this.$store.state.tab.isCollapse
        }
    },
    data () {
    // 用数据的方式来定义菜单
        return {
            asideMenu: [
                {
                    path: '/index',
                    label: '首页',
                    icon: 's-home' // element-ui 的icon的图标
                }, /*
                {
                    path: '/teachersInfo',
                    label: '个人中心',
                    icon: 'user'
                }, */
                {
                    path: '/editPsd',
                    label: '修改密码',
                    icon: 'setting'
                },
                {
                    label: '教学部',
                    icon: 'help',
                    children: [
                        {
                            path: '/students',
                            label: '学生信息',
                            icon: 'setting'
                        },
                        {
                            path: '/gradeManage',
                            label: '课程成绩管理',
                            icon: 'setting'
                        },
                        {
                            path: '/rebuildManage',
                            label: '重修申报管理',
                            icon: 'setting'
                        }
                    ],
                    index: ''
                }
            ]
        }
    },
    methods: {
        clickMenu (item) {
            this.$router.push(item.path) // 在选择菜单栏之前，先路由跳转到 对应的组件
            this.$store.commit('selectMenu', item) // commit 调用 tab.js中的 mutations中的selectMenu方法
        }
    }
}
</script>

<style scoped lang="less">
.aside {
  height: 100%;
  border-right: 1px solid #e6e6e6;
}
.el-menu {
  max-width: 170px;
  height: 100%;
  border: none;
}
.el-menu h3 {
  color: #000000;
  text-align: center;
  line-height: 48px;
  white-space: nowrap;
 overflow:hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {  /*在官网的NaMenu -> 折叠 的样式的参考*/
    width: 200px;
    height: 100%;
}
/* // 解决element侧边栏收缩时的卡顿情况（覆盖它默认的css）
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    } */
</style>
