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
  import searchInput from '../../../static/image/operation/apply91.png'
  import searchInputOne from '../../../static/image/operation/apply92.png'
  import searchInputSec from '../../../static/image/operation/apply93.png'

  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"快速搜索窗口",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"功能界面展示",
      img:[searchInputOne,searchInputSec]
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
