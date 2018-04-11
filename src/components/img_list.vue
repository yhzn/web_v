<style>

</style>
<template>
  <div class="wrapper">
    <div>
      <div v-for="item in imgData">
        <div class="title-con">
          <div>
            <img src="" alt="" v-lazy="item.headImg">
          </div>
          <div>
            {{item.headTitle}}
          </div>
        </div>
        <div class="img-one" v-for="img in item.img">
          <img src="" alt="" v-lazy="img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {

    }
  },
  props:['imgData'],
  methods:{
    async initData(){
      this.$nextTick(()=>{
        new BScroll('.wrapper',{
          scrollY:true,
          click:true,
        })
      })
    }
  },
  mounted(){
    this.initData()
  }
}
</script>
