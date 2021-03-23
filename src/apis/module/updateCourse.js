/* 管理员修改课程接口 */
import createAPI from '../fetch.js'

const UpdateCourse = {
    updateCourse: (data, $this, cancel) => createAPI('/course/updateCourse', 'post', data, $this, cancel)
}
export default UpdateCourse
