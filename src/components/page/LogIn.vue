<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="register-panel">
      <van-field
        label="用户名"
        icon="clear"
        v-model="username"
        placeholder="请输入账户名"
        required
        @click-icon="username=''"
        :error-message="usernameErrMsg"
      > </van-field>
      <van-field
        label="密码"
        icon="clear"
        v-model="password"
        placeholder="请输入密码"
        required
        @click-icon="password=''"
        :error-message="passwordErrMsg"
      >
      </van-field>
      <div class="register-button">
        <van-button
          type="primary"
          :loading="openLoading"
          @click="axiosRegrster"
          size="large"
        >马上登录</van-button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import qs from "qs";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      openLoading: false,
      usernameErrMsg: "",
      passwordErrMsg: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    axiosRegrster() {
      if (!this.checkFrom()) {
        return;
      }

      this.openLoading = true;
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => {
          console.log(response);
          Toast.success("登录成功");

          this.openLoading = false;
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
          Toast.fail("登录失败");

          this.openLoading = false;
        });
    },
    checkFrom() {
      let falg = true;
      if (this.username.length < 4) {
        this.usernameErrMsg = "用户名不能小于4";
        falg = false;
      } else {
        this.usernameErrMsg = "";
      }

      if (this.password.length < 4) {
        this.passwordErrMsg = "密码不能小于4";
        falg = false;
      } else {
        this.passwordErrMsg = "";
      }
      return falg;
    }
  }
};
</script>

<style  scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 80px;
}
.register-button {
  padding-top: 10px;
}
</style>