
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

                    <section style="margin:18px 0;" v-if='label=="原辅料库存预警"'>
                        <section class="type-title">
                            原辅料名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="产品库存预警"'>
                        <section class="type-title">
                            产品品名称
                        </section>
                        <section class="type-select">
                            <i-input size="small" placeholder=""></i-input>
                        </section>
                    </section>
                    <section style="margin:18px 0;" v-if='label=="产品保质期预警"'>
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
      label: '原辅料库存预警',
      list: [
        {
          value: '原辅料库存预警',
          label: '原辅料库存预警'

        }, {
          value: '原辅料保质期预警',
          label: '原辅料保质期预警'
        }, {
          value: '产品库存预警',
          label: '产品库存预警'
        }, {
          value: '产品保质期预警',
          label: '产品保质期预警'
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
