]
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
  import headData from '@/data/info-integration-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/info-integration/1.png'
  import imgList from '@/components/new-img-list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"系统平台总览",
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
