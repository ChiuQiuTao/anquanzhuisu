<template>
  <Row>
    <i-col span="24" class="nav">
      <section
        v-for="(item,index) in navArray"
        :key="index"
        :class="navInnum === index ? 'item item-active' : 'item'"
        @click="selectNav(index)"
      >{{item}}</section>
      <section class="item-img">
        <img :src="navd" alt>
        <!-- <img src="../../assets/images/nav_icon02.png" alt=""> -->
      </section>
      <section class="item-img">
        <!-- <img src="../../assets/images/nav_icon01.png" alt=""> -->
        <img :src="navdd" alt>
      </section>
    </i-col>
  </Row>
  <!-- </section> -->
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import bus from "@/api/bus.js";
import navd from "@/assets/images/nav_icon01.png";
import navdd from "@/assets/images/nav_icon02.png";
import "./index.less";
export default {
  name: "navs",
  props: {
    navArray: Array,
    navIndex: Number
  },
  data() {
    return {
      navd,
      navdd,
      navInnum: 0
    };
  },
  created() {},
  deactivated() {},
  computed: {},
  methods: {
    selectNav(index) {
      this.navInnum = index;
      this.$nextTick(function() {
        bus.$emit("navnum", index);
      });
    }
  }
};
</script>


