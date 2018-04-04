<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        病历质量考核与反馈
      </div>
      <div class="img-one">
        <img src="" alt="" v-lazy="anaImg">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import anaImg from '../../../static/image/check_quality.png'

  import headData from '@/data/head_data.json'

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
