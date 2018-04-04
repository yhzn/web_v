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
  import headData from '@/data/head_data.json'

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
