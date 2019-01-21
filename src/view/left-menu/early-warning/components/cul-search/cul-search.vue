
<template>
    <section class="assign-search">
        <Row>
            <i-col span="24" class="search-title">查询条件</i-col>
        </Row>
        <Row>
            <i-col span="24" class="type">

                <section style="margin:18px 0;">
                    <section class="type-title">
                        类型
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:150px;" class="type-select-c" @on-change='changeType'>
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>

                <!-- <div v-if='label="出栏提醒"'> -->
                    <section style="margin:18px 0;" v-if='label=="出栏提醒"||label=="防疫提醒"'>
                        <section class="type-title">
                            预计采收日期
                        </section>
                        <section class="type-select">
                            <row>
                                <i-col span="12">
                                    <Date-picker type="date" placeholder="" style="width: 150px" class="type-select-c"></Date-picker>
                                </i-col>
                            </row>
                                <section class="line">
                                </section>
                            <row>
                                <i-col span="12">
                                    <Date-picker type="date" placeholder="" style="width: 150px" class="type-select-c"></Date-picker>
                                </i-col>
                            </row>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="出栏提醒"||label=="防疫提醒"'>
                        <section class="type-title">
                            农产品名称
                        </section>
                        <section class="type-select">
                            <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                                <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="出栏提醒"||label=="防疫提醒"'>
                        <section class="type-title">
                            基地
                        </section>
                        <section class="type-select">
                            <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                                <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="出栏提醒"||label=="防疫提醒"'>
                        <section class="type-title">
                            地块
                        </section>
                        <section class="type-select">
                            <i-select :model.sync="model1" style="width:90px;" class="type-select-c">
                                <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
                        </section>
                    </section>

                    <!-- <section style="margin:18px 0;" v-if='label=="农产品保质期预警"'>
                        <section class="type-title">
                            农产品名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section> -->
                    <section style="margin:18px 0;" v-if='label=="禽畜库存预警"'>
                        <section class="type-title">
                            产品名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="投入品保质期预警"'>
                        <section class="type-title">
                            投入品名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="投入品库存预警"'>
                        <section class="type-title">
                            投入品名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section>

                    <section class="type-btn" style="margin:18px 0;">
                        <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
                        <i-button type="primary" shape="circle" class="type-btn-c" size="small" v-if='label=="出栏提醒"'>重置</i-button>

                    </section>
                <!-- </div>
                <div v-if='label="农产品保质期预警"'>
                </div>
                <div v-if='label="农产品库存预警"'>
                </div>
                <div v-if='label="投入品保质期预警"'>
                </div>
                <div v-if='label="投入品库存预警"'>
                </div> -->
            </i-col>
        </Row>
    </section>

</template>
<script>
import './index.less'

export default {
  data () {
    return {
      label: '出栏提醒',
      list: [
        {
          value: '出栏提醒',
          label: '出栏提醒'

        }, {
          value: '防疫提醒',
          label: '防疫提醒'
        }, {
          value: '禽畜库存预警',
          label: '禽畜库存预警'
        }, {
          value: '投入品保质期预警',
          label: '投入品保质期预警'
        }, {
          value: '投入品库存预警',
          label: '投入品库存预警'
        }
      ]
    }
  },
  methods: {
    changeType (e) {
      console.log(e)
      this.label = e
    }
  }
}
</script>

<style>

</style>
