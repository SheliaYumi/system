/* 课程管理 */
<template>
    <div class="userManage">
        <div class="add">
            <el-button type="primary" class="add_Course" @click="addCourse()"
                >添加课程</el-button
            >
        </div>
        <!-- 课程表 -->
        <el-table
            ref="multipleTable"
            :data="
                tableData.slice(
                    (currentPage - 1) * pagesize,
                    currentPage * pagesize
                )
            "
            :default-sort="{ prop: 'date', order: 'descending' }"
            tooltip-effect="dark"
        >
            <!-- @selection-change="handleSelectionChange" -->
            <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
            <el-table-column prop="courseId" label="课程号">
            </el-table-column>
            <el-table-column prop="courseProfession" label="专业">
            </el-table-column>
            <el-table-column prop="courseName" label="课程名">
            </el-table-column>
            <el-table-column prop="courseTeacher" label="授课老师">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <paging
            :total="tableData.length"
            :pagesize="pagesize"
            :currentPage="currentPage"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        />
        <!-- 添加课程表单弹窗 -->
        <div class="add_Course_Dialog">
            <el-dialog
                title="添加课程信息"
                :visible.sync="addCourseDialogVisible"
                @close="resetForm('addForm')"
            >
                <!--
            :model="formData": 关联数据
            :rules: 关联校验规则
            ref： 在获取表单对象时使用
        -->
                <el-form
                    :model="addCourseFormData"
                    :rules="rules"
                    ref="addForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="课程号" prop="courseId">
                        <el-input
                            v-model="addCourseFormData.courseId"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="专业" prop="courseProfession">
                        <el-input
                            v-model="addCourseFormData.courseProfession"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="课程名" prop="courseName">
                        <el-input
                            v-model="addCourseFormData.courseName"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="授课老师" prop="courseTeacher">
                        <el-input
                            v-model="addCourseFormData.courseTeacher"
                        ></el-input>
                    </el-form-item>
                    <el-form-item align="right">
                        <el-button type="primary" @click="addC()"
                            >添加</el-button
                        >
                        <el-button @click="resetForm('addForm')"
                            >重置</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
        <!-- 编辑课程信息表单弹窗 -->
        <el-dialog
            title="编辑课程信息"
            :visible.sync="editCourseDialogVisible"
            @close="resetForm('editForm')"
        >
            <!--
            :model="formData": 关联数据
            :rules: 关联校验规则
            ref： 在获取表单对象时使用
        -->
            <el-form
                :model="editFormData"
                :rules="rules"
                ref="editForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="课程号" prop="courseId">
                    <el-input v-model="editFormData.courseId"></el-input>
                </el-form-item>
                <el-form-item label="专业" prop="courseProfession">
                    <el-input
                        v-model="editFormData.courseProfession"
                    ></el-input>
                </el-form-item>
                <el-form-item label="课程名" prop="courseName">
                    <el-input v-model="editFormData.courseName"></el-input>
                </el-form-item>
                <el-form-item label="授课老师" prop="courseTeacher">
                    <el-input v-model="editFormData.courseTeacher"></el-input>
                </el-form-item>
                <el-fo align="right">
                    <el-button type="warning" @click="updateCourse()"
                        >修改</el-button
                    >
                </el-fo>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import Paging from '../../components/common/Paging'
export default {
    data () {
        return {
            addCourseDialogVisible: false, // 添加课程弹窗
            editCourseDialogVisible: false, // 编辑课程信息弹窗
            addCourseFormData: {}, // 添加表单的数据
            editFormData: {}, // 编辑表单的数据
            pagesize: 5, // 每页的数据条数
            currentPage: 1, // 默认开始页面
            tableData: [
                {
                    courseId: 111, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 112, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 113, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 114, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 115, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 116, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 117, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 118, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 119, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                },
                {
                    courseId: 110, // 整型
                    courseProfession: '软件工程',
                    courseName: '计算机基础',
                    courseTeacher: '李四'
                }
            ],
            rules: {
                courseId: [
                    { required: true, message: '请输入课程号', trigger: 'blur' }
                ],
                courseProfession: [
                    { required: true, message: '请输入专业', trigger: 'blur' }
                ],
                courseName: [
                    { required: true, message: '请填写课程名', trigger: 'blur' }
                ],
                courseTeacher: [
                    { required: true, message: '请填写授课教师', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        // 添加课程
        addCourse () {
            this.addCourseDialogVisible = true
        },
        // 重置按钮
        resetForm (addForm) {
            // 双向绑定，输入的数据都赋值给了formData， 清空formData数据
            this.addCourseFormData = {}
            // 清除表单的校验数据
            this.$refs[addForm].resetFields()
        },
        // 表单中的添加按钮
        addC () {
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    this.addCourseDialogVisible = false
                    this.$message.success('添加成功')
                    // 添加成功后调用接口刷新表格
                } else {
                    this.$message.error('请检查输入项')
                    return false
                }
            })
        },
        // 修改学生
        updateCourse () {
            this.$refs.editForm.validate(flag => {
                if (flag) {
                    this.editCourseDialogVisible = false
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败,请检查输入项')
                }
            })
        },
        // 编辑功能
        handleEdit (index, row) {
            console.log(row)
            this.editCourseDialogVisible = true
            this.editFormData = {
                courseId: row.courseId,
                courseProfession: row.courseProfession,
                courseName: row.courseName,
                courseTeacher: row.courseTeacher
            }
        },
        // 删除功能
        handleDelete (index, row) {
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                type: 'warning'
            }).then(() => {
                // 调用接口
                this.$message.success('删除成功')
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
            console.log(index, row)
        },
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange (size) {
            this.pagesize = size
            console.log(this.pagesize) // 每页下拉显示数据
        },
        handleCurrentChange (currentPage) {
            this.currentPage = currentPage
            console.log(this.currentPage) // 点击第几页
        }
    },
    components: {
        Paging
    }
}
</script>

<style scoped lang="less">
.add {
    margin-bottom: 10px;
}
.el-table {
    text-align: center;
}
</style>
