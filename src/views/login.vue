<template>
    <div class="login">
        <el-form ref="loginForm" :model="loginForm" class="login-form">
            <h3 class="title">重修在线申报系统</h3>
            <el-form-item prop="user_judge">
                <el-select
                    v-model.number="loginForm.user_judge"
                    placeholder="请选择登录身份"
                >
                    <el-option
                        v-for="item in judge"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input
                    v-model="loginForm.user_number"
                    placeholder="用户名"
                    clearable
                    class="userName"
                    ><i
                        slot="prefix"
                        icon-class="user"
                        class="el-icon-user-solid"
                /></el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    type="password"
                    v-model="loginForm.user_password"
                    placeholder="密码"
                    clearable
                    class="passWord"
                    ><i slot="prefix" icon-class="password" class="el-icon-key"
                /></el-input>
            </el-form-item>
            <el-form-item prop="validate">
                <el-input
                    v-model="validate"
                    class="validate-code"
                    placeholder="验证码"
                    clearable=""
                    ><i
                        slot="prefix"
                        icon-class="validCode"
                        class="el-icon-lock"
                /></el-input>
                <div class="code" @click="refreshCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import SIdentify from '../components/common/Identify'
export default {
    name: 'login',
    data () {
        return {
            identifyCodes: '1234567890',
            identifyCode: '',
            validate: '',
            loginForm: {
                user_judge: '',
                user_number: '',
                user_password: ''
            },
            judge: [
                {
                    value: 0,
                    label: '学生'
                }, {
                    value: 1,
                    label: '老师'
                }, {
                    value: 3,
                    label: '管理员'
                }
            ]
        }
    },
    mounted () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
    },
    methods: {
        // 登录接口
        // 登录按钮
        login () {
            console.log(this.loginForm.validate)
            if (this.validate === this.identifyCode) {
                // 验证码正确后调用登录接口传递表单的参数
                this.$message.success('登陆成功')
                this.$router.push('/home')
            } else {
                this.$message.error('验证码输入错误请重新输入！')
                this.refreshCode()
            }
        },
        // 随机验证码
        randomNum (min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        refreshCode () {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
        makeCode (o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ]
            }
            console.log(this.identifyCode)
        }
    },
    components: {
        SIdentify
    }
}
</script>

<style scoped lang="less">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("../assets/images/login-background.jpg");
    background-size: cover;
}
.title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
    font-size: 14px;
}
.code,
.s-canvas {
    position: absolute;
    right: 0px;
    top: 38px;
    height: 100px;
}
</style>
