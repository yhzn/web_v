<style>
  .gross-class .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .gross-class .main-sec-title{
    margin:20px 10px;
  }
  .gross-class .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .gross-class .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="gross-class con">
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
           医院总值班制度是指医院行政干部在非正常工作时间内代表院长行使全院行政指挥权，以保证医院正常运行而设的一种管理制度。院总值班由院级领导、职能部门有关人员参加，负责处理非正常工作时间的医务、行政和临时事宜，及时传达、处理上级指示和紧急通知，签收机密文件，承办待办事项。同时，检查各科室值班人员在岗情况、工作情况，承办院领导或职能部门临时交代的其他事宜等工作，确保医院在非正常工作时间内能够正常运行。
         </p>
         <p>
           医院的业务种类和数量非常庞大复杂，总值班人员在值班过程中，仅靠手工或者从医院各个系统中分别记录和统计数据，操作复杂，工作量大，无法实时动态的了解医院的业务情况。为了辅助总值班工作人员实时掌握医院的门/急诊、在院病人、择期/急诊手术、危重病人等医院整体业务信息情况，同时为了辅助总值班人员在值班期间进行值班记录，在值班交接班之后做值班汇报，因此，研发总值班系统。
         </p>
         <p>
           该系统主要是供总值班及管理人员使用，是一个针对医院的业务数据进行实时更新、动态反馈的信息管理系统。总值班系统与HIS系统、医院其它业务相关信息系统进行对接，数据打通，对医院的门急诊人次、开放床位数、住院病人数、择期/急诊手术数、危重病人及体检人数和挂号分类统计等数据进行实时更新，另外，该系统支持总值班汇总功能，供相关院领导或科主任等相关领导查询统计。
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
  import flowP from '../../../static/image/gross-class/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/gross-class/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/gross-class-menu.json'
  import headData from '@/data/gross-class-title.json'

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
