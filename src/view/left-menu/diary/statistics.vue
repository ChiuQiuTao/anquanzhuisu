
<template>
  <div style="background-color: #fff;">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="statistics">
      <statisticsSearch></statisticsSearch>
    </div>
    <div class="info">
      <div class="info-left">无数据</div>
      <div class="info-right">
        <div class="item">
          <div class="box1"></div>人才专家数据库管理系统
        </div>
        <div class="item">
          <div class="box2"></div>日志管理系统
        </div>
        <div class="item">
          <div class="box3"></div>用户权限管理系统
        </div>
        <div class="item">
          <div class="box4"></div>食品法律法规数据库系统
        </div>
        <div class="item">
          <div class="box5"></div>综合监管分析系统
        </div>
        <div class="item">
          <div class="box6"></div>养殖源头追溯系统
        </div>
        <div class="item">
          <div class="box7"></div>种植源头追溯系统
        </div>
        <div class="item">
          <div class="box8"></div>生产加工管理系统
        </div>
        <div class="item">
          <div class="box9"></div>农业投入品控制管理系统
        </div>
        <div class="item">
          <div class="box10"></div>食品安全标准数据库系统
        </div>
      </div>
    </div>

    <div class="section-echart">
      <Card shadow>
        <example style="height: 310px;"/>
      </Card>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import bus from "@/api/bus.js";
import statisticsSearch from "./components/statistics-search/statistics-search";
import navwork from "../../../components/nav/nav";
import example from "./example.vue";

export default {
  name: "statistics",
  data() {
    return {
      navArray: ["系统访问量统计"],
      navIndex: 2
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
    statisticsSearch,
    example
  }
};
</script>

<style>
.statistics {
  padding: 0 17px;
  padding-top: 22px;
}
.section-echart {
  padding: 28px;
  height: 372px;
}
.info {
  padding: 0 28px;
  display: flex;
  padding-top: 18px;
}
.info-right {
  display: flex;
  flex-wrap: wrap;
  padding-right: 50px;
}
.info-right .item {
  display: flex;
  align-items: center;
  color: #000;
  margin-right: 6px;
  margin-bottom: 5px;
}
.info-right .item > div {
  margin-right: 4px;
}
.info-left {
  width: 133px;

  font-size: 18px;
  color: #000;
}
.info .box1 {
  width: 20px;
  height: 12px;
  background-color: #ff7f50;
  border-radius: 4px;
}
.info .box2 {
  width: 20px;
  height: 12px;
  background-color: #87cefa;
  border-radius: 4px;
}
.info .box3 {
  width: 20px;
  height: 12px;
  background-color: #d867d3;
  border-radius: 4px;
}
.info .box4 {
  width: 20px;
  height: 12px;
  background-color: #25ca25;
  border-radius: 4px;
}
.info .box5 {
  width: 20px;
  height: 12px;
  background-color: #5a8eec;
  border-radius: 4px;
}
.info .box6 {
  width: 20px;
  height: 12px;
  background-color: #ff5fb0;
  border-radius: 4px;
}
.info .box7 {
  width: 20px;
  height: 12px;
  background-color: #ba55d2;
  border-radius: 4px;
}
.info .box8 {
  width: 20px;
  height: 12px;
  background-color: #ca5250;
  border-radius: 4px;
}
.info .box9 {
  width: 20px;
  height: 12px;
  background-color: #ff9f00;
  border-radius: 4px;
}
.info .box10 {
  width: 20px;
  height: 12px;
  background-color: #40dfd0;
  border-radius: 4px;
}
</style>
