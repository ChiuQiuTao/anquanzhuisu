<template>
    <div class="permissions">
        <div class="title">
            <div class="permissions-title-item" @click="selectPermission(0)">修改密码</div>
            <div class="permissions-title-item" @click="selectPermission(1)">角色管理</div>
            <div class="permissions-title-item permissions-title-item-active" @click="selectPermission(2)">基本信息</div>
        </div>
        <permissionsInfo v-show="id==2"></permissionsInfo>
        <permissionsUser v-show="id==1"></permissionsUser>
        <permissionsPassword v-show="id==0"></permissionsPassword>

    </div>
</template>

<script>

import './index.less'
import permissionsInfo from '../permissions-info/permissions-info'
import permissionsUser from '../permissions-user/permissions-user'
import permissionsPassword from '../permissions-password/permissions-password'

export default {
  data () {
    return {
      id: 2
    }
  },
  components: {
    permissionsInfo,
    permissionsUser,
    permissionsPassword
  },
  methods: {
    selectPermission (id) {
      document.querySelector('.permissions-title-item-active').classList.remove('permissions-title-item-active')
      var items = document.querySelectorAll('.permissions-title-item')
      items[id].classList.add('permissions-title-item-active')
      this.id = id
      console.log('id', id)
    }
  }
}
</script>
