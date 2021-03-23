/* 学生查看课程成绩 */
<template>
    <div class="seeGrade">
        <div class="grade-form">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                border
                ><!--
                <el-table-column prop="classId" label="课程号" width="160">
                </el-table-column> -->
                <el-table-column prop="gradeName" label="课程名">
                </el-table-column>
                <el-table-column
                    prop="gradeTeacher"
                    label="授课老师"
                >
                </el-table-column>
                <el-table-column prop="grade" label="分数">
                </el-table-column>
                <el-table-column prop="gradeState" label="课程状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.gradeState === 1">不合格</span>
                        <span v-else>合格</span>
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
                    gradeState: 1
                },
                {
                    gradeName: '语文',
                    gradeTeacher: '王二',
                    grade: 78,
                    gradeState: 1

                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '里斯',
                    grade: 78,
                    gradeState: 0,
                    applyState: 1
                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '赵一',
                    grade: 97,
                    gradeState: 1
                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '张张',
                    grade: 60,
                    gradeState: 1
                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '张张',
                    grade: 78,
                    gradeState: 1
                },
                {
                    gradeName: '高等数学',
                    gradeTeacher: '张张',
                    grade: 78,
                    gradeState: 1
                }
            ]
        }
    },
    created () {
    },
    methods: {
    },
    components: {
    }
}
</script>

<style scoped lang="less">
.grade-form {
    margin-left: 0;
}
</style>
