/* 学生报名重修页面 */
<template>
    <div class="rebuild">
        <div class="apply-form">
            <el-form
                :model="applyFormData"
                ref="editForm"
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="学号" prop="studentNumber">
                    <el-input
                        v-model.number="applyFormData.studentNumber"
                        onkeydown= "if(!/^\d{0,30}$/.test(this.value)){this.value=this.value.replace(/[^0-9]/g, '');}"
                    ></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="studentName">
                    <el-input
                        v-model.number="applyFormData.studentName"
                    ></el-input>
                </el-form-item>
                <el-form-item label="专业" prop="profession">
                    <el-select
                        v-model="applyFormData.profession"
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
                    <el-input v-model="applyFormData.classes"></el-input>
                </el-form-item>
                <el-form-item label="课程" prop="course">
                    <el-input v-model="applyFormData.course"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-popconfirm title="请核对信息，确认是否提交申请" @confirm="submitApply()">
                        <el-button slot="reference">提交申请</el-button>
                    </el-popconfirm>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
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
            applyFormData: {},
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
        submitApply () {
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    // 调用接口传递表单内数据得到返回布尔值判断是否成功
                    this.$message.success('申请成功')
                } else {
                    this.$message.error('申请失败,请检查输入项')
                }
            })
        }
    },
    components: {
    }
}
</script>

<style scoped lang="less">
.grade-form {
    margin-top: 20px;
    margin-left: 150px;
}
</style>
