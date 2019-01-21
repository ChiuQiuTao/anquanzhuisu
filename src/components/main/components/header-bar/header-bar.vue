<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
      <!-- 全屏 和 退出登录 -->
    </div>
  </div>
</template>
<script>
import siderTrigger from "./sider-trigger";
// 缩放左侧
import customBreadCrumb from "./custom-bread-crumb";
// 文字导航  首页 / 多级菜单 / 二级-2 / 三级
import "./header-bar.less";
export default {
  name: "HeaderBar",
  components: {
    siderTrigger,
    customBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList;
    }
  },
  methods: {
    handleCollpasedChange(state) {
      this.$emit("on-coll-change", state);
    }
  }
};
</script>
