/* 学生报名重修页面1 */
<template>
    <div>
        <div class="grade-form">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                border
                style="width: 802px"
                ><!--
                <el-table-column prop="classId" label="课程号" width="160">
                </el-table-column> -->
                <el-table-column prop="gradeName" label="课程名" width="160">
                </el-table-column>
                <el-table-column
                    prop="gradeTeacher"
                    label="授课老师"
                    width="160"
                >
                </el-table-column>
                <el-table-column prop="grade" label="分数" width="160">
                </el-table-column>
                <el-table-column prop="gradeState" label="课程状态" width="160">
                    <template slot-scope="scope">
                        <span v-if="scope.row.gradeState === 1">不合格</span>
                        <span v-else>合格</span>
                    </template>
                </el-table-column>
                <el-table-column prop="apply" label="申请" width="160">
                    <template slot-scope="scope">
                        <el-popconfirm
                            title="确定申请该课程的重修吗？"
                            @confirm="apply(scope.$index, scope.row)"
                        >
                            <el-button
                                slot="reference"
                                v-if="scope.row.gradeState === 1"
                                :disabled="scope.row.applyState == 1"
                                >{{ scope.row.applytext }}</el-button
                            >
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: [
                {
                    gradeId: 1,
                    gradeName: '高等数学',
                    gradeTeacher: '张张',
                    grade: 78,
                    gradeState: 1,
                    applyState: 0// 1为申请了重修，0为没申请重修
                },
                {
                    gradeName: '语文',
                    gradeTeacher: '王二',
                    grade: 78,
                    gradeState: 1,
                    applyState: 0
                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '里斯',
                    grade: 78,
                    gradeState: 1,
                    applyState: 0
                }
            ]
        }
    },
    created () {
        this.tableData.forEach(item => {
            this.$set(item, 'applytext', '申请重修')
        })
    },
    methods: {
        // 传递ID查询成绩接口
        // 申请重修
        apply (index, row) {
            row.applyState = 1
            row.applytext = '等待重修'
            this.$message('申请成功！')
            // 调用申请重修接口
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
