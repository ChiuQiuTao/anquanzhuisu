<template>
  <div class="fx">
    <div class="fx-nav">
      <p>园区企业风险等级</p>
      <div class="fx-tb">
        <img :src="tubiao" alt>
        <div class="shuaxin1" @click="da">&nbsp;</div>
        <div class="shuaxin2">&nbsp;</div>
        <div class="shuaxin3">&nbsp;</div>
        <div class="shuaxin4">&nbsp;</div>
      </div>
    </div>
    <div class="fxda">
      <table class="fx-ahuju">
        <tr style="border:1px solid #c5c8ce;">
          <th>企业名称</th>
          <th>法人</th>
          <th>风险等级</th>
          <th>企业类型</th>
          <th>评定日期</th>
          <th>
            <Checkbox>全选</Checkbox>
          </th>
        </tr>
        <tr v-for="(item,index) in  advicslist" :key="index">
          <td>
            <Icon type="md-add-circle" size="15"/>
            {{item.b}}
          </td>
          <td>{{item.x}}</td>
          <td style="color:aquamarine;">{{item.ly}}</td>
          <td>{{item.dh}}</td>
          <td style="color:#c40002;">{{item.t}}</td>
          <td>
            <Checkbox>&nbsp;</Checkbox>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import biao from "@/assets/images/nav_icon05.png";
export default {
  name: "qiyefx",
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      tubiao: biao,
      single: false,
      advicslist: [
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        },
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        },
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        },
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        },
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        },
        {
          b: "全业务发展用户",
          x: "户",
          ly: "低风险",
          dh: "食品生产",
          t: "2018113"
        }
      ]
    };
  },
  methods: {
    da() {
      alert("dd");
    }
  }
};
</script>

<style lang="less">
.fx {
  width: 100%;
  background-color: #ffffff;
  .fx-nav {
    height: 40px;
    background-image: url("../../../assets/images/nav_icon04.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #c40002;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      cursor: pointer;
    }
    p {
      margin-left: 55px;
      font-size: 13px;
      color: #ffffff;
    }
    .fx-tb {
      width: 100px;
      margin-right: 10px;
      position: relative;
      .shuaxin1 {
        position: absolute;
        top: 0px;
        left: 0;
        width: 20px;
        cursor: pointer;
        z-index: 22;
      }
      .shuaxin2 {
        position: absolute;
        top: 0px;
        left: 25px;
        width: 20px;
        cursor: pointer;
        z-index: 22;
      }
      .shuaxin3 {
        position: absolute;
        top: 0px;
        left: 53px;
        width: 20px;
        cursor: pointer;
        z-index: 22;
      }
      .shuaxin4 {
        position: absolute;
        top: 0px;
        left: 78px;
        width: 20px;
        cursor: pointer;
        z-index: 22;
      }
    }
  }
  .fxda {
    .fx-ahuju {
      border: 1px solid #e7e7ea;
      border-collapse: collapse;
      width: 100%;
      tr {
        border-bottom: 1px solid #e7e7ea;
        height: 30px;
        td {
          text-align: center;
        }
      }
    }
  }
}
</style>

