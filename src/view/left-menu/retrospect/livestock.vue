<template>
  <div class="lives">
    <stock></stock>
  </div>
</template>
<script>
import stock from "./component/search/search";
export default {
  name: "livestock",
  data() {
    return {};
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

