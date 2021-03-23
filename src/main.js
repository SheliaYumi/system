import Vue from 'vue'
import App from './App.vue'
import router from './router'
import apis from '@/apis'
import store from './store/index.js'
import '@/assets/less/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { setRem } from './utils/plugins/setRem'
// 懒加载
// import VueLazyload from 'vue-lazyload'
/* Vue.use(VueLazyload, {
  loading: require('./assets/images/home/交易须知流程图@2x.png'), // 加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/images/home/交易须知流程图@2x.png') // 加载失败图片
}) */
Vue.use(ElementUI)
setRem(1080)

Vue.config.productionTip = false
// vue原型挂载 - 请求接口函数
Vue.prototype.$apis = apis

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
