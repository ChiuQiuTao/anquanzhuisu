<template>
  <div style="background-color: #fff;">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="abnormal">
      <search></search>
      <div class="content">
        <div class="btns">
          <div class="item">查看</div>
          <div class="item">删除</div>
          <div class="item">删除全部</div>
        </div>

        <div class="table">
          <i-table :columns="columns1" :data="data1"></i-table>
        </div>
      </div>
    </div>
    <page style="padding-bottom:22px"></page>
  </div>
</template>
<script>
import bus from "@/api/bus.js";
import { mapMutations } from "vuex";
import navwork from "../../../components/nav/nav";
import page from "../../../components/page/page";

import search from "./components/error-search/error-search";
export default {
  name: "abnormal",
  data() {
    return {
      search,
      navtop: ["异常日志管理"],
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
    this.setmess(this.navtop);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    navwork,
    search,
    page
  }
};
</script>

<style>
.abnormal {
  padding: 0 17px;
  padding-top: 22px;
  padding-bottom: 22px;

  background-color: #fff;
}
.abnormal .btns {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.abnormal .btns .item {
  padding: 0 16px;
  height: 23px;
  background-color: #ff0000;
  border-radius: 11px;
  line-height: 23px;
  font-size: 12px;
  color: #f9f6f6;
  margin-left: 30px;
}
</style>
