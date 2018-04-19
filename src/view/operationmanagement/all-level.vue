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
  import searchInput from '../../../static/image/operation/all31.png'
  import searchInputOne from '../../../static/image/operation/all32.png'

  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"全院各级手术例数分布图",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"全院各级手术例数统计表",
      img:[searchInputOne]
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
