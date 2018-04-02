<style>
</style>
<template>
  <div class="txt cont chart">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>

    <div class="main">
      <h3 class="title">总预览图</h3>
      <div>
        <img src="" alt="" v-lazy="sche">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import sche from '../../../static/image/sche.png'

  let headData={
    href:'/qualityPage',
    text:"医疗质量信息管理系统"
  }
  let data={
    head:'科室排班',
    tips:'可看本院、今日、下月排班'
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        sche,

      }
    },
    components:{
      headCon,
      headTitle,
    },
    mounted(){}
  }
</script>
