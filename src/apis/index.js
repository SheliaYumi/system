import COMMON from './module/common'
import ADDUSER from './module/addUser'
import DELETEUSER from './module/deleteUser'
import ADDCOURSE from './module/addCourse'
import SHOWCOURSES from './module/showCourses'
import UPDATECOURSE from './module/updateCourse'
import DELETECOURSE from './module/deleteCourse'
import UPDATEUSER from './module/updateUser'
import SELECTSTUDENT from './module/selectStudent'
import SHOWGRADE from './module/showGrade'
import APPLYREBUILD from './module/applyRebuild'
import UPDATESTUDENT from './module/updateStudent'
import UPDATEUSER1 from './module/updateUser1'
import UPDATEAPPLY from './module/updateApply'
import UPDATEGRADE from './module/updateGrade'
import SHOWSTUDENTS from './module/showStudents'
import SHOWAPPLYS from './module/showApplys'

/**
 * 所有接口引用入口
 */
const apis = {
    ...COMMON,
    ...ADDUSER,
    ...DELETEUSER,
    ...ADDCOURSE,
    ...SHOWCOURSES,
    ...UPDATECOURSE,
    ...DELETECOURSE,
    ...UPDATEUSER,
    ...SELECTSTUDENT,
    ...SHOWGRADE,
    ...APPLYREBUILD,
    ...UPDATESTUDENT,
    ...UPDATEUSER1,
    ...UPDATEAPPLY,
    ...UPDATEGRADE,
    ...SHOWSTUDENTS,
    ...SHOWAPPLYS
}
export default apis
