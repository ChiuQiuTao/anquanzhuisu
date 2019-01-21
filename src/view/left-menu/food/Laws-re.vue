<template>
  <div class="laws-re" style="background-color:#fff">
    <!-- <navwork :navArray='navArray' :navIndex='navIndex'></navwork> -->
    <div class="laws">
      <lawSearch></lawSearch>
      <div class="project-btn">
        <ul>
          <li v-for="(law,index) in lislaw" :key="index">{{law}}</li>
        </ul>
      </div>
      <div class="project-form">
        <ul>
          <li class="pro-first">
            <span></span>
            <span>监控器名称</span>
            <span>基地</span>
            <span>地块</span>
            <span>视频</span>
            <span>工作状态</span>
          </li>
          <li v-for="(item,index) in lislawss" :key="index">
            <!-- <input type="checkbox"> -->
            <span>{{item.index}}</span>
            <span>{{item.m}}</span>
            <span>{{item.f}}</span>
            <span>{{item.l}}</span>
            <span>{{item.dx}}</span>
            <span>{{item.yx}}</span>
          </li>
        </ul>
      </div>
      <page style="padding:22px 0"></page>

    </div>
  </div>
</template>
<script>
import page from '../../../components/page/page'
import bus from '@/api/bus.js'
import navwork from '../../../components/nav/nav'
import lawSearch from './components/law-search/law-search'

export default {
  name: 'Laws-re',
  data () {
    return {
      navArray: ['安全标准', '法律法规'],
      navIndex: 1,
      lislaw: ['新增', '替代', '修改', '删除', '导出'],
      lislawss: [
        {
          index: '01',
          m: 'xxx公司',
          f: '低风险',
          l: '食品生产',
          dx: '2次',
          yx: '3次'
        },
        {
          index: '02',
          m: 'xxx公司',
          f: '低风险',
          l: '食品生产',
          dx: '2次',
          yx: '3次'
        },
        {
          index: '03',
          m: 'xxx公司',
          f: '低风险',
          l: '食品生产',
          dx: '2次',
          yx: '3次'
        }
      ]
    }
  },
  components: {
    navwork,
    lawSearch,
    page

  }
}
</script>

 <style lang="less">

.laws{
  padding: 0 17px;
  padding-top: 22px;
  .project-btn {
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 16px;
      li {
        list-style: none;
        color: #ffffff;
        letter-spacing: 1.5px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 12px;
        border: 1px solid #ff0000;
        border-radius: 20px;
        padding: 1px 13px;
        margin-right: 20px;
        background-color: #ff0000;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }

  .project-form {
  ul {
    width: 100%;
  li {
    width: 100%;
    display: block;
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
    // background-color: #eceaea;
    color: #414141;
      p {
        width: 15%;
        height: 40px;
        border-right: 1px solid #ffffff;
          input {
            display: block;
            margin: 14px auto;
            background-color: #fff;
          }
      }
      span {
        display: block;
        width: 30%;
        height: 40px;
        border-right: 1px solid #ffffff;
        text-align: center;
        line-height: 40px;
      }
    }
      .pro-first {
        width: 100%;
        height: 40px;
        line-height: 40px;
        p {
          width: 15%;
          height: 30px;
          border-right: 1px solid #ffffff;
        }
        span {
          display: block;
          width: 30%;
          height: 40px;
          text-align: center;
          border-right: 1px solid #ffffff;
          color: #595959;
        }
      }
    }
  }
}

</style>
