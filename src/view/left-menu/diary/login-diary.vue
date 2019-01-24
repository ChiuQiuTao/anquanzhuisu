<template>
  <div class="login-diary">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="login-diary-header">
      <companyLogin></companyLogin>
    </div>

    <div class="echart">
      <div class="echart-header">
        <div class="echaryt-header-left">企业登录统计</div>
        <div class="echaryt-header-center">
          <div class="box"></div>次数
        </div>
        <div class="echaryt-header-right"></div>
      </div>

      <div class="echart">
        <Card shadow>
          <example style="height: 310px;"/>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import bus from "@/api/bus.js";
import navwork from "../../../components/nav/nav";
import companyLogin from "./components/traffic-search/traffic-search";
import Example from "./example.vue";

export default {
  name: "login-diary",
  data() {
    return {
      navArray: ["企业登录日志"],
      navIndex: 0
    };
  },
  activated() {
    this.setmess(this.navArray);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    navwork,
    companyLogin,
    Example
  }
};
</script>

<style>
.login-diary {
  background-color: #fff;
  padding-bottom: 60px;
}
.login-diary-header {
  padding: 0 17px;
  padding-top: 22px;
}
.echart {
  padding: 0 17px;
}
.echart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 15px;
}
.echaryt-header-left {
  font-size: 16px;
  color: #000;
  width: 30%;
}
.echaryt-header-center {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  width: 30%;
}
.echaryt-header-center .box {
  width: 20px;
  height: 12px;
  border-radius: 2px;
  background-color: #ff7f50;
  margin-right: 5px;
}
.echaryt-header-right {
  width: 30%;
}
</style>
