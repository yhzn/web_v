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
  import headData from '@/data/qq-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/qq/1.png'
  import imgList from '@/components/new-img-list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"案例分送查询",
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
