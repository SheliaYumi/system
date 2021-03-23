/* 学生信息表 */
<template>
    <div class="studentManage">
        <div>
            <!-- <el-button type="primary" class="add_Student" @click="addStudent()"
                >添加学生</el-button
            > -->
            <!-- <el-button type="primary" @click="toggleSelection(tableData)"
                >反选</el-button
            >
            <el-button type="primary" @click="toggleSelection()"
                >清空选择</el-button
            > -->
        </div>
        <!-- 学生表 -->
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
            <el-table-column prop="number" label="学号" >
            </el-table-column>
            <el-table-column prop="name" label="姓名" >
            </el-table-column>
            <el-table-column prop="sex" label="性别" >
            </el-table-column>
            <el-table-column prop="birthday" label="生日" >
            </el-table-column>
            <el-table-column prop="profession" label="专业" >
            </el-table-column>
            <el-table-column prop="classes" label="班级" >
            </el-table-column>
            <el-table-column prop="telephone" label="电话" >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip
            >
            </el-table-column>
            <!-- <el-table-column label="操作">
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
            </el-table-column> -->
        </el-table>
        <!-- 分页器 -->
        <paging
            :total="total"
            :pagesize="pagesize"
            :currentPage="currentPage"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        />
        <!-- 编辑学生信息表单弹窗 -->
        <!-- <el-dialog
            title="编辑学生信息"
            :visible.sync="editStudentDialogVisible"
            @close="resetForm('editForm')"
        >
            <el-form
                :model="editFormData"
                :rules="rules"
                ref="editForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="学生学号" prop="number">
                    <el-input v-model="editFormData.number" disabled></el-input>
                </el-form-item>
                <el-form-item label="学生姓名" prop="sex">
                    <el-input v-model="editFormData.name"></el-input>
                </el-form-item>
                <el-form-item label="学生性别" prop="sex">
                    <el-radio v-model="editFormData.sex" label="男"
                        >男</el-radio
                    >
                    <el-radio v-model="editFormData.sex" label="女"
                        >女</el-radio
                    >
                </el-form-item>
                <el-form-item label="学生生日" prop="birthday">
                    <el-input
                        v-model="editFormData.birthday"
                        type="date"
                    ></el-input>
                </el-form-item>
                <el-form-item label="所学专业" prop="profession">
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
                <el-form-item label="所在班级" prop="classes">
                    <el-input v-model="editFormData.classes"></el-input>
                </el-form-item>
                <el-form-item label="学生电话" prop="telephone">
                    <el-input v-model="editFormData.telephone"></el-input>
                </el-form-item>
                <el-form-item label="学生地址" prop="address">
                    <el-input v-model="editFormData.address"></el-input>
                </el-form-item>

                <el-form-item align="right">
                    <el-button type="warning" @click="updateStu()"
                        >修改</el-button
                    >
                </el-form-item>
            </el-form>
        </el-dialog> -->
        <!-- 添加学生表单弹窗 -->
        <!-- <div class="add_Student_Dialog">
            <el-dialog
                title="添加学生信息"
                :visible.sync="addStudentDialogVisible"
                @close="resetForm('addForm')"
            >
                <el-form
                    :model="addStudentFormData"
                    :rules="rules"
                    ref="addForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="学生学号" prop="number">
                        <el-input
                            v-model="addStudentFormData.number"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="学生姓名" prop="name">
                        <el-input v-model="addStudentFormData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学生性别" prop="sex">
                        <el-radio v-model="addStudentFormData.sex" label="男"
                            >男</el-radio
                        >
                        <el-radio v-model="addStudentFormData.sex" label="女"
                            >女</el-radio
                        >
                    </el-form-item>
                    <el-form-item label="学生生日" prop="birthday">
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
                        <el-input
                            v-model="addStudentFormData.classes"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="学生电话" prop="telephone">
                        <el-input
                            v-model="addStudentFormData.telephone"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="学生地址" prop="address">
                        <el-input
                            v-model="addStudentFormData.address"
                        ></el-input>
                    </el-form-item>
                    <el-form-item align="right">
                        <el-button type="primary" @click="addStu()"
                            >添加</el-button
                        >
                        <el-button @click="resetForm('addForm')"
                            >重置</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div> -->
    </div>
</template>

<script>
/* import AddStudentDialog from '../../components/common/AddStudentDialog'
 */import Paging from '../../components/common/Paging'
export default {
    created: function () {
        this.total = this.tableData.length
    },
    data () {
        return {
            addStudentDialogVisible: false, // 添加学生弹窗
            editStudentDialogVisible: false, // 编辑学生信息弹窗
            addStudentFormData: {}, // 添加表单的数据
            editFormData: {}, // 编辑表单的数据
            total: 7, // 默认数据总数
            pagesize: 5, // 每页的数据条数
            currentPage: 1, // 默认开始页面
            tableData: [
                {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '001',
                    name: '王小',
                    sex: '女',
                    birthday: '1998/12/30',
                    profession: '软件工程',
                    classes: '173',
                    telephone: '18857329901',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
            /* multipleSelection: [], */
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
                    { required: true, message: '请选择性别', trigger: 'blur' }
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
                    { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入地址', trigger: 'blur' },
                    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 添加学生
        addStudent () {
            this.addStudentDialogVisible = true
        },
        // 重置按钮
        resetForm (addForm) {
            // 双向绑定，输入的数据都赋值给了formData， 清空formData数据
            this.addStudentFormData = {}
            // 清除表单的校验数据
            this.$refs[addForm].resetFields()
        },
        // 表单中的添加按钮
        addStu () {
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    this.addStudentDialogVisible = true
                    this.$message.success('添加成功')
                    // 添加成功后调用接口刷新表格
                } else {
                    this.$message.error('请检查输入项')
                    return false
                }
            })
        },
        // 修改学生
        updateStu () {
            this.$refs.editForm.validate(flag => {
                if (flag) {
                    this.editStudentDialogVisible = false
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败,请检查输入项')
                }
            })
        },
        // 反选功能
        /* toggleSelection (rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.multipleTable.clearSelection()
            }
        }, */
        // 清空所有选项功能
        /* handleSelectionChange (val) {
            this.multipleSelection = val
        }, */
        // 编辑功能
        handleEdit (index, row) {
            console.log(row)
            this.editStudentDialogVisible = true
            this.editFormData = {
                number: row.number,
                name: row.name,
                sex: row.sex,
                birthday: row.birthday,
                profession: row.profession,
                classes: row.classes,
                telephone: row.telephone,
                address: row.address

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
        /* AddStudentDialog */
    }
}
</script>

<style scoped lang="less">
.add_Student {
    margin-bottom: 10px;
}
.el-table {
    text-align: center;
}
</style>
