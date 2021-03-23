/* 页码分页组件 */
<template>
    <div class="paging">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                background
            >
            </el-pagination></div>
</template>

<script>
export default {
    name: 'Paging',
    props: {
        total: Number,
        pagesize: Number,
        currentPage: Number
    },
    data () {
        return {
        }
    },
    methods: {
        handleSizeChange (val) {
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange (val) {
            this.$emit('handleCurrentChange', val)
        }
    },
    components: {
    }
}
</script>

<style scoped lang="less">
.el-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
