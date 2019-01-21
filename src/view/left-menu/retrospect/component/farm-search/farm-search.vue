
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
                        查询类型
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:100px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>


                <section>
                    <section class="type-title">
                        企业名称
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:100px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>



                <section>
                    <section class="type-title">
                        产品
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:100px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select> 
                    </section>
                </section>



                <section>
                    <section class="type-title">
                        批次
                    </section>
                    <section class="type-select">
                        <i-select :model.sync="model1" style="width:100px;" class="type-select-c">
                            <i-option v-for="item in list" :value="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </section>
                </section>

                <section class="type-btn" style=''>
                    <i-button type="primary" shape="circle" class="type-btn-c" size="small">查询</i-button>
                </section>






                
            </i-col>
        </Row>
    </section>
    
    
</template>
<script>
import './index.less'

    export default {
        data(){
            return{
                list:[
                    {
                        value:'投入品保质期预警',
                        label:'投入品保质期预警'

                    },{
                        value:'投入品保质期预警',
                        label:'投入品保质期预警'

                    },
                ]
            }
        }
    }
</script>

<style>

</style>
