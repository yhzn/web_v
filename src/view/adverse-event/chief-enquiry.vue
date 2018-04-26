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
  import headData from '@/data/adverse-event-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/adverse-event/chief-enquiry1.png'
  import searchInputOne from '../../../static/image/adverse-event/chief-enquiry2.png'


  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"上报不良事件",
      img:[searchInput,searchInputOne]
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
