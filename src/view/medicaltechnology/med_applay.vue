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
          新增医疗技术申请表
        </div>
      </div>


      <div class="img-one">
        <img src="" alt="" v-lazy="searchInput">
      </div>


    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headData from '@/data/head_data.json'
  import rotateIcon from '../../../static/image/icon/rotate.png'
  import searchInput from '../../../static/image/medical/search_input_1.png'

  export default {
    data () {
      return {
        headData,
        searchInput,
        rotateIcon,
      }
    },
    components:{
      headCon,
    }
  }
</script>
