<template>
  <div class="products">
    <prdquery></prdquery>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import prdquery from "./component/farm-search/farm-search";
export default {
  name: "product",
  data() {
    return {
      setmes: ["产品追溯"]
    };
  },
  activated() {
    this.setmess(this.setmes);
  },
  methods: {
    ...mapMutations(["setmess"])
  },
  components: {
    prdquery
  }
};
</script>
<style lang="less">
.products {
  width: 100%;
  background-color: #ffffff;
  padding: 13px;
}
</style>


