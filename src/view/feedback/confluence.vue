<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        2016年上半年外部质控汇总
      </div>
      <div class="img-one">
        <img src="" alt="" v-lazy="confluence">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import confluence from '../../../static/image/confluence.png'

  let headData={
    href:'/feedback/feedback',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
        confluence,
      }
    },
    components:{
      headCon,
    }
  }
</script>
