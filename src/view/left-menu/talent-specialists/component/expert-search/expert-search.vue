
<template>
  <section class="expert-search">
    <Row></Row>
    <br>
    <Row>
      <i-col span="24" class="type">
        <section>
          <section class="type-title">姓名</section>
          <section class="type-select">
            <i-input :value.sync="value" placeholder style="width: 150px" class="type-select-c"></i-input>
          </section>
        </section>

        <section>
          <section class="type-title">专家类别</section>
          <section class="type-select">
            <i-select :model.sync="model1" style="width:100px;" class="type-select-c">
              <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </section>
        </section>

        <section>
          <section class="type-title">联系电话</section>
          <section class="type-select">
            <i-input :value.sync="value" placeholder style="width: 150px" class="type-select-c"></i-input>
          </section>
          <section class="type-btn">
            <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
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
