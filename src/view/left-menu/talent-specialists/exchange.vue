<template>
  <div class="exchange">
    <exch></exch>
    <div class="dates">
      <table border="0">
        <tr>
          <th>编号</th>
          <th>标题</th>
          <th>发布人</th>
          <th>发布时间</th>
          <th>回复数</th>
          <th>最后回复人</th>
          <th>最后回复日期</th>
          <th>更多</th>
        </tr>
        <tr v-for="(item,index) in  exchlist" :key="index">
          <td>{{item.b}}</td>
          <td>{{item.x}}</td>
          <td>{{item.l}}</td>
          <td>{{item.ly}}</td>
          <td>{{item.dh}}</td>
          <td>{{item.z}}</td>
          <td>{{item.time}}</td>
          <td>
            <button>详情</button>
          </td>
        </tr>
      </table>
    </div>
    <exchangapage></exchangapage>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import exch from "./component/exchangeInfo-search/exchangeInfo-search";
import exchangapage from "@/components/page/page";
import "./index.less";
export default {
  name: "exchange",
  data() {
    return {
      navtop: ["人才专家信息管理", "专家建议栏", "信息交流区"],
      exchlist: [
        {
          b: "01",
          x: "水稻增产建议",
          l: "小涛",
          ly: "2018-10-21,10:00",
          dh: "3",
          z: "刘诗诗",
          time: "2018-10-21,10:00"
        },
        {
          b: "01",
          x: "水稻增产建议",
          l: "小涛",
          ly: "2018-10-21,10:00",
          dh: "3",
          z: "刘诗诗",
          time: "2018-10-21,10:00"
        },
        {
          b: "01",
          x: "水稻增产建议",
          l: "小涛",
          ly: "2018-10-21,10:00",
          dh: "3",
          z: "刘诗诗",
          time: "2018-10-21,10:00"
        }
      ]
    };
  },
  activated() {
    this.setmess(this.navtop);
  },
  methods: {
    ...mapMutations(["setmess"]),
    ...mapActions(["increment"])
  },
  deactivated() {},
  components: {
    exch,
    exchangapage
  }
};
</script>
<style lang="less">
.exchange {
  width: 100%;
  padding: 13px;
  background-color: #ffffff;
}
</style>

