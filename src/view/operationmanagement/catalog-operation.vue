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
  import searchInput from '../../../static/image/operation/catalog11.png'
  import searchInputOne from '../../../static/image/operation/catalog12.png'
  import searchInputSec from '../../../static/image/operation/catalog14.png'
  import searchInputThr from '../../../static/image/operation/catalog13.png'

  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"快速搜索窗口",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"功能界面展示",
      img:[searchInputOne,searchInputSec,searchInputThr]
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
