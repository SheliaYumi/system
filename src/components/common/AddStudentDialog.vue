<template>
    <div class="add_Student_Dialog">
        <el-dialog
            title="添加学生信息"
            :visible.sync="addStudentDialogVisible"
            @close="resetForm('addForm')"
        >
            <!--
            :model="formData": 关联数据
            :rules: 关联校验规则
            ref： 在获取表单对象时使用
        -->
            <el-form
                :model="addStudentFormData"
                :rules="rules"
                ref="addForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="学生学号" prop="number">
                    <el-input v-model="addStudentFormData.number"></el-input>
                </el-form-item>
                <el-form-item label="学生姓名" prop="name">
                    <el-input v-model="addStudentFormData.name"></el-input>
                </el-form-item>
                <el-form-item label="学生性别" prop="sex">
                    <el-radio v-model="addStudentFormData.sex" label="1"
                        >男</el-radio
                    >
                    <el-radio v-model="addStudentFormData.sex" label="2"
                        >女</el-radio
                    >
                </el-form-item>
                <el-form-item label="学生生日" prop="birthday">
                    <!--v-model : 双向绑定 -->
                    <el-input
                        v-model="addStudentFormData.birthday"
                        type="date"
                    ></el-input>
                </el-form-item>
                <el-form-item label="所学专业" prop="profession">
                    <el-select
                        v-model="addStudentFormData.profession"
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
                <el-form-item label="所在班级" prop="classes">
                    <el-input v-model="addStudentFormData.classes"></el-input>
                </el-form-item>
                <el-form-item label="学生电话" prop="telephone">
                    <el-input v-model="addStudentFormData.telephone"></el-input>
                </el-form-item>
                <el-form-item label="学生地址" prop="address">
                    <el-input v-model="addStudentFormData.address"></el-input>
                </el-form-item>
                <el-form-item align="right">
                    <el-button type="primary" @click="addStu()">添加</el-button>
                    <el-button @click="resetForm('addForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AddStudentDialog',
    data () {
        return {
            addStudentDialogVisible: true,
            addStudentFormData: {},
            majorOptions: [{
                value: '软件工程',
                label: '软件工程'
            }, {
                value: '金融',
                label: '金融'
            }, {
                value: '计算机',
                label: '计算机'
            }, {
                value: '生物工程',
                label: '生物工程'
            }, {
                value: '会计',
                label: '会计'
            }],
            rules: {
                number: [
                    { required: true, message: '请输入学号', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                birthday: [
                    { required: true, message: '请选择日期', trigger: 'change' }
                ],
                profession: [
                    { required: true, message: '请选择专业', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                classes: [
                    { required: true, message: '请输入班级', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                telephone: [
                    { required: true, message: '请输入电话', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度为11个字符', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入地址', trigger: 'blur' },
                    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    components: {
    },
    methods: {
        // 重置按钮
        resetForm (addForm) {
            // 双向绑定，输入的数据都赋值给了formData， 清空formData数据
            this.addStudentFormData = {}
            // 清除表单的校验数据
            this.$refs[addForm].resetFields()
        },
        // 添加按钮
        addStu () {
            alert('成功')
        }
    }
}
</script>

<style scoped lang="less">
</style>
