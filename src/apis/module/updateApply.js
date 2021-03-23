/* 教师修改重修信息接口 */
import createAPI from '../fetch.js'

const UpdateApply = {
    updateApply: (data, $this, cancel) => createAPI('/message/updateApplyMessage', 'post', data, $this, cancel)
}
export default UpdateApply
