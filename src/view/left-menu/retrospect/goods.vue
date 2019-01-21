<template>
  <div class="goods">
    <goodquery></goodquery>
  </div>
</template>
<script>
import goodquery from "./component/product-search/product-search";
export default {
  name: "goods",
  data() {
    return {};
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

