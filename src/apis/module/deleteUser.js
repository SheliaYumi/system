/* 删除用户接口 */
import createAPI from '../fetch.js'

const DeleteUser = {
    deleteUser: (data, $this, cancel) => createAPI('/user/deleteUser', 'post', data, $this, cancel)
}
export default DeleteUser
