<template>
  <div class="top">
    <div class="top-l">
      <div class="top-l-l">
        <p class="top-l-t">智慧管理平台</p>
        <Icon
          :size="20"
          style="color:#c4c4c4;margin:0 7px 0 40px; cursor: pointer;"
          type="md-cloud-download"
        />
        <Dropdown trigger="click">
          <a href="javascript:void(0)" style="color:#c4c4c4;">资料下载
            <Icon type="md-arrow-dropdown"/>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>

    <div class="top-r">
      <div class="top-r-r">
        <Input class="top-search" placeholder="请输入搜索内容" style="width: auto">
          <Icon type="ios-search" slot="suffix"/>
        </Input>
        <Badge class="top-message" :count="1000" overflow-count="99">
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>

        <div class="top-r-img">
          <img src="../../assets/images/logo.png">
        </div>
        <p class="top-r-man">
          管理员(
          <label>admin</label>)
        </p>
        <div class="top-r-foot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.top {
  width: 100%;
  &-l {
    float: left;
    .top-l-l {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0 6px 0;
      .top-l-t {
        text-align: center;
        width: 210px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  &-r {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
    .top-r-r {
      display: flex;
      .ivu-input {
        border-radius: 50px !important;
        height: 29px;
      }
      .ivu-badge {
        margin: 3px 20px 0px;
      }
      .top-r-img {
        width: 30px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 50%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .top-r-man {
        font-family: "Courier New", Courier, monospace;
        font-size: 14px;
        margin: auto 5px;
      }
      .top-r-foot {
        width: 20px;
        height: 10px;
        background-color: #c81623;
        margin: auto 0;
      }
    }
  }
}
</style>
