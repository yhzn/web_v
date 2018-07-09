<style>
  .qq .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .qq .main-sec-title{
    margin:20px 10px;
  }
  .qq .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .qq .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="qq con">
    <head-con :headData="headData"></head-con>
    <div class="main bg-theme" v-show="showPage=='system'">
      <div>
        <img src="" alt="" v-lazy="banner">
      </div>
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="bannerTitle">
      </div>
      <div class="main-sec">
        <p>
          医院消息通知主要的途径有OA消息、HIS内置消息通知工具、短信平台、内线电话。其中监控类的通知都是通过短信平台发送，我们知道这类的信息特点是：发送频繁、发送内容大小不一定甚至可能内含各类文件，这时短信平台弊端就显现出来了，一笔不必要短信的发送费用以及发送内容被限制了。
        </p>
        <p>
          消息发送平台，通过根据消息的特点来设置发送通道可以在减少发送成本的同时又能更好完成消息发送任务。病人通知类一般都是用短信平台、发给各个厂商及医院院内的消息可以通过发送QQ消息和微信消息来完成、监控消息可以指定发送各种类型监控负责群并@责任人来这样就做到监控事件多人监督有记录可查保证一些紧急重要的监控事件及时处理。
        </p>
      </div>
    </div>
    <div class="main bg-theme" v-show="showPage=='other'">
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="flowPTitle">
      </div>
      <div class="main-sec">
        <img src="" alt="" v-lazy="flowP">
      </div>
    </div>
    <div class="main bg-theme" v-show="showPage=='fun'">
      <sec-level :secMenu="secMenu"></sec-level>
    </div>
    <foot-con :footBtnData="footBtnData" @togglePage="togglePage"></foot-con>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import footCon from '@/components/foot.vue'
  import secLevel from '@/components/sec_level_menu.vue'
  import flowP from '../../../static/image/qq/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/qq/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/qq-menu.json'
  import headData from '@/data/qq-title.json'

  let footBtnData={
    fir:'功能描述',
    sec:'流程图',
    thr:'功能列表'
  }
  export default {
    data () {
      return {
        headData,
        footBtnData,
        showPage:'fun',
        flowP,
        flowPTitle,
        banner,
        bannerTitle,
        secMenu,

      }
    },
    components:{
      headCon,
      footCon,
      secLevel,
    },
    methods:{
      togglePage (page) {
        this.showPage=page;
      },

    },
    mounted() {
    }
  }
</script>
