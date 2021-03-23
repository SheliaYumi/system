/* 教师查询所有学生接口 */
import createAPI from '../fetch.js'

const ShowStudents = {
    showStudents: (data, $this, cancel) => createAPI('/student/showStudents', 'post', data, $this, cancel)
}
export default ShowStudents
