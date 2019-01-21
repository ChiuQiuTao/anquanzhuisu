<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-the">
      <img src="../../assets/images/long-inthe.png">
    </div>
    <div class="login-con">
      <Card icon="log-in" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
    <p class="login-p">
      Copyright Reserved
      <label>2017-2018</label> © 吉林(中国——新加坡)食品区 食品药品监督管理局 | 吉ICP备13023223号
    </p>
  </div>
</template>

<script>
import LoginForm from "_c/login-form";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          });
        });
      });
    }
  }
};
</script>

<style>
</style>
