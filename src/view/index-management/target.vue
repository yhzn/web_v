<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      暂无数据......

    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headData from '@/data/index-management-title.json'

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
