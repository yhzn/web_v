<style>
</style>
<template>
  <div class="txt cont chart">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>

    <div class="main">
      <h3 class="title">总预览图</h3>
      <div>
        <img src="" alt="" v-lazy="treatment">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import treatment from '../../../static/image/treatment.png'
  import headData from '@/data/head_data.json'

  let data={
    head:'门诊急诊统计',
    tips:'可支持多院区实时控制管理'
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        treatment,

      }
    },
    components:{
      headCon,
      headTitle,
    },
    mounted(){}
  }
</script>
