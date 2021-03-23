/* 重写element-ui表单校验规则 */
// 手机号验证
export function isvalidPhone (str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}
// 学号验证
export function isvalidStudentNumber (n) {
    const str = n + ''
    const arr = []
    str.split('').forEach(function (item) { // 调用split，以空字符串为分隔符切割字符串并返回数组，在数组上调用forEach方法
        arr.push(parseInt(item)) // 对传入的每个字符用pasreInt转换为数字并压入arr数组
    })
    return (arr.length === 10)
}
