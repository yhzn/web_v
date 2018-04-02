<style>
  .head{
    color:#666;
  }
  .head div{
    float:left;
    color:#666;
    font-size: 14px;
    padding:10px;
  }
  .head .back{
    position: relative;
    padding-left: 30px;
  }
  .head div a{
    color:#666;
  }
  .head div span{
    position: absolute;
    left: 10px;
    top: 1px;
    font-size: 26px;
  }
  .head div:nth-child(2){
    padding-left:50px;
  }
</style>
<template>
  <div class="head clearFix">
    <router-link :to="headData.href">
      <div class="back">
        <span>&lt</span>返回
      </div>
    </router-link>
    <div>
      {{headData.text}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props:['headData']
}
</script>
