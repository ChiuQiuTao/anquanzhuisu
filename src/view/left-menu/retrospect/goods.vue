<template>
  <div class="goods">
    <goodquery></goodquery>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import goodquery from "./component/product-search/product-search";
export default {
  name: "goods",
  data() {
    return {
      setmes: ["商品追溯"]
    };
  },
  activated() {
    this.setmess(this.setmes);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    goodquery
  }
};
</script>
<style lang="less">
.goods {
  width: 100%;
  padding: 13px;
  background-color: #ffffff;
}
</style>

