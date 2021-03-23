/* 管理员删除课程接口 */
import createAPI from '../fetch.js'

const DeleteCourse = {
    deleteCourse: (data, $this, cancel) => createAPI('/course/deleteCourse', 'post', data, $this, cancel)
}
export default DeleteCourse
