<template>
  <div>敬请期待</div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "About-Us",
  data() {
    return {
      navtop: ["关于我们"]
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
