<template>
  <div class="meizhao">
    <div class="meizhao-zhibaio">
      <div class="zhibiao-l">
        <div class="zhibiao-l-f">
          <label>指标解释</label>
          <div class="zhi-shu">|</div>
          <label>地域</label>
          <Select size="small" v-model="model1" style="width:100px" placeholder="中新食品区">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="zhibiao-r">
        <div class="zhibiao-l-f">
          <label>日期</label>
          <Col span="8" class="zhi-rl">
            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
          </Col>
          <Icon type="ios-calendar" size="18"/>
        </div>
      </div>
    </div>

    <div class="fx-zhibiao">
      <fxs></fxs>
      <div style="height:200px;width:100%;margin:0 0 0 10px;">
        <div class="fxzhibiaohome">
          <p>
            指标趋势图(
            <label>平台业务发展用户数</label>)
          </p>
          <img :src="biao" alt>
        </div>
        <example style="height:100%;width:100%;"></example>
      </div>
    </div>

    <fazhang></fazhang>
  </div>
</template>

<script>
import biao from "@/assets/images/nav_icon05.png";
import { mapMutations } from "vuex";
import InforCard from "_c/info-card";
import CountTo from "_c/count-to";
import { ChartPie, ChartBar } from "_c/charts";
import Example from "./example.vue";
import fxs from "../component/qiyefx";
import fazhang from "../component/zhibiao";

export default {
  name: "home",
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example,
    fxs,
    fazhang
  },
  data() {
    return {
      biao: biao,
      inforCardData: [
        {
          title: "新增用户",
          icon: "md-person-add",
          count: 803,
          color: "#2d8cf0"
        },
        { title: "累计点击", icon: "md-locate", count: 232, color: "#19be6b" },
        {
          title: "新增问答",
          icon: "md-help-circle",
          count: 142,
          color: "#ff9900"
        },
        { title: "分享统计", icon: "md-share", count: 657, color: "#ed3f14" },
        {
          title: "新增互动",
          icon: "md-chatbubbles",
          count: 12,
          color: "#E46CBB"
        },
        { title: "新增页面", icon: "md-map", count: 14, color: "#9A66E4" }
      ],
      pieData: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      },
      navtop: ["工作台", "月关键指标", "用户质量", "业绩合同", "专项活动"],
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        }
      ],
      model1: ""
    };
  },
  mounted() {
    this.setmess(this.navtop);
  },
  methods: {
    ...mapMutations(["setmess"])
  }
};
</script>

<style lang="less">
.displa {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  font-weight: 500;
}
.meizhao {
  background-color: #ffffff;
  .meizhao-zhibaio {
    height: 55px;
    width: 96%;
    margin: 0 auto 10px;
    padding: 15px 0;
    border-bottom: 1px solid #f2f2f2;
    .zhibiao-l {
      float: left;
      .zhibiao-l-f {
        .displa;
        .zhi-shu {
          margin-right: 10px;
        }
        label {
          margin-right: 10px;
        }
      }
    }
    .zhibiao-r {
      float: right;
      .zhibiao-l-f {
        .displa;
        .zhi-rl {
          margin: 0 10px;
        }
      }
    }
  }
  .fx-zhibiao {
    width: 100%;
    padding: 10px;
    display: flex;
    .fxzhibiaohome {
      margin-bottom: 10px;
      background-image: url("../../../assets/images/nav_icon04.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-color: #c40002;
      height: 40px;
      p {
        float: left;
        color: #ffffff;
        margin: 11px 0 0 50px;
        label {
          color: #ecbf00;
        }
      }
      img {
        float: right;
        margin: 11px 20px 0 0;
      }
    }
  }
}
.count-style {
  font-size: 50px;
}
</style>
