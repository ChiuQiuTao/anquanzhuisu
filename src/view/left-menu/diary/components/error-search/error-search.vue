
<template>
    <section class="exchangeinfo-search">
        <Row>
            <i-col span="24" class="search-title">查询条件</i-col>
        </Row>
        <Row>
            <i-col span="24" class="type">
                <section style="margin:18px 0;">
                    <section class="type-title">
                        产生时间
                    </section>
                    <section class="type-select">
                        <row>
                            <i-col span="12">
                                <Date-picker type="date" placeholder="" style="width: 150px" class="type-select-c"></Date-picker>
                            </i-col>
                        </row>

                    </section>
                </section>

                <section style="margin:18px 0;">
                    <section class="type-title">
                        操作人
                    </section>
                    <section class="type-select">
                        <i-input size="small" placeholder="" style="width: 150px"></i-input>
                    </section>

                </section>

                <section style="margin:18px 0;">
                    <section class="type-title">
                        自定义数据
                    </section>
                    <section class="type-select">
                        <i-input size="small" placeholder="" style="width: 150px"></i-input>

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
