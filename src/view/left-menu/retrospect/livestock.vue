<template>
  <div class="lives">
    <stock></stock>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import stock from "./component/search/search";
export default {
  name: "livestock",
  data() {
    return {
      setmes: ["禽畜追溯"]
    };
  },
  activated() {
    this.setmess(this.setmes);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    stock
  }
};
</script>
<style lang="less">
.lives {
  width: 100%;
  background-color: #ffffff;
  padding: 13px;
}
</style>

