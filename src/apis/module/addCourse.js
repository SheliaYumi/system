/* 管理员添加课程接口 */
import createAPI from '../fetch.js'

const AddCourse = {
    addCourse: (data, $this, cancel) => createAPI('/course/addCourse', 'post', data, $this, cancel)
}
export default AddCourse
