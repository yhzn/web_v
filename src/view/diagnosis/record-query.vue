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
  import headData from '@/data/diagnosis-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/diagnosis/record-query1.png'
  import searchInputOne from '../../../static/image/diagnosis/record-query2.png'


  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"查询统计",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"统计报表",
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
