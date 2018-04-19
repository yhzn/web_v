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
  import headData from '@/data/head_data.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/operation/part21.png'
  import searchInputOne from '../../../static/image/operation/part22.png'

  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"各科手术例数完成分布图",
      img:[searchInput]
    },
    {
      headImg:rotateIcon,
      headTitle:"各科手术例数完成统计表",
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
