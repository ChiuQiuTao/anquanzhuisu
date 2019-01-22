<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <!-- logo -->
    <Menu
      ref="menu"
      v-show="!collapsed"
      :active-name="activeName"
      :open-names="openedNames"
      :accordion="accordion"
      :theme="theme"
      width="auto"
      v-bind:style="{ height: myHeight}"
      @on-select="handleSelect"
    >
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item
            v-else
            :name="getNameOrHref(item, true)"
            :key="`menu-${item.children[0].name}`"
          >
            <common-icon :type="item.children[0].icon || ''"/>
            <span>{{ showTitle(item.children[0]) }}</span>
          </menu-item>
        </template>
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <common-icon :type="item.icon || ''"/>
            <span>{{ showTitle(item) }}</span>
          </menu-item>
        </template>
      </template>
    </Menu>
    <!-- 左侧菜单 -->
    <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <template v-for="item in menuList">
        <collapsed-menu
          v-if="item.children && item.children.length > 1"
          @on-click="handleSelect"
          hide-title
          :root-icon-size="rootIconSize"
          :icon-size="iconSize"
          :theme="theme"
          :parent-item="item"
          :key="`drop-menu-${item.name}`"
        ></collapsed-menu>
        <Tooltip
          transfer
          v-else
          :content="(item.meta && item.meta.title) || (item.children && item.children[0] && item.children[0].meta.title)"
          placement="right"
          :key="`drop-menu-${item.name}`"
        >
          <a
            @click="handleSelect(getNameOrHref(item, true))"
            class="drop-menu-a"
            :style="{textAlign: 'center'}"
          >
            <common-icon
              :size="rootIconSize"
              :color="textColor"
              :type="item.icon || (item.children && item.children[0].icon)"
            />
          </a>
        </Tooltip>
      </template>
    </div>
    <!-- 左侧菜单缩后展现 -->
  </div>
</template>
<script>
import bus from "@/api/bus.js";
import SideMenuItem from "./side-menu-item.vue";
import CollapsedMenu from "./collapsed-menu.vue";
import { getUnion } from "@/libs/tools";
import mixin from "./mixin";

export default {
  name: "SideMenu",
  mixins: [mixin],
  components: {
    SideMenuItem,
    CollapsedMenu
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    collapsed: {
      type: Boolean
    },
    theme: {
      type: String,
      default: "dark"
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ""
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      openedNames: [],
      myHeight: (window.innerHeight - 159) + 'px'

    };
  },
  methods: {
    handleSelect(name) {
      this.$emit("on-select", name);
    },
    getOpenedNamesByActiveName(name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name);
    },
    updateOpenName(name) {
      if (name === this.$config.homeName) this.openedNames = [];
      else this.openedNames = this.getOpenedNamesByActiveName(name);
    }
  },
  computed: {
    textColor() {
      return this.theme === "dark" ? "#fff" : "#495060";
    }
  },
  watch: {
    activeName(name) {
      if (this.accordion)
        this.openedNames = this.getOpenedNamesByActiveName(name);
      else
        this.openedNames = getUnion(
          this.openedNames,
          this.getOpenedNamesByActiveName(name)
        );
    },
    openNames(newNames) {
      this.openedNames = newNames;
    },
    openedNames() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    }
  },
  mounted() {
    var _this = this;
    bus.$on("myHeight", function(re) {
      _this.myHeight = re-16;
      _this.myHeight = _this.myHeight + 'px'
      console.log("_this.myHeight1111111");
      console.log(_this.myHeight);
    });
    //  window.onresize = function windowResize () {
    //     _this.myHeight = (window.innerHeight - 159) + 'px';
    //     console.log(_this.myHeight);
        
    //     console.log('side');
    // }

    this.openedNames = getUnion(
      this.openedNames,
      this.getOpenedNamesByActiveName(name)
    );
  }
};
</script>
<style lang="less">
@import "./side-menu.less";
</style>
