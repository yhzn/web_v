<style>
  .eme-cli .img-one{
    float:left;
    margin:10px;
    width:calc( 50% - 20px );
    height:80px;
  }
</style>
<template>
  <div class="txt cont eme-cli">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <img-list :imgData="imgData"></img-list>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import imgList from '@/components/img_list.vue'
  import headData from '@/data/clinical-title.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/clinical/emergency-clinic1.png'
  import searchInputOne from '../../../static/image/clinical/emergency-clinic2.png'
  import searchInputTwo from '../../../static/image/clinical/emergency-clinic3.png'
  import searchInputThree from '../../../static/image/clinical/emergency-clinic4.png'
  import searchInputFour from '../../../static/image/clinical/emergency-clinic5.png'
  import searchInputFive from '../../../static/image/clinical/emergency-clinic6.png'



  let imgData=[
    {
      headImg:rotateIcon,
      headTitle:"各类急诊临床路径",
      img:[searchInput,searchInputOne,searchInputTwo,searchInputThree,searchInputFour,searchInputFive]
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
