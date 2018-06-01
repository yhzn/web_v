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
  import searchInput from '../../../static/image/diagnosis/automatic-calculation1.png'
  import searchInputOne from '../../../static/image/diagnosis/automatic-calculation2.png'


  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"自动计算指标类型",
      img:[searchInput]
    },{
      headImg:rotateIcon,
      headTitle:"指标分级范围限定",
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
