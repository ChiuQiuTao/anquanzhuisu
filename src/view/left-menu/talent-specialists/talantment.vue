<template>
  <div class="talant">
    <talants></talants>
    <div class="dates">
      <!-- <thead>fdsf</thead> -->
      <table border="0">
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>专家类别</th>
          <th>专家领域</th>
          <th>联系电话</th>
          <th>指派状态</th>
          <th>录入时间</th>
          <th>录入人</th>
          <th>更多</th>
        </tr>
        <tr v-for="(item,index) in talantlist" :key="index">
          <td>{{item.b}}</td>
          <td>{{item.x}}</td>
          <td>{{item.l}}</td>
          <td>{{item.ly}}</td>
          <td>{{item.dh}}</td>
          <td>{{item.z}}</td>
          <td>{{item.time}}</td>
          <td>{{item.y}}</td>
          <td>
            <button>详情</button>
          </td>
        </tr>
      </table>
    </div>
    <tablepages></tablepages>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import talants from "./component/expert-search/expert-search";
import tablepages from "@/components/page/page";
import "./index.less";
export default {
  name: "talantment",
  data() {
    return {
      talantlist: [
        {
          b: "01",
          x: "童安格",
          l: "指导性",
          ly: "畜牧产业",
          dh: "13329777658",
          z: "审核失败",
          time: "2018-10-21,10:00",
          y: "阿塔"
        },
        {
          b: "01",
          x: "童安格",
          l: "指导性",
          ly: "畜牧产业",
          dh: "13329777658",
          z: "审核失败",
          time: "2018-10-21,10:00",
          y: "阿塔"
        },
        {
          b: "01",
          x: "童安格",
          l: "指导性",
          ly: "畜牧产业",
          dh: "13329777658",
          z: "审核失败",
          time: "2018-10-21,10:00",
          y: "阿塔"
        }
      ]
    };
  },
  components: {
    talants,
    tablepages
  }
};
</script>
<style lang="less">
.talant {
  width: 100%;
  padding: 13px;
  background-color: #ffffff;
}
</style>

