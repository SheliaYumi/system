/* 教师查看所有重修申报信息接口 */
import createAPI from '../fetch.js'

const ShowApplys = {
    showApplys: (data, $this, cancel) => createAPI('/message/showApplyMessages', 'post', data, $this, cancel)
}
export default ShowApplys
