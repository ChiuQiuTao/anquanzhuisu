
<template>
  <section class="assign-search">
    <Row>
      <i-col span="24" class="search-title">查询条件</i-col>
    </Row>
    <Row>
      <i-col span="24" class="type">
        <section style="margin:18px 0;">
          <section class="type-title">网格</section>
          <section class="type-select">
            <i-select :model.sync="model1" style="width:150px;" class="type-select-c">
              <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </section>
        </section>

        <section style="margin:18px 0;">
          <section class="type-title">风险等级</section>
          <section class="type-select">
            <i-select :model.sync="model1" style="width:150px;" class="type-select-c">
              <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </section>
        </section>

        <section style="margin:18px 0;">
          <section class="type-title">法人</section>
          <section class="type-select">
            <i-input :value.sync="value" placeholder style="width: 150px" class="type-select-c"></i-input>
          </section>
        </section>

        <section style="margin:18px 0;">
          <section class="type-title">企业名称</section>
          <section class="type-select">
            <i-input :value.sync="value" placeholder style="width: 150px" class="type-select-c"></i-input>
          </section>
        </section>

        <section style="margin:18px 0;">
          <section class="type-title">评定时间</section>
          <section class="type-select">
            <row>
              <i-col span="12">
                <Date-picker
                  type="date"
                  placeholder="选择日期"
                  style="width: 150px"
                  class="type-select-c"
                ></Date-picker>
              </i-col>
            </row>
            <section class="line"></section>
            <row>
              <i-col span="12">
                <Date-picker
                  type="date"
                  placeholder="选择日期"
                  style="width: 150px"
                  class="type-select-c"
                ></Date-picker>
              </i-col>
            </row>
          </section>
        </section>
        <section style="margin:18px 0;">
          <section class="type-title">企业类型</section>
          <section class="type-select">
            <i-select :model.sync="model1" style="width:150px;" class="type-select-c">
              <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </section>
        </section>

        <section class="type-btn" style="margin:18px 0;">
          <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
          <i-button type="primary" shape="circle" class="type-btn-c" size="small">重置</i-button>
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
