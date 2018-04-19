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
  import headData from '@/data/operation-head-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/operation/count11.png'
  import searchInputOne from '../../../static/image/operation/count12.png'
  import searchInputSec from '../../../static/image/operation/count13.png'
  import searchInputThr from '../../../static/image/operation/count14.png'
  import searchInputFor from '../../../static/image/operation/count15.png'

  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"快速搜索窗口",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"功能界面展示",
      img:[searchInputOne,searchInputSec,searchInputThr,searchInputFor]
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
