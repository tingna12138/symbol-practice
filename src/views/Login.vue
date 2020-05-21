<template>
  <div class="login-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <strong>用户登录界面</strong>
      </div>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="submit-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        </el-form-item>
      </el-form> 
    </el-card>
  </div>  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions('login',[
      'userLogin'
    ]),
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.userLogin(this.form).then(res => {
            const { code, mes, payload } = res
            if (code === 200 && mes === '登录成功') {
              document.cookie = `userId=${payload.userId}`
              this.$router.push({ path:'/mainLayout'})
            } else {
              this.$message({
                message: mes,
                type: 'warning'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
/* .submit-form {
  margin: 200px auto;
  width:300px;
} */

.login-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: url('../assets/images/20128314114848605.jpg') no-repeat fixed center;
  background-size: cover;
}

.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: 150px auto;
    width: 480px;
  }
</style>