<template>
  <Row>
    <i-col span="24" class="nav">
      <section
        v-for="(item,index) in navArrayss"
        :key="index"
        :class="navInnum === index ? 'item item-active' : 'item'"
        @click="selectNav(index)"
      >{{item}}</section>
      <section class="item-img">
        <img :src="navd" alt>
      </section>
      <section class="item-img">
        <img :src="navdd" alt>
      </section>
    </i-col>
  </Row>
</template>

<script>
import { mapState } from "vuex";
import navd from "@/assets/images/nav_icon01.png";
import navdd from "@/assets/images/nav_icon02.png";
import "./index.less";
export default {
  name: "navs",
  data() {
    return {
      navd,
      navdd,
      navInnum: 0,
      navArrayss: []
    };
  },
  computed: {
    ...mapState({
      haohang: state => state.navtop.navs
    })
  },
  watch: {
    haohang(news, old) {
      this.navArrayss = news;
      return;
    }
  },
  created() {},
  mounted() {},
  deactivated() {},
  methods: {
    selectNav(index) {
      this.navInnum = index;
      this.$nextTick(function() {
        // bus.$emit("navnum", index);
      });
    }
  }
};
</script>


