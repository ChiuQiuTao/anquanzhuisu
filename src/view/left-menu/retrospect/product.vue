<template>
  <div class="products">
    <prdquery></prdquery>
  </div>
</template>
<script>
import prdquery from "./component/farm-search/farm-search";
export default {
  name: "product",
  data() {
    return {};
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


