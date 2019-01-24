<template>
  <div class="task">
    <checttask></checttask>
    <div class="project-btn">
      <ul>
        <li v-for="(it,index) in lisbtn" :key="index">{{it}}</li>
      </ul>
    </div>
    <div class="project-form">
      <ul>
        <li class="pro-first">
          <p></p>
          <span>网格名称</span>
          <span>企业名称</span>
          <span>巡检类别</span>
          <span>指定巡检时间</span>
          <span>巡检人员</span>
          <span>指派人员</span>
          <span>检查状态</span>
        </li>
        <li v-for="(item,index) in listask" :key="index">
          <p>
            <input type="checkbox">
          </p>
          <span>{{item.m}}</span>
          <span>{{item.q}}</span>
          <span>{{item.x}}</span>
          <span>{{item.z}}</span>
          <span>{{item.y}}</span>
          <span>{{item.zb}}</span>
          <span>{{item.zt}}</span>
          <!-- <span v-if="ok">{{item.zt}}</span> -->
        </li>
      </ul>
    </div>
    <pagetask class="pro-page"></pagetask>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import checttask from "./component/assign-search/assign-search";
import pagetask from "@/components/page/page";
import "./index.less";
export default {
  name: "task-ment",
  data() {
    return {
      navArrays: ["任务指派"],
      lisbtn: ["新增", "查看", "删除"],
      listask: [
        {
          m: "网格名称1",
          q: "企业名称1",
          x: "巡检类别1",
          z: "指定巡检时间1",
          y: "巡检人员1",
          zb: "指派人员1",
          zt: "待查询"
        },
        {
          m: "网格名称1",
          q: "企业名称1",
          x: "巡检类别1",
          z: "指定巡检时间1",
          y: "巡检人员1",
          zb: "指派人员1",
          zt: "待查询"
        },
        {
          m: "网格名称1",
          q: "企业名称1",
          x: "巡检类别1",
          z: "指定巡检时间1",
          y: "巡检人员1",
          zb: "指派人员1",
          zt: "已查询"
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
    checttask,
    pagetask
  }
};
</script>
<style lang="less">
.task {
  background-color: #ffffff;
  padding: 13px;
}
</style>
