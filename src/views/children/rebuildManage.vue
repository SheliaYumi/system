/* 教师重修报名表查询 */
<template>
    <div class="rebuidManage">
        <div class="applyForm">
            <el-table
                ref="multipleTable"
                :data="
                    tableData.slice(
                        (currentPage - 1) * pagesize,
                        currentPage * pagesize
                    )
                "
                tooltip-effect="dark"
                >
                <el-table-column prop="studentNumber" label="学号"  />
                <el-table-column prop="studentName" label="学生姓名"
                />
                <el-table-column prop="profession" label="专业" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.profession === 0"
                            >软件工程</span
                        >
                        <span v-if="scope.row.profession === 1">会计</span>
                        <span v-if="scope.row.profession === 2"
                            >生物工程</span
                        >
                        <span v-if="scope.row.profession === 3">英语</span>
                    </template>
                </el-table-column>
                <el-table-column prop="classes" label="班级"  />
                <el-table-column prop="course" label="课程"  />
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="applyEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
            </el-table>
        </div>
        <!-- 分页器 -->
        <paging
            :total="tableData.length"
            :pagesize="pagesize"
            :currentPage="currentPage"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        />
        <!-- 编辑重修表单弹窗 -->
        <div class="apply_Edit_Dialog">
            <el-dialog
                title="修改信息"
                :visible.sync="applyEditDialogVisible"
                @close="resetForm('applyEditFormData')"
            >
            <el-form
                    :model="applyEditFormData"
                    :rules="rules"
                    ref="applyEditFormData"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="学号" prop="studentNumber">
                        <el-input
                            v-model.number="applyEditFormData.studentNumber"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="学生姓名" prop="studentName">
                        <el-input
                            v-model="applyEditFormData.studentName"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="专业" prop="profession">
                        <el-select
                        v-model="applyEditFormData.profession"
                        placeholder="请选择专业"
                    >
                        <el-option
                            v-for="item in majorOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item label="班级" prop="classes">
                        <el-input v-model="applyEditFormData.classes"></el-input>
                    </el-form-item>
                    <el-form-item label="课程" prop="course">
                        <el-input v-model="applyEditFormData.course"></el-input>
                    </el-form-item>
                    <el-form-item align="right">
                        <el-button type="primary" @click="EditConfirm()"
                            >确定</el-button
                        >
                        <el-button @click="resetForm('applyEditFormData')"
                            >重置</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import Paging from '../../components/common/Paging'
import { isvalidStudentNumber } from '../../assets/js/validate'
// 定义一个全局的变量，谁用谁知道
const validStudentNumber = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入学号'))
    } else if (!isvalidStudentNumber(value)) {
        callback(new Error('请输入正确的10位学号'))
    } else {
        callback()
    }
}
export default {
    data () {
        return {
            pagesize: 5, // 每页的数据条数
            currentPage: 1, // 默认开始页面
            applyEditDialogVisible: false, // 编辑重修信息弹窗
            applyEditFormData: {}, // 编辑重修信息表单的数据
            tableData: [
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                },
                {
                    studentNumber: 1234567890,
                    studentName: '李四',
                    profession: 0,
                    classes: '173',
                    course: '高等数学'
                }
            ],
            rules: {
                studentNumber: [
                    { required: true, trigger: 'change', validator: validStudentNumber }
                ],
                studentName: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                profession: [
                    { required: true, message: '请选择专业', trigger: 'change' }
                ],
                classes: [
                    { required: true, message: '请输入班级', trigger: 'blur' }
                ],
                course: [
                    { required: true, message: '请输入课程', trigger: 'blur' }
                ]
            },
            majorOptions: [{
                value: 0,
                label: '软件工程'
            }, {
                value: 3,
                label: '英语'
            }, {
                value: 2,
                label: '生物工程'
            }, {
                value: 1,
                label: '会计'
            }]
        }
    },
    created () {
    },
    methods: {
        // 点击编辑按钮
        applyEdit (index, row) {
            this.applyEditDialogVisible = true
            this.applyEditFormData = {
                studentNumber: row.studentNumber,
                studentName: row.studentName,
                profession: row.profession,
                classes: row.classes,
                course: row.course
            }
        },
        // 确定按钮
        EditConfirm () {
            this.$refs.applyEditFormData.validate(flag => {
                if (flag) {
                    // 调用接口
                    this.applyEditDialogVisible = false
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败,请检查输入项')
                }
            })
        },
        // 重置按钮
        resetForm (applyEditFormData) {
            // 双向绑定，输入的数据都赋值给了formData， 清空formData数据
            this.applyEditFormData = {}
            // 清除表单的校验数据
            this.$refs[applyEditFormData].resetFields()
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
.applyForm {
    margin-right: 0;
}
</style>
