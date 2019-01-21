
<template>
    <section class="company-search">
        <Row>
            <i-col span="24" class="search-title">查询条件</i-col>
        </Row>
        <br>
        <Row>
            <i-col span="24" class="type">
                <section>
                    <section class="type-title">
                        统计力度
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:160px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>

                <section>
                    <section class="type-title">
                        日期
                    </section>
                    <section class="type-select">
                        <row>
                            <i-col span="12">
                                <Date-picker type="date" placeholder="选择日期" style="width: 150px" class="type-select-c"></Date-picker>
                            </i-col>
                        </row>
                            <section class="line">
                            </section>
                        <row>
                            <i-col span="12">
                                <Date-picker type="date" placeholder="选择日期" style="width: 150px" class="type-select-c"></Date-picker>
                            </i-col>
                        </row>
                    </section>
                    <section class="type-btn">
                        <i-button type="primary" shape="circle" class="type-btn-c" size="small">查看</i-button>
                        <i-button type="primary" shape="circle" class="type-btn-c" size="small">重置</i-button>

                    </section>
                </section>
            </i-col>
        </Row>
    </section>

</template>
<script>
import './index.less'

export default {
  data () {
    return {
      list: [
        {
          value: '投入品保质期预警',
          label: '投入品保质期预警'

        }, {
          value: '投入品保质期预警',
          label: '投入品保质期预警'

        }
      ]
    }
  }
}
</script>

<style>

</style>
