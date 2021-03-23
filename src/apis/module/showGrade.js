/* 学生查看成绩接口 */
import createAPI from '../fetch.js'

const ShowGrade = {
    showGrade: (data, $this, cancel) => createAPI('/grade/showGrade', 'post', data, $this, cancel)
}
export default ShowGrade
