<template>
    <div class="permission-user">
        <div class="title">
            角色列表
        </div>

        <div class="content">
            <div class="content-left">
                    <i-table border :columns="columns4" :data="data1"></i-table>
                <div class="btns">
                    <div class="item">
                        新增
                    </div>
                    <div class="item">
                        修改
                    </div>
                    <div class="item">
                        删除
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="navBlock">部门管理</div>
                <div class="navBlock">用户管理</div>
                <div class="navBlock">数据字典</div>
                <div class="navBlock">系统按钮</div>
                <div class="navBlock">模块管理</div>

            </div>
        </div>
    </div>
</template>

<script>
import './index.less'
export default {
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '角色',
          key: 'role'
        },
        {
          title: '账号',
          key: 'user'
        },
        {
          title: '当前状态',
          key: 'status'
        }
      ],
      data1: [
        {
          name: '王小明',
          role: '管理员',
          user: 'admin',
          status: '不在线'
        },
        {
          name: '王小明',
          role: '管理员',
          user: 'admin',
          status: '不在线'
        },
        {
          name: '王小明',
          role: '管理员',
          user: 'admin',
          status: '不在线'
        },
        {
          name: '王小明',
          role: '管理员',
          user: 'admin',
          status: '不在线'
        }
      ]
    }
  }
}
</script>
