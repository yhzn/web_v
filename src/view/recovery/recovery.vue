<style>
  .recovery .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .recovery .main-sec-title{
    margin:20px 10px;
  }
  .recovery .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .recovery .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="recovery con">
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
          康复科管理系统为康复诊疗活动提供一个自动化的操作平台，在完善康复电子病历、提高工作效率、辅助临床决策等方面具有重要意义。它能够有效地减轻医护人员劳动强度，提高工作效率和质量，还可以及时、准确、有效地统计分析各种工作数据，供科室或上级部门做管理决策，具有重要现实意义。
        </p>
        <p>
          康复科管理系统旨在帮助康复科医生更好地帮助病人进行康复治疗单的管理，方便医疗治疗的追溯。无纸化的模式能够提高康复治疗效率，数据存档方便回访就医以及医疗研究，实现康复日常工作无纸信息化办公。康复过程主要包括初期评估、制定康复计划、治疗、出院前评估和出院后随访几个步骤。本系统支持集成HIS系统和电子病历调用。此外，国家《综合医院康复医学科基本标准》要求三级医院康复科必须要有辅助康复的物理治疗、言语治疗、作业治疗等辅助治疗设施。本系统兼顾治疗功能，有治疗单管理模块和随访病人查询模块。
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
  import flowP from '../../../static/image/recovery/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/recovery/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/recovery-menu.json'
  import headData from '@/data/recovery-title.json'

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
