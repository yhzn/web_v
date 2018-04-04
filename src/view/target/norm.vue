<style>
</style>
<template>
  <div class="txt cont chart">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>

    <div class="main">
      <h3 class="title">总预览图</h3>
      <div>
        <img src="" alt="" v-lazy="norm">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import norm from '../../../static/image/norm.png'
  import headData from '@/data/head_data.json'

  let data={
    head:'年度指标统计',
    tips:'年度指标及目标完成值统计数据'
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        norm,

      }
    },
    components:{
      headCon,
      headTitle,
    },
    mounted(){}
  }
</script>
