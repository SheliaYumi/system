/* 教师修改密码接口 */
import createAPI from '../fetch.js'

const UpdateUser1 = {
    updateUser1: (data, $this, cancel) => createAPI('/user/updateUser1', 'post', data, $this, cancel)
}
export default UpdateUser1
