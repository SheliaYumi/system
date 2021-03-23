/* 教师课程成绩管理 */
<template>
    <div class="gradeManage">
        <div class="gradeForm">
            <el-table
                ref="multipleTable"
                :data="
                    tableData.slice(
                        (currentPage - 1) * pagesize,
                        currentPage * pagesize
                    )
                "
                tooltip-effect="dark"
                ><!--
                <el-table-column prop="classId" label="课程号" >
                </el-table-column> -->
                <el-table-column prop="gradeName" label="课程名"  />
                <el-table-column
                    prop="gradeStudentName"
                    label="学生"
                />
                <el-table-column
                    prop="gradeProfession"
                    label="专业"
                >
                    <template slot-scope="scope">
                        <span v-if="scope.row.gradeProfession === 0"
                            >软件工程</span
                        >
                        <span v-if="scope.row.gradeProfession === 1">会计</span>
                        <span v-if="scope.row.gradeProfession === 2"
                            >生物工程</span
                        >
                        <span v-if="scope.row.gradeProfession === 3">英语</span>
                    </template>
                </el-table-column>
                <el-table-column prop="grade" label="分数"  />
                <!-- <el-table-column prop="gradeState" label="课程状态" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.gradeState === 1">不合格</span>
                        <span v-else>合格</span>
                    </template>
                </el-table-column> -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="danger"
                            @click="gradeEdit(scope.$index, scope.row)"
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
        <!-- 编辑成绩表单弹窗 -->
        <div class="grade_Edit_Dialog">
            <el-dialog
                title="修改成绩"
                :visible.sync="gradeEditDialogVisible"
                @close="resetForm('gradeEditFormData')"
            >
                <el-form
                    :model="gradeEditFormData"
                    :rules="rules"
                    ref="gradeEditFormData"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="课程名" prop="gradeName">
                        <el-input
                            v-model="gradeEditFormData.gradeName"
                            disabled
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="学生" prop="gradeStudentName">
                        <el-input
                            v-model="gradeEditFormData.gradeStudentName"
                            disabled
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="专业" prop="gradeProfession">
                        <el-select
                            v-model="gradeEditFormData.gradeProfession"
                            placeholder="请选择专业"
                            disabled
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
                    <el-form-item label="成绩" prop="grade">
                        <el-input
                            v-model.number="gradeEditFormData.grade"
                            onkeydown="if(!/^\d{0,30}$/.test(this.value)){this.value=this.value.replace(/[^0-9]/g, '');}"
                        ></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="课程状态" prop="gradeState">
                        <el-radio
                            v-model="gradeEditFormData.gradeState"
                            :label="0"
                            >合格</el-radio
                        >
                        <el-radio
                            v-model="gradeEditFormData.gradeState"
                            :label="1"
                            >不合格</el-radio
                        >
                    </el-form-item> -->
                    <el-form-item align="right">
                        <el-button type="primary" @click="EditConfirm()"
                            >确定</el-button
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
            pagesize: 5, // 每页的数据条数
            currentPage: 1, // 默认开始页面
            gradeEditDialogVisible: false, // 编辑分数弹窗
            gradeEditFormData: {}, // 编辑表单的数据
            tableData: [
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 0
                },
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 1
                },
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 0
                },
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 0
                },
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 0
                },
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeStudentName: '张张',
                    gradeProfession: 1,
                    grade: 78,
                    gradeState: 0
                }
            ],
            rules: {
                grade: [
                    { required: true, message: '请输入成绩', trigger: 'blur' }
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
    methods: {
        // 编辑按钮
        gradeEdit (index, row) {
            this.gradeEditDialogVisible = true
            this.gradeEditFormData = {
                gradeName: row.gradeName,
                gradeStudentName: row.gradeStudentName,
                gradeProfession: row.gradeProfession,
                grade: row.grade,
                gradeState: row.gradeState
            }
        },
        // 确定按钮
        EditConfirm () {
            this.$refs.gradeEditFormData.validate(flag => {
                if (flag) {
                    // 调用接口
                    this.gradeEditDialogVisible = false
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败,请检查输入项')
                }
            })
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
.gradeForm {
    margin-right: 0px;
}
</style>
