/* 学生修改信息接口 */
import createAPI from '../fetch.js'

const UpdateStudent = {
    updateStudent: (data, $this, cancel) => createAPI('/student/updateStudent', 'post', data, $this, cancel)
}
export default UpdateStudent
