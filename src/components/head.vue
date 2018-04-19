<style>
  .head{
    color:#666;
  }
  .head div{
    color:#666;
    font-size: 14px;
    padding:10px;
  }
  .head .back{
    position: relative;
    float:left;
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
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
</style>
<template>
  <div class="head clearFix">
      <div class="back" @click="routerGo">
        <span>&lt</span>返回
      </div>
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
  props:['headData'],
  methods:{
    routerGo () {
      this.$router.go(-1);
    }
  }
}
</script>
