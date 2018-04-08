<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="title-con">
        <div>
          <img src="" alt="" v-lazy="rotateIcon">
        </div>
        <div>
          快速搜索窗口
        </div>
      </div>
      <div class="img-one">
        <img src="" alt="" v-lazy="searchInput">
      </div>
      <div class="title-con">
        <div>
          <img src="" alt="" v-lazy="rotateIcon">
        </div>
        <div>
          功能界面展示
        </div>
      </div>      <div class="img-one">
      <img src="" alt="" v-lazy="searchInputOne">
    </div>
      <div class="img-one">
        <img src="" alt="" v-lazy="searchInputSec">
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headData from '@/data/head_data.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/medical/qua_05.png'
  import searchInputOne from '../../../static/image/medical/qua_51.png'
  import searchInputSec from '../../../static/image/medical/qua_52.png'

  export default {
    data () {
      return {
        headData,
        searchInput,
        rotateIcon,
        searchInputOne,
        searchInputSec,
      }
    },
    components:{
      headCon,
    }
  }
</script>
