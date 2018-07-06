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
  import headData from '@/data/report-disease-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/report-disease/rep1.1.png'
  import searchFir from '../../../static/image/report-disease/rep1.2.png'
  import imgList from '@/components/new-img-list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"业务处理",
      img:[searchInput,searchFir]
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
