/* 学生个人中心 */
<template>
    <div class="studentsInfo">
        <el-form
            :model="editFormData"
            :rules="rules"
            ref="editForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item label="学号" prop="studentNumber">
                <el-input
                    v-model="editFormData.studentNumber"
                    disabled
                ></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="studentName">
                <el-input v-model.number="editFormData.studentName"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio v-model="editFormData.sex" :label= 0>男</el-radio>
                <el-radio v-model="editFormData.sex" :label= 1>女</el-radio>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="editFormData.age"></el-input>
            </el-form-item>
            <el-form-item label="专业" prop="profession">
                <el-select
                    v-model="editFormData.profession"
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
                <el-input v-model="editFormData.classes"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="telephone">
                <el-input v-model.number="editFormData.telephone"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="editFormData.address"></el-input>
            </el-form-item>
        </el-form>
        <div class="button-edit"><el-button @click="updateStu()">确定修改</el-button></div>
    </div>
</template>

<script>
import { isvalidPhone } from '../../assets/js/validate'
// 定义一个全局的变量，谁用谁知道
const validPhone = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入电话号码'))
    } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
    } else {
        callback()
    }
}
export default {
    data () {
        return {
            FormData: {
                studentNumber: 123,
                studentName: '李四',
                sex: 0,
                age: 22,
                profession: 2,
                classes: '173',
                telephone: 18397855140,
                address: '浙江省绍兴市上虞区'
            },
            editFormData: {},
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
            }],
            rules: { /*
                studentNumber: [
                    { required: true, message: '请输入学号', trigger: 'change' },
                    { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'change' }
                ], */
                studentName: [
                    { required: true, message: '请输入姓名', trigger: 'change' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                age: [
                    { required: true, message: '请填写年龄', trigger: 'change' }
                ],
                profession: [
                    { required: true, message: '请选择专业', trigger: 'change' }
                ],
                classes: [
                    { required: true, message: '请输入班级', trigger: 'change' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change' }
                ],
                telephone: [
                    { required: true, trigger: 'change', validator: validPhone }// 这里需要用到全局变量
                ],
                address: [
                    { required: true, message: '请输入地址', trigger: 'change' },
                    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'change' }
                ]
            }
        }
    },
    created () {
        // 调用接口
        this.query()
    },
    methods: {
        // 学生个人信息回显，写在接口中
        query () {
            this.editFormData = this.FormData
        },
        // 编辑学生信息
        updateStu () {
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败,请检查输入项')
                }
            })
        }
        // 查看信息接口
        // 编辑信息接口
    },
    components: {
    }
}
</script>

<style scoped lang="less">
.el-form {
    margin-top: 20px;
    margin-left: 200px;
    width: 400px;
}
.button-edit {
    display: flex;
    justify-content: center;
}
</style>
