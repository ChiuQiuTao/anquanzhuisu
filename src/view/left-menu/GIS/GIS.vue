<template>
  <div class="map">
    <Inqu class="map-chaxun"></Inqu>
    <div class="map-map">
      <div class="map-top">
        <label>地理信息</label>
        <p>
          <Icon :size="14" type="md-add"/>
          <span>新增</span>
        </p>
      </div>
      <div id="allmap"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import bus from "@/api/bus.js";
import Inqu from "./component/search-company/search-company";
export default {
  name: "GIS",
  props: {
    navArray: Array,
    navIndex: Number
  },
  data() {
    return {
      index: "",
      navArrays: ["信息管理"],
      navInnum: 0
    };
  },
  components: {
    Inqu
  },
  activated() {
    bus.$emit("navIn", this.navArrays);
  },
  deactivated() {
    bus.$emit("navIn", this.navArrays);
  },
  created() {
    //https://blog.csdn.net/ting_163/article/details/78637602
  },
  beforeDestroy() {},
  mounted() {
    console.log(this.navIndex);
    // var _this = this;
    // bus.$on("navIn", function(e) {
    //   _this.index = e;
    //   console.log(_this.index);
    // });
  },
  beforeDestory() {},
  methods: {},
  computed: {}
};
</script>
<style lang="less">
.map {
  width: 100%;
  background-color: #ffffff;
  .map-chaxun {
    padding: 13px;
  }
  .map-map {
    padding: 0 13px 13px;
    .map-top {
      width: 100%;
      height: 30px;
      background-color: #dcddde;
      border: 1px solid #7a7a7a;
      padding-top: 4px;
      label {
        float: left;
        height: auto;
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 13px;
      }
      p {
        float: right;
        height: auto;
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
        margin-right: 10px;
        height: 100%;
        span {
          display: inline-block;
          height: 100%;
        }
      }
    }
    #allmap {
      width: 100%;
      height: 410px;
      border: 1px solid #7a7a7a;
    }
  }
  .item {
    margin-left: 13px;
  }
}
</style>

