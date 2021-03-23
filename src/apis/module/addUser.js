/* 添加用户接口 */
import createAPI from '../fetch.js'

const AddUser = {
    addUser: (data, $this, cancel) => createAPI('/user/addUser', 'post', data, $this, cancel)
}
export default AddUser
