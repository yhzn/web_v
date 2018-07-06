<style>
.img-bg{
  padding-top:15px;
  padding-bottom:10px;
  background:rgba(0,0,0,.3);
}
.txt .main .subTitle{
  padding-top:3px;
}
  .txt .main .subTitle p{
    font-size:14px;
     line-height:14px;
    margin-bottom:3px;
  }
.txt .main .subTitle p:nth-child(2){
     font-size:12px;
     line-height:12px;
}
.txt .main .new-img-one{
  padding:10px 10px;
}
</style>
<template>
  <div class="wrapper">
    <div>
      <div v-for="item in imgData">
        <div class="title-con">
          <div>
            <img src="" alt="" v-lazy="item.headImg">
          </div>
          <div :class="{subTitle:!!item.headSubTitle}">
            <p>{{item.headTitle}}</p>
            <p>{{item.headSubTitle}}</p>
          </div>
        </div>
        <div class="img-one new-img-one img-bg" v-for="img in item.img">
          <div>
              <img src="" alt="" v-lazy="img">
          </div>
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
