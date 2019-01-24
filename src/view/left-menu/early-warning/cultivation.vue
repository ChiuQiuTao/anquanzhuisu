<template>
  <div class style="background-color:#fff">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="plant">
      <materialSearch></materialSearch>
      <div class="table">
        <i-table :columns="columns1" :data="data1"></i-table>
      </div>
      <page style="padding:22px 0"></page>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import page from "../../../components/page/page";
import bus from "@/api/bus.js";
import navwork from "../../../components/nav/nav";
import materialSearch from "./components/cul-search/cul-search";

export default {
  name: "cultivation",
  data() {
    return {
      navArray: ["养殖预警"],
      navIndex: 1,
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
    this.setmess(this.navArray);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    navwork,
    materialSearch,
    page
  }
};
</script>

<style>
.plant {
  padding: 0 17px;
  padding-top: 22px;
}
.table {
  padding-top: 20px;
}
</style>
