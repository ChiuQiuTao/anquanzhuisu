<template>
  <div class="fx">
    <div class="fx-navss">
      <div class="zhibiao-jiang">
        <img :src="zhibai">
        <p>企业分布数(平台发展用户数)</p>
        <span>追溯系统使用分布表(全国业务发展用户数)</span>
      </div>

      <div class="fx-tb">
        <div class="shuaxin1" @click="da">&nbsp;</div>
        <div class="shuaxin2">&nbsp;</div>
      </div>
    </div>
    <div class="fxda">
      <Table border :columns="columns5" :data="data5"></Table>
    </div>
  </div>
</template>
<script>
import biao from "@/assets/images/nav_icon05.png";
import zhibi from "@/assets/images/nav-icon06.png";

export default {
  name: "qiyefx",
  data() {
    return {
      zhibai: zhibi,
      tubiao: biao,
      single: false,
      columns5: [
        {
          title: "区域",
          key: "date",
          sortable: true
        },
        {
          title: "单位",
          key: "name"
        },
        {
          title: "当日值",
          key: "age",
          sortable: true
        },
        {
          title: "日环比",
          key: "age1",
          sortable: true
        },
        {
          title: "本月累计值",
          key: "age2",
          sortable: true
        },
        {
          title: "累计环比",
          key: "address",
          sortable: true
        }
      ],
      data5: [
        {
          name: "户",
          age: 4905,
          address: "7.13%",
          date: "中新食品",
          age1: "17.16%",
          age2: "148.746"
        },
        {
          name: "户",
          age: 4965,
          address: "7.13%",
          date: "中新食品",
          age1: "17.16%",
          age2: "148.746"
        },
        {
          name: "户",
          age: 4505,
          address: "7.16%",
          date: "养殖户",
          age1: "16.16%",
          age2: "144.746"
        },
        {
          name: "户",
          age: 4945,
          address: "17.13%",
          date: "销售企业",
          age1: "40.16%",
          age2: "145.746"
        },
        {
          name: "户",
          age: 8003,
          address: "8.13%",
          date: "电商用户",
          age1: "42.16%",
          age2: "200.746"
        },

        {
          name: "户",
          age: 4705,
          address: "7.13%",
          date: "种植户",
          age1: "17.15%",
          age2: "143.746"
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
  .fx-navss {
    height: 40px;
    background-image: url("../../../assets/images/nav_icon03.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #c40002;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .zhibiao-jiang {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        margin-left: 10px;
      }
      p {
        margin-left: 20px;
        font-size: 13px;
        color: #ffffff;
        background-color: #9d1e24;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
      }
      span {
        font-size: 13px;
        color: #ffffff;
        margin-left: 10px;
      }
    }

    .fx-tb {
      width: 50px;
      margin-right: 10px;
      position: relative;
      .shuaxin1 {
        position: absolute;
        top: -8px;
        left: 0;
        width: 20px;
        cursor: pointer;
        z-index: 22;
        background-image: url("../../../assets/images/nav_icon02.png");
        background-repeat: no-repeat;
        background-position-y: 40%;
      }
      .shuaxin2 {
        position: absolute;
        top: -8px;
        left: 25px;
        width: 20px;
        cursor: pointer;
        z-index: 22;
        background-image: url("../../../assets/images/nav_icon01.png");
        background-repeat: no-repeat;
      }
    }
  }
  .fxda {
    table {
      tr {
        th {
          text-align: center;
        }
        td {
          text-align: center;
        }
      }
    }
  }
}
</style>

