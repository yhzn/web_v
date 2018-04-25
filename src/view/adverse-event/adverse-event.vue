<style>
  .adverse-event .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .adverse-event .main-sec-title{
    margin:20px 10px;
  }
  .adverse-event .main-sec{
    margin:0 10px;
    color:#fff;
  }
</style>
<template>
  <div class="adverse-event con">
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
          不良事件管理平台为医院内质量控制、患者安全关注、医疗安全不良事件方面的精细化管理提供了电子化的流程操作平台。通过该平台，医院可以提高医疗质量相关事件的信息收集的效率和质量，并及时的统计分析，管理部门可以快速整体掌控信息，为医院等级评审以及JCI认证提供有力保障，为进一步改进PDCA提供详尽的数据支持。包括上报不良事件、医疗不良事件待审批列表、医疗不良事件报告汇总表、医疗不良事件报告科主任查询以及整改反馈等模块。
        </p>
        <p>
          不良事件可采用两种方式上报：匿名上报或具名上报。质控部门收到上报信息后，对上报内容进行审批，将事件原因的分析结果和改进措施填报系统，系统自动将信息发送给相关责任科室或部门，提示其按时间节点落实改进措施。科主任可以查询本科室所有具名上报的不良事件报告，以及所有质控部门对本科室所有不良事件的审批整改意见。科室收到质控部门对本科室不良事件的整改意见后进行整改，并在完成整改后将整改详细信息录入整改反馈栏中，供质控部门查看。所有医务人员均可通过系统查询全院医疗不良事件报告的动态信息，每个事件在整个处理流程中可实时查询。对不良事件各种不同信息生成各种统计分析类图表，包括事件类型构成比、科室单元分布、责任人统计、各类同比环比、同类不良事件影响因素对比等等，有利于相关人员对比分析。
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
  import flowP from '../../../static/image/adverse-event/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/adverse-event/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/adverse-event-menu'
  import headData from '@/data/adverse-event-title'
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
