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
  import headData from '@/data/gross-class-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/gross-class/4.1.png'
  import searchFir from '../../../static/image/gross-class/4.2.png'
  import imgList from '@/components/new-img-list.vue'
  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"总值班汇总",
      img:[searchInput,searchFir]
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
