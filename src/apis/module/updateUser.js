/* 学生修改密码接口 */
import createAPI from '../fetch.js'

const updateUser = {
    updateUser: (data, $this, cancel) => createAPI('/user/updateUser', 'post', data, $this, cancel)
}
export default updateUser
