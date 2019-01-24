<template>
  <div class="farm">
    <farms></farms>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import farms from "./component/product-search/product-search";
export default {
  name: "farmproducts",
  data() {
    return {
      setmes: ["农产品追溯"]
    };
  },
  activated() {
    this.setmess(this.setmes);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    farms
  }
};
</script>
<style lang="less">
.farm {
  width: 100%;
  background-color: #ffffff;
  padding: 13px;
}
</style>

