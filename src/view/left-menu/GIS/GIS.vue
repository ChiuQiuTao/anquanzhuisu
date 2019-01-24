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
import { mapMutations } from "vuex";
import BMap from "BMap";
import BMapSymbolSHAPEPOINT from "BMap_Symbol_SHAPE_POINT";
import Inqu from "./component/search-company/search-company";
export default {
  name: "GIS",
  data() {
    return {
      index: "",
      setmes: ["信息管理"],
      navInnum: 0
    };
  },
  components: {
    Inqu
  },
  created() {
    //https://blog.csdn.net/ting_163/article/details/78637602
  },
  activated() {
    this.setmess(this.setmes);
  },
  mounted() {
    this.baiduMap();
  },
  beforeDestory() {},
  methods: {
    ...mapMutations(["setmess"]),
    goback() {
      this.$router.go(-1);
    },
    baiduMap() {
      // var map = new BMap.Map('allmap')
      // var point = new BMap.Point(111.742579, 40.818675)
      // map.centerAndZoom(point, 12)
      // var marker = new BMap.Marker(point)  // 创建标注
      // map.addOverlay(marker)              // 将标注添加到地图中
      var map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(116.328749, 40.026922), 13);
      map.enableScrollWheelZoom(true);
      var index = 0;
      var myGeo = new BMap.Geocoder();
      var adds = [
        new BMap.Point(116.307852, 40.057031),
        new BMap.Point(116.313082, 40.047674),
        new BMap.Point(116.328749, 40.026922),
        new BMap.Point(116.347571, 39.988698),
        new BMap.Point(116.316163, 39.997753),
        new BMap.Point(116.345867, 39.998333),
        new BMap.Point(116.403472, 39.999411),
        new BMap.Point(116.307901, 40.05901)
      ];
      for (var i = 0; i < adds.length; i++) {
        var marker = new BMap.Marker(adds[i]);
        map.addOverlay(marker);
        // marker.setLabel(new BMap.Label("我是商圈:"+(i+1),{offset:new BMap.Size(20,-10)}));
      }
    }
  },
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
    padding: 13px;
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
}
</style>

