<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        外来质控纪要模版
      </div>
      <div class="img-one">
        <img src="" alt="" v-lazy="controlCenter">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import controlCenter from '../../../static/image/control_center.png'
  import headData from '@/data/head_data.json'

  export default {
    data () {
      return {
        headData,
        controlCenter,
      }
    },
    components:{
      headCon,
    }
  }
</script>
