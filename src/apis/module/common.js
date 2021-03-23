/**
 * 登录模块
 */
/* 接口调用
async loadbannerList () {
            const { data: res } = await this.$apis.getbannerList()
            this.bannerList = res.list
        }
        */
import createAPI from '../fetch.js'

const LOGIN = {
    // 登录接口
    login: (data, $this, cancel) => createAPI('/web/admin/login', 'post', data, $this, cancel),
    // 登出接口
    logout: (data, $this, cancel) => createAPI('/web/admin/logout', 'post', data, $this, cancel)
}
export default LOGIN
