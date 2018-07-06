<style>
  .bonuses .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .bonuses .main-sec-title{
    margin:20px 10px;
  }
  .bonuses .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .bonuses .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="bonuses con">
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
          医院绩效管理是传统医院管理上的难题，其难点主要在于信息的及时、有效获取，以及获取到信息后根据复杂的业务逻辑和规则进行绩效的评定，最终实现相应的奖金发放记录管理。
        </p>
        <p>
          针对国家要求开发的本套奖金发放管理系统，能实现根据绩效办下发各个临床、行政、护理的奖金分配金额后，由各科室的负责人员制定奖金分配方案并提交绩效办审核。奖金分配实现统一管理，由此大大提高绩效分配的效率，减少科室和绩效办的不必要的沟通，提高整体运行效率。
        </p>
        <p>
          系统采用B/S架构、基于SQL sever数据库，支持Oracle数据库。系统主要涉及绩效办和科室两大角色，主要包括登陆模块、奖金类别维护、科室类别对应、下发大类维护、绩效办下发、科室分配、科室汇总金额、未提交科室等功能。
        </p>
        <p>
          本系统符合国家政策要求，有着突出的特色：<span style="color:#ff9a9a">设计先进</span>——系统运用Microsoft Silverlight技术和分层设计架构，采用面向服务（SOA）的、组件式的开发技术，将子系统业务进行分装，系统稳定性、代码可复用，能够快速响应医院的需求改变；<span style="color:#ff9a9a">部署灵活</span>——系统使用B/S架构（Browser/Sever），可以通过任意一台电脑输入IP地址即可操作，无需安装客户端。系统版本升级或改造时，客户端也无需做任何操作；<span style="color:#ff9a9a">服务全面</span>——系统可根据医院的现实需要进行定制化修改和子系统开发，并提供定期平台纠错、客户调查和听取回馈等升级维护服务，能全面满足医院的各种需求。
        </p>
        <p>

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
  import flowP from '../../../static/image/bonuses/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/bonuses/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/bonuses-menu.json'
  import headData from '@/data/bonuses-title.json'

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
