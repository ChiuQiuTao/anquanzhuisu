<template>
    <div class="permissions-info">
        <div class="title-info">
            当前角色
        </div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">名称</div>
                <div class="content-item-input">
                    <i-input size="small" placeholder="系统管理员" style="width:166px;text-align: center;"></i-input>
                </div>
            </div>

            <div class="content-item">
                <div class="content-item-title">登录账号</div>
                <div class="content-item-input">
                    <i-input size="small" placeholder="请输入账号" style="width:166px;text-align: center;"></i-input>
                </div>
            </div>

            <div class="content-item">
                <div class="content-item-title">联系电话</div>
                <div class="content-item-input">
                    <i-input size="small" placeholder="请输入联系电话" style="width:166px;text-align: center;"></i-input>
                </div>
            </div>

            <div class="content-item">
                <div class="content-item-title">电子邮箱</div>
                <div class="content-item-input">
                    <i-input size="small" placeholder="请输入电子邮箱" style="width:166px;text-align: center;"></i-input>
                </div>
            </div>

            <div class="content-item">
                <div class="content-item-title">所在部门</div>
                <div class="content-item-input">
                    <i-select :model.sync="model2" size="small" style="width:166px">
                        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                    </i-select>
                </div>
            </div>
        </div>

        <div class="instructions">
            <div class="instructions-title">
                说明
            </div>
            <div class="instruction-textarea">
                <textarea name="" id=""></textarea>
            </div>

        </div>

        <div class='btns'>
            <i-button type="primary" shape="circle" class="btn-c" size="small">查询</i-button>
        </div>
    </div>
</template>

<script>
import './index.less'
export default {

}
</script>
