<style>
  .head-title{
    padding:10px;
    height:60px;
    background:#1d4761;
  }
  .head-title .title-img{
    float:left;
    height:40px;
    width:40px;

  }
  .head-title .title-msg{
    position: relative;
    height:100%;
    margin-left:50px;

  }
  .head-title .title-msg div{
    color:#fff;
    position: absolute;
    width:100%;
    top:50%;
    transform: translateY(-50%);
  }
  .head-title .title-msg h3{
    margin:0;
    font-size: 16px;
  }
  .head-title .title-msg p{
    margin:5px 0 0;
    font-size: 14px;
  }
</style>
<template>
  <div class="head-title clearFix">
    <div class="title-img">
      <img src="" v-lazy="headTitleIcon" alt="">
    </div>
    <div class="title-msg">
      <div>
        <h3>{{dataHead}}</h3>
        <p>{{dataTips}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props:['dataHead','dataTips','headTitleIcon']
}
</script>
