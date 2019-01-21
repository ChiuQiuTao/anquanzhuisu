<template>
  <div class="advics">
    <adviced></adviced>
    <div class="dates">
      <!-- <thead>fdsf</thead>aaaaa -->
      <table border="0">
        <tr>
          <th>编号</th>
          <th>标题</th>
          <th>发布内容</th>
          <th>发布时间</th>
          <th>发布人</th>
          <th>更多</th>
        </tr>
        <tr v-for="(item,index) in  advicslist" :key="index">
          <td>{{item.b}}</td>
          <td>{{item.x}}</td>
          <td style="width:20%;">
            <div class="chengdao">{{item.l}}</div>
          </td>
          <td>{{item.ly}}</td>
          <td>{{item.dh}}</td>
          <td>
            <button>详情</button>
          </td>
        </tr>
      </table>
    </div>
    <advicedpage></advicedpage>
  </div>
</template>
<script>
import adviced from './component/expertAdvice-search/expertAdvice-search'
import advicedpage from '@/components/page/page'
import './index.less'
export default {
  name: 'advice',
  data () {
    return {
      advicslist: [
        {
          b: '01',
          x: '水稻增产建议',
          l:
            '建议使用农科院新品种水稻518，其具备亩产高、抗虫、防倒伏分身乏术发顺丰',
          ly: '2018-10-21,10:00',
          dh: '郭大侠'
        },
        {
          b: '01',
          x: '水稻增产建议',
          l:
            '建议使用农科院新品种水稻518，其具备亩产高、抗虫、防倒伏分身乏术发顺丰',
          ly: '2018-10-21,10:00',
          dh: '郭大侠'
        },
        {
          b: '01',
          x: '水稻增产建议',
          l:
            '建议使用农科院新品种水稻518，其具备亩产高、抗虫、防倒伏分身乏术发顺丰',
          ly: '2018-10-21,10:00',
          dh: '郭大侠'
        }
      ]
    }
  },
  components: {
    adviced,
    advicedpage
  }
}
</script>
<style lang="less">
.advics {
  width: 100%;
  padding: 13px;
  background-color: #ffffff;
}
.chengdao {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}
</style>
