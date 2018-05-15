<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <img-list :imgData="imgData"></img-list>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import imgList from '@/components/img_list.vue'
  import headData from '@/data/capacity-assessment-title'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/capacity-assessment/capacity-evaluation.png'


  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"医师个人医疗能力评价指标",
      img:[searchInput]
    }
  ]
  export default {
    data () {
      return {
        headData,
        imgData,
      }
    },
    components:{
      headCon,
      imgList,
    }
  }
</script>
