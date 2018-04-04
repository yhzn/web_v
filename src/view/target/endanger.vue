<style>
</style>
<template>
  <div class="txt cont chart">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>

    <div class="main">
      <h3 class="title">本院</h3>
      <div>
        <img src="" alt="" v-lazy="endangerOne">
      </div>
      <h3 class="title">南院</h3>
      <div>
        <img src="" alt="" v-lazy="endangerSec">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import endangerOne from '../../../static/image/endanger_1.png'
  import endangerSec from '../../../static/image/endanger_2.png'
  import headData from '@/data/head_data.json'

  let data={
    head:'危机值管理',
    tips:'提供危及值的实时统计'
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        endangerOne,
        endangerSec,

      }
    },
    components:{
      headCon,
      headTitle,
    },
    mounted(){}
  }
</script>
