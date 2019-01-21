
<template>
    <section class="environment">
        <Row>
            <i-col span="24" class="type">
                <section style="margin:18px 0;">
                    <section class="type-title">
                        时间
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
                </section>
                <section style="margin:18px 0;">
                    <section class="type-title">
                        测量内容
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>
                <section style="margin:18px 0;">
                    <section class="type-title">
                        企业名称
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>
                <section style="margin:18px 0;">
                    <section class="type-title">
                        基地
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>
                <section style="margin:18px 0;">
                    <section class="type-title">
                        地块
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>
                <section style="margin:18px 0;">
                    <section class="type-title">
                        传感器
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>
                <section class="type-btn" style="margin:18px 0;">
                    <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
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
