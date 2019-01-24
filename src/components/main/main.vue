<template>
  <div>
    <hops></hops>
    <Layout style="height:100%;" class="main">
      <Sider
        hide-trigger
        collapsible
        :width="210"
        :collapsed-width="0"
        v-model="collapsed"
        class="left-sider"
        :style="{overflow: 'hidden'}"
      >
        <side-menu
          accordion
          ref="sideMenu"
          :active-name="$route.name"
          :collapsed="collapsed"
          @on-select="turnToPage"
          :menu-list="menuList"
        >
          <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
          <div class="logo-con">
            <img v-show="!collapsed" :src="maxLogo" key="max-logo">
            <img v-show="collapsed" :src="minLogo" key="min-logo">
          </div>
          <div class="workben" @click="homes">
            <Icon class="worico" :size="18" type="ios-laptop"/>
            <span>工作台</span>
            <Icon :size="14" type="ios-arrow-down"/>
          </div>
        </side-menu>
        <!-- 菜单 -->
      </Sider>
      <Layout>
        <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange" :class="['sider-trigger-a', collapsed ? 'handlecollapsedt' : 'handlecollapsedf']"></sider-trigger>

        <!-- <Header class="header-con">
          <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
            <user :user-avator="userAvator"/>
            <language
              v-if="$config.useI18n"
              @on-lang-change="setLocal"
              style="margin-right: 10px;"
              :lang="local"
            />
            <error-store
              v-if="$config.plugin['error-store'] && $config.plugin['error-store'].showInHeader"
              :has-read="hasReadErrorPage"
              :count="errorCount"
            ></error-store>
            <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
          </header-bar>
        </Header>-->
        <!-- 整条导航栏 -->
        <Content class="main-content-con">
          <Layout class="main-layout-con">
            <div class="tag-nav-wrapper">
              <tags-nav
                :value="$route"
                @input="handleClick"
                :list="tagNavList"
                @on-close="handleCloseTag"
              />
            </div>
            <div class="colorr">
              <img src="../../assets/images/colorr.png">
            </div>
            <!-- 详细的导航条 -->
            <Content class="content-wrapper">
              <div class="workbench">
                <p>工作台</p>
                <span>工作台</span>
              </div>

              <div class="contentgundong" v-bind:style="{height: myHeight}">
                <keep-alive :include="cacheList" :navIndex="indexnum">
                  <router-view/>
                </keep-alive>
              </div>
            </Content>
            <!-- 内容 -->
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import siderTrigger from './components/header-bar/sider-trigger/sider-trigger'
import hops from "_c/top/top";
import bus from "@/api/bus.js";
import SideMenu from "./components/side-menu";
// import HeaderBar from "./components/header-bar";
// 整一条导航栏  多级菜单 -> 二级-3
import TagsNav from "./components/tags-nav";
// import User from "./components/user";
// 登录的退出
// import Fullscreen from "./components/fullscreen";
// 全屏
// import Language from "./components/language";
// 语言
// /import ErrorStore from "./components/error-store";
// 出错信息
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getNewTagList, getNextRoute, routeEqual } from "@/libs/util";
import minLogo from "@/assets/images/logo-min.png";
import maxLogo from "@/assets/images/logo.png";
import "./main.less";
export default {
  name: "Main",
  components: {
    SideMenu,
    // HeaderBar,
    // Language,
    TagsNav,
    // Fullscreen,
    // ErrorStore,
    // User,
    hops,
    siderTrigger

  },
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      getu: [],
      indexnum: 0,
      myHeight: window.innerHeight - 143 + "px",
      isFullscreen: false
    };
  },

  computed: {
    ...mapGetters(["errorCount"]),
    tagNavList() {
      return this.$store.state.app.tagNavList;
    },
    tagRouter() {
      return this.$store.state.app.tagRouter;
    },
    userAvator() {
      return this.$store.state.user.avatorImgPath;
    },
    cacheList() {
      return this.tagNavList.length
        ? this.tagNavList
            .filter(item => !(item.meta && item.meta.notCache))
            .map(item => item.name)
        : [];
    },
    menuList() {
      return this.$store.getters.menuList;
    }
    // local() {
    //   return this.$store.state.app.local;
    // },
    // hasReadErrorPage() {
    //   return this.$store.state.app.hasReadErrorPage;
    // }
  },

  
  watch: {
    $route(newRoute) {
      const { name, query, params, meta } = newRoute;
      this.addTag({
        route: { name, query, params, meta },
        type: "push"
      });
      this.setBreadCrumb(newRoute);
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
      this.$refs.sideMenu.updateOpenName(newRoute.name);
    }
  },
  activated() {},
  deactivated() {},
  created() {
    var _this = this;
    bus.$on("navIn", function(re) {
      _this.getu = re;
      console.log(_this.getu);
    });
    bus.$on("navnum", function(re) {
      _this.indexnum = re;
      console.log(_this.indexnum);
    });
  },
  beforeDestroy() {},
  mounted() {
    var _this = this;

    window.onresize = function windowResize() {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      _this.myHeight = window.innerHeight - 143 + "px";
      console.log(_this.myHeight);
      console.log("this.myHeight");
      bus.$emit("myHeight", window.innerHeight - 143);
    };

    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList();
    this.addTag({
      route: this.$store.state.app.homeRoute
    });
    this.setBreadCrumb(this.$route);
    // 设置初始语言
    this.setLocal(this.$i18n.locale);
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      });
    }
  },
  methods: {
    ...mapMutations(["setBreadCrumb", "setTagNavList", "addTag", "setLocal"]),
    // ...mapActions(["handleLogin"]),
    homes() {
      // console.log(this);
      this.$router.push({
        name: "_home"
      });
    },
    turnToPage(route) {
      let { name, params, query } = {};
      if (typeof route === "string") name = route;
      else {
        name = route.name;
        params = route.params;
        query = route.query;
      }
      if (name.indexOf("isTurnByHref_") > -1) {
        window.open(name.split("_")[1]);
        return;
      }
      this.$router.push({
        name,
        params,
        query
      });
      
    },
    handleCollpasedChange (state) {
      this.collapsed = state;
      this.$emit('on-coll-change', state)
    },
    // handleCollapsedChange(state) {
    //   this.collapsed = state;
    // },
    handleCloseTag(res, type, route) {
      if (type === "all") {
        this.turnToPage(this.$config.homeName);
      } else if (routeEqual(this.$route, route)) {
        if (type !== "others") {
          const nextRoute = getNextRoute(this.tagNavList, route);
          this.$router.push(nextRoute);
        }
      }
      this.setTagNavList(res);
    },
    handleClick(item) {
      this.turnToPage(item);
    }
  },
};
</script>

<style>
.handlecollapsedf{
  position: fixed;
  bottom:34px;
  /* background-color: #000; */
  z-index: 999;
  margin-left: -44px;
}
.handlecollapsedt{
  position: fixed;
  bottom:34px;
  z-index: 999;
  transform:rotate(180deg);
  -ms-transform:rotate(180deg); 	/* IE 9 */
  -moz-transform:rotate(180deg); 	/* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg); 	/* Opera */

}
</style>
