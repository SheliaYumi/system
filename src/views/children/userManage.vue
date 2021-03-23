/* 用户管理 */
<template>
    <div class="addUser">
        <div class="add">
            <el-button type="primary" class="add_User" @click="addUser()"
                >添加用户</el-button
            >
        </div>
        <!-- 用户表 -->
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
            <el-table-column prop="number" label="帐号" >
            </el-table-column>
            <el-table-column prop="psd" label="密码" >
            </el-table-column>
            <el-table-column prop="type" label="身份" >
            </el-table-column>
            <el-table-column prop="name" label="姓名" >
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
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
        <!-- 添加用户表单弹窗 -->
        <div class="add_User_Dialog">
            <el-dialog
                title="添加用户信息"
                :visible.sync="addUserDialogVisible"
                @close="resetForm('addForm')"
            >
                <!--
            :model="formData": 关联数据
            :rules: 关联校验规则
            ref： 在获取表单对象时使用
        -->
                <el-form
                    :model="addUserFormData"
                    :rules="rules"
                    ref="addForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="帐号" prop="number">
                        <el-input
                            v-model="addUserFormData.number"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="psd">
                        <el-input
                            v-model="addUserFormData.psd"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="addUserFormData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="身份" prop="type">
                        <el-radio v-model="addUserFormData.type" label="老师"
                            >老师</el-radio
                        >
                        <el-radio v-model="addUserFormData.type" label="学生"
                            >学生</el-radio
                        >
                    </el-form-item>
                    <el-form-item align="right">
                        <el-button type="primary" @click="addU()"
                            >添加</el-button
                        >
                        <el-button @click="resetForm('addForm')"
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
export default {
    data () {
        return {
            addUserDialogVisible: false, // 添加用户弹窗
            addUserFormData: {}, // 添加表单的数据
            pagesize: 5, // 每页的数据条数
            currentPage: 1, // 默认开始页面
            tableData: [
                {
                    number: 111,
                    psd: '123456',
                    type: '老师',
                    name: '李四'
                },
                {
                    number: 112,
                    psd: '123456',
                    type: '老师',
                    name: '李四'
                },
                {
                    number: 113,
                    psd: '123456',
                    type: '学生',
                    name: '李四'
                },
                {
                    number: 114,
                    psd: '123456',
                    type: '老师',
                    name: '李四'
                },
                {
                    number: 115,
                    psd: '123456',
                    type: '学生',
                    name: '李四'
                },
                {
                    number: 116,
                    psd: '123456',
                    type: '学生',
                    name: '李四'
                },
                {
                    number: 117,
                    psd: '123456',
                    type: '老师',
                    name: '李四'
                }
            ],
            rules: {
                number: [
                    { required: true, message: '请输入帐号', trigger: 'blur' },
                    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                ],
                psd: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '请选择身份', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        // 添加用户
        addUser () {
            this.addUserDialogVisible = true
        },
        // 重置按钮
        resetForm (addForm) {
            // 双向绑定，输入的数据都赋值给了formData， 清空formData数据
            this.addUserFormData = {}
            // 清除表单的校验数据
            this.$refs[addForm].resetFields()
        },
        // 表单中的添加按钮
        addU () {
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    this.addUserDialogVisible = false
                    this.$message.success('添加成功')
                    // 添加成功后调用接口刷新表格
                } else {
                    this.$message.error('请检查输入项')
                    return false
                }
            })
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
    margin-right: 0;
}
</style>
