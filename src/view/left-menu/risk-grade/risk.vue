<template>
  <div class="risk">
    <risksquery></risksquery>
    <div class="project-btn">
      <ul>
        <li v-for="(law,index) in riskbtn" :key="index">{{law}}</li>
      </ul>
    </div>
    <div class="project-form">
      <ul>
        <li class="pro-first">
          <p></p>
          <span>企业名称</span>
          <span>法人</span>
          <span>风险等级</span>
          <span>企业类型</span>
          <span>评定日期</span>
          <span>等级设置</span>
        </li>
        <li v-for="(item,index) in listrisk" :key="index">
          <p>
            <input type="checkbox">
          </p>
          <span>{{item.q}}</span>
          <span>{{item.f}}</span>
          <span>{{item.fx}}</span>
          <span>{{item.qy}}</span>
          <span>{{item.rq}}</span>
          <span>{{item.dj}}</span>
        </li>
      </ul>
    </div>
    <riskpage class="pro-page"></riskpage>
  </div>
</template>
<script>
import risksquery from "./component/risk-search/risk-search";
import riskpage from "@/components/page/page";
import "../grid-ment/index.less";
export default {
  name: "risk",
  data() {
    return {
      riskbtn: ["查看", "导出"],
      listrisk: [
        {
          q: "qqq公司",
          f: "小肉肉",
          fx: "高风险",
          qy: "食品生产",
          rq: "2018-11-01",
          dj: "设置"
        },
        {
          q: "qqq公司",
          f: "小肉肉",
          fx: "高风险",
          qy: "食品生产",
          rq: "2018-11-01",
          dj: "设置"
        },
        {
          q: "qqq公司",
          f: "小肉肉",
          fx: "高风险",
          qy: "食品生产",
          rq: "2018-11-01",
          dj: "设置"
        },
        {
          q: "qqq公司",
          f: "小肉肉",
          fx: "高风险",
          qy: "食品生产",
          rq: "2018-11-01",
          dj: "设置"
        }
      ]
    };
  },
  components: {
    risksquery,
    riskpage
  }
};
</script>
<style lang="less">
.risk {
  width: 100%;
  background-color: #ffffff;
  padding: 13px;
}
</style>


