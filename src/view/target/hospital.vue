<style>
</style>
<template>
  <div class="txt cont chart">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>

    <div class="main">
      <h3 class="title">总预览图</h3>
      <div>
        <img src="" alt="" v-lazy="hospitalOne">
      </div>
      <h3 class="title">总院预览图（分图）</h3>
      <div>
        <img src="" alt="" v-lazy="hospitalSec">
      </div>
      <h3 class="title">南院预览图（分图）</h3>
      <div>
        <img src="" alt="" v-lazy="hospitalThr">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import hospitalOne from '../../../static/image/hospital_1.png'
  import hospitalSec from '../../../static/image/hospital_2.png'
  import hospitalThr from '../../../static/image/hospital_3.png'
  import headData from '@/data/head_data.json'

  let data={
    head:'住院病人统计',
    tips:'可支持多院区实时控制管理'
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        hospitalOne,
        hospitalSec,
        hospitalThr,
      }
    },
    components:{
      headCon,
      headTitle,
    }
  }
</script>
