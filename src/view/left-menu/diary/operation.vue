
<template>
  <div style="background-color: #fff;">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="operation">
      <statisticsSearch></statisticsSearch>
      <div class="table">
        <i-table :columns="columns1" :data="data1"></i-table>
      </div>

      <page style="padding-bottom:22px"></page>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import page from "../../../components/page/page";
import bus from "@/api/bus.js";
import statisticsSearch from "./components/statistics-search/statistics-search";
import navwork from "../../../components/nav/nav";

export default {
  name: "operation",
  data() {
    return {
      navA: ["操作日志"],
      navIndex: 3,
      columns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address"
        }
      ],
      data1: [
        {
          name: "王小明",
          age: 18,
          address: "北京市朝阳区芍药居"
        },
        {
          name: "张小刚",
          age: 25,
          address: "北京市海淀区西二旗"
        },
        {
          name: "李小红",
          age: 30,
          address: "上海市浦东新区世纪大道"
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道"
        }
      ]
    };
  },
  activated() {
    this.setmess(this.navA);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    navwork,
    statisticsSearch,
    page
  }
};
</script>

<style>
.table {
  padding: 20px 0;
}
.operation {
  padding: 22px;
}
</style>
