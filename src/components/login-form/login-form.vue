<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <p class="loginnane">用户名:</p>
      <Input v-model="form.userName" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem prop="password">
      <p class="loginnane">密&nbsp;码:</p>
      <Input type="password" v-model="form.password" placeholder="请输入密码"></Input>
    </FormItem>
    <p class="login-exfor">
      <router-link :to="{name:''}" class="login-forget">忘记密码</router-link>
      <router-link :to="{name:''}" class="login-experts">专家注册</router-link>
    </p>
    <FormItem>
      <Button class="login-go" @click="handleSubmit" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      form: {
        userName: "super_admin",
        password: ""
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.form.userName,
            password: this.form.password
          });
        }
      });
    }
  }
};
</script>

<style lang="less">
.ivu-card-body {
  padding: 10px 25px 4px;
}
.loginnane {
  color: #f5a3a3;
  margin-left: 4px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
}
.ivu-card-head {
  display: none;
}
.ivu-form-item {
  margin-bottom: 15px;
}
.ivu-input {
  border-color: #e2a9a8;
}
.login-exfor {
  width: 100%;
  margin-bottom: 10px;
  height: 20px;
}
.login-experts,
.login-forget {
  color: #f23e3e;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  float: right;
  cursor: pointer;
}
.login-experts:hover,
.login-forget:hover {
  color: #f23e3e;
}
.login-forget {
  margin-left: 7px;
}
.login-go {
  background-color: #f23e3e;
  border: 0;
  color: #ffffff;
  letter-spacing: 6px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
  font-weight: 600;
}
.login-go:hover {
  background-color: #f23e3e;
  border: 0;
  color: #ffffff;
  letter-spacing: 6px;
  font-size: 15px;
  font-weight: 600;
}
</style>
