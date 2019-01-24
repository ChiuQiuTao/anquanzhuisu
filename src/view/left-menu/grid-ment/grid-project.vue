<template>
  <div class="project">
    <checks></checks>
    <div class="project-btn">
      <ul>
        <li @click="btns" v-for="(meg,index) in liss" :key="index">{{meg}}</li>
      </ul>
    </div>
    <div class="project-form">
      <ul>
        <li class="pro-first">
          <p></p>
          <span>网格名称</span>
          <span>地区</span>
          <span>负责人</span>
        </li>
        <li v-for="(tem,index) in lists" :key="index">
          <p>
            <input type="checkbox">
          </p>
          <span>{{tem.m}}</span>
          <span>{{tem.region}}</span>
          <span>{{tem.head}}</span>
        </li>
      </ul>
    </div>
    <pages class="pro-page"></pages>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import checks from "./component/grid-search/grid-search";
import pages from "@/components/page/page";
import "./index.less";
export default {
  name: "grid-project",
  data() {
    return {
      navArrays: ["网络规划"],
      liss: ["新增", "修改", "删除", "查看", "负责人", "网络效果"],
      lists: [
        {
          m: "网格名称1",
          region: "地区1",
          head: "负责人1"
        },
        {
          m: "网格名称2",
          region: "地区2",
          head: "负责人2"
        },
        {
          m: "网格名称3",
          region: "地区3",
          head: "负责人3"
        }
      ]
    };
  },
  components: {
    checks,
    pages
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  activated() {
    this.setmess(this.navArrays);
  },
  deactivated() {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="less">
.project {
  width: 100%;
  background-color: #fff;
  padding: 13px;
}
</style>

