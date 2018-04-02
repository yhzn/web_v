<style>
</style>
<template>
  <div>
    <head-con :headData="headData"></head-con>
    <div>暂未开发......</div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'

  let headData={
    href:'/qualityPage',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
      }
    },
    components:{
      headCon,
    }
  }
</script>
