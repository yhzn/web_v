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
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/medical/search_input_01.png'
  import searchInputOne from '../../../static/image/medical/search_input_21.png'
  import searchInputSec from '../../../static/image/medical/search_input_22.png'
  import headData from '@/data/medical-head-title.json'
  import imgList from '@/components/img_list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"快速搜索窗口",
      img:[searchInput]
    },
    {
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
