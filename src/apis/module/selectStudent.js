/* 学生查看个人信息接口 */
import createAPI from '../fetch.js'

const SelectStudent = {
    selectStudent: (data, $this, cancel) => createAPI('/student/selectStudent', 'post', data, $this, cancel)
}
export default SelectStudent
