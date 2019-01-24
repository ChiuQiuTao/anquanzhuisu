<template>
  <div>敬请期待</div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "help",
  data() {
    return {
      navtop: ["使用帮助"]
    };
  },
  activated() {
    this.setmess(this.navtop);
  },
  methods: {
    ...mapMutations(["setmess"])
  }
};
</script>
