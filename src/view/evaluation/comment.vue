<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        2017年第一季度抗生素临床合理用药讲评
      </div>

      <div class="img-one">
        <img src="" alt="" v-lazy="anaImg">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import anaImg from '../../../static/image/medical_quality.png'

  let headData={
    href:'/evaluation/medicalquality',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
        anaImg,
      }
    },
    components:{
      headCon,
    }
  }
</script>
