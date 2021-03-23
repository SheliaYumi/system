/* 教师修改成绩接口 */
import createAPI from '../fetch.js'

const UpdateGrade = {
    updateGrade: (data, $this, cancel) => createAPI('/grade/updateGrade', 'post', data, $this, cancel)
}
export default UpdateGrade
