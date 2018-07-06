<style>
  .send .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .send .main-sec-title{
    margin:20px 10px;
  }
  .send .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .send .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="send con">
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
          医疗质量管理是医院管理的核心，提高医疗质量是医院管理的永恒主题，而病历质量管理又是医疗质量管理的重中之重。在传统的病历质控中，病案室管理人员需要手工对病案进行分类，再从不同的病种病历中抽取需要给病历质控专家评分的病历，将经匿名处理的病历送至病历质控专家处。这个过程费时耗力，且存在着抽取病案过程中人为误差的漏洞，不能完全做到准确抽取病历。因此，采用信息技术实现病历自动化拣选、自动分送可以解决这些问题。
        </p>
        <p>
          病历分送系统（MRDS）就是利用先进的信息技术，辅助临床病历质量控制的检查环节，实现智能自主的病历分送管理体系，建成一套包括病历分类管理、查阅、统计，病历自查自动分送，外院督察自动分送，病历评分反馈管理在内的信息系统。将信息技术与病历质量管理相结合，根据预设的可编辑的规则自动分送，可以简化病案管理工作方式，剔除分送中的人为因素，加强医院管理者对临床医生的监管，能够客观真实的反映整个医院的病历书写水平，并进一步激励组织内部提升病历书写质量，从根本上降低医疗缺陷的产生。系统主要设计使用对象是医院的医疗质量管理者和病历管理者，如病案室、医务部等。
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
  import flowP from '../../../static/image/send/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/send/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/send-menu.json'
  import headData from '@/data/send-title.json'

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
