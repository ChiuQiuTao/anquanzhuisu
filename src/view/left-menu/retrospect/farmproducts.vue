<template>
  <div class="farm">
    <farms></farms>
  </div>
</template>
<script>
import farms from "./component/product-search/product-search";
export default {
  name: "farmproducts",
  data() {
    return {};
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

