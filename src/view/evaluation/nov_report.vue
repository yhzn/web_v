<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        十一月份医疗质量管理简报
      </div>

      <div class="img-one">
        <img src="" alt="" v-lazy="anaImg">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import anaImg from '../../../static/image/nov_report.png'

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
