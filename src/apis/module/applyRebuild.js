/* 学生申请重修接口 */
import createAPI from '../fetch.js'

const ApplyRebuild = {
    applyRebuild: (data, $this, cancel) => createAPI('/message/adApplyMessage', 'post', data, $this, cancel)
}
export default ApplyRebuild
