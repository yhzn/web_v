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
  import headData from '@/data/capacity-assessment-title'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/capacity-assessment/user-rights1.png'
  import searchInputOne from '../../../static/image/capacity-assessment/user-rights2.png'


  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"用户权限查看",
      img:[searchInput]
    },
    {
      headImg:rotateIcon,
      headTitle:"用户组维护",
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
