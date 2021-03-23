/* 管理员查看课程接口 */
import createAPI from '../fetch.js'

const ShowCourses = {
    showCourses: (data, $this, cancel) => createAPI('/course/showCourses', 'post', data, $this, cancel)
}
export default ShowCourses
