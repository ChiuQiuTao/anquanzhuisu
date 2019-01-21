
<template>
  <section class="expert-search">
    <Row>
      <i-col span="24" class="search-title">查询条件</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="24" class="type">
        <section>
          <section class="type-title">网格名称</section>
          <section class="type-select">
            <Input class="type-select-c" placeholder="Enter something..." style="width: 150px"/>
          </section>
        </section>

        <section>
          <section class="type-title">网格负责人</section>
          <section class="type-select">
            <i-select style="width:100px;" class="type-select-c">
              <i-option v-for="(item,index) in list" :key="index">{{ item.label }}</i-option>
            </i-select>
          </section>
        </section>

        <section>
          <section class="type-title">自定义数据</section>
          <section class="type-select">
            <Input class="type-select-c" placeholder="Enter something..." style="width: 150px"/>
          </section>
          <section class="type-btn">
            <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
            <i-button type="primary" shape="circle" class="type-btn-c" size="small">重置</i-button>
          </section>
        </section>
      </i-col>
    </Row>
  </section>
</template>
<script>
import "./index.less";

export default {
  data() {
    return {
      list: [
        {
          value: "投入品保质期预警",
          label: "投入品保质期预警"
        },
        {
          value: "投入品保质期预警",
          label: "投入品保质期预警"
        }
      ]
    };
  }
};
</script>

<style>
</style>
