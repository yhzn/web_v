<style>
  .capacity-assessment .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .capacity-assessment .main-sec-title{
    margin:20px 10px;
  }
  .capacity-assessment .main-sec{
    margin:0 10px;
    color:#fff;
  }
</style>
<template>
  <div class="capacity-assessment con">
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
          能力评估根据多维度的数据集对科室、医生或科室主诊组的考核,如：职称时长、手术（操作）量、病历质量、病种管理、会诊管理、合理应用抗菌药、合理用血、医疗技术应用、临床路径应用、医疗安全、门急诊质量、指令性任务等评分规则，主要包括如下维度：
        </p>
        <p>
          一、医疗能力（医疗业务、核心病种、医疗效率、计算能力、诊治能力、积极开展临床路径、防保管理）；
        </p>
        <p>
          二、医疗质量（科室管理框架、科内质控分析、业务学习、台账管理、二进宫病历、运行病历、应知应会、门急诊质量管理、医院感染管理，合理使用抗菌药物、病原学送检率、感染漏报率、手术卫生、感染率、合理使用抗菌药、院感爆发）；
        </p>
        <p>
          三、医疗纠纷（规范处理投诉纠纷、投诉纠纷案件考核、安全缺陷内部纠错、不良事件漏报、返还扣款、返还扣分、卫生部HQMS数据上报专项扣款、电子病历修改扣款、奖励）；
        </p>
        <p>
          四、专项扣款（会诊、手术安全核查、手术标记、乙级病历、丙级病历、血培养、病案首页、病历回收、围术期预防使用抗菌药物，合理用药）、指令性任务。
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
  import flowP from '../../../static/image/capacity-assessment/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/capacity-assessment/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/capacity-assessment-menu'
  import headData from '@/data/capacity-assessment-title'
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
