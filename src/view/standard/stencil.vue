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
        <img src="" alt="" v-lazy="stencil">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import stencil from '../../../static/image/stencil.png'

  let headData={
    href:'/standard/standard',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
        stencil,
      }
    },
    components:{
      headCon,
    }
  }
</script>
