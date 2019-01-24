<template>
  <div class="law">
    <laws></laws>
    <div class="project-btn">
      <ul>
        <li v-for="(law,index) in lislaw" :key="index">{{law}}</li>
      </ul>
    </div>
    <div class="project-form">
      <ul>
        <li class="pro-first">
          <p></p>
          <span>企业名称</span>
          <span>风险等级</span>
          <span>企业类型</span>
          <span>待巡查次数</span>
          <span>已巡查次数</span>
          <span>执法人员</span>
        </li>
        <li v-for="(item,index) in lislawss" :key="index">
          <p>
            <input type="checkbox">
          </p>
          <span>{{item.m}}</span>
          <span>{{item.f}}</span>
          <span>{{item.l}}</span>
          <span>{{item.dx}}</span>
          <span>{{item.yx}}</span>
          <span>{{item.r}}</span>
        </li>
      </ul>
    </div>
    <pageslaw class="pro-page"></pageslaw>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import laws from "./component/riskLevel-search/riskLevel-search";
import "./index.less";
import pageslaw from "@/components/page/page";
export default {
  name: "law-infor",
  data() {
    return {
      navArrays: ["执法信息"],
      lislaw: ["查看", "导出"],
      lislawss: [
        {
          m: "xxx公司",
          f: "低风险",
          l: "食品生产",
          dx: "2次",
          yx: "3次",
          r: "小道"
        },
        {
          m: "xxx公司",
          f: "低风险",
          l: "食品生产",
          dx: "2次",
          yx: "3次",
          r: "小道"
        },
        {
          m: "xxx公司",
          f: "低风险",
          l: "食品生产",
          dx: "2次",
          yx: "3次",
          r: "小道"
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  activated() {
    this.setmess(this.navArrays);
  },
  components: {
    laws,
    pageslaw
  }
};
</script>
<style lang="less">
.law {
  width: 100%;
  background-color: #ffffff;
  padding: 13px;
}
</style>

