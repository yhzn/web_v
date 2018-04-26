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
  import headData from '@/data/index-management-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/index-management/man41.png'
  import searchOne from '../../../static/image/index-management/man42.png'
  import searchSec from '../../../static/image/index-management/man43.png'

  import imgList from '@/components/img_list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"科室指标",
      img:[searchInput,searchOne,searchSec]
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
