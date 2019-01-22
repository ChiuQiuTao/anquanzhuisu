<template>
  <div>
    <!-- <navwork :navArray='navArray' :navIndex='0'></navwork> -->
    <permissions v-if="navIndex==0" style="padding:17px;"></permissions>
  </div>
</template>
<script>
import bus from '@/api/bus.js'

import navwork from '../../../components/nav/nav'
import permissions from './component/permissions/permissions'

console.log(bus)
export default {
  name: 'jurisdiction',
  data () {
    return {
      navArray: ['权限设置', '使用帮助', '关于我们'],
      navIndex: 0
    }
  },

  components: {
    navwork,
    permissions
  },
  mounted () {
    var _this = this
    bus.$on('navIndex', function (e) {
      _this.navIndex = e
      console.log(e)
    })
    console.log('navIndex', navIndex)
  }
}

</script>
