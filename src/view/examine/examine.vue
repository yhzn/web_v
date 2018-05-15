<style>
  .examine .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .examine .main-sec-title{
    margin:20px 10px;
  }
  .examine .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .examine .red{
    color:red;
  }
</style>
<template>
  <div class="examine con">
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
          考核管理主要是针对医务部及医生进行的考核管理流程，包括：综合考核管理（考核汇总，考核指标规则维护，主诊组维护）、医疗能力考核（临床路径）、医疗质量考核、医疗纠纷考核；主要详情如下：
        </p>
        <p>
          一、医疗能力考核（医疗业务、核心病种、医疗效率、计算能力、诊治能力、积极开展临床路径、防保管理）；
        </p>
        <p>
          二、医疗质量考核（科室管理框架、科内质控分析、业务学习、台账管理、二进宫病历、运行病历、应知应会、门急诊质量管理、医院感染管理，合理使用抗菌药物、病原学送检率、感染漏报率、手术卫生、感染率、合理使用抗菌药、院感爆发）；
        </p>
        <p>
          三、医疗纠纷考核（规范处理投诉纠纷、投诉纠纷案件考核、安全缺陷内部纠错、不良事件漏报、返还扣款、返还扣分、卫生部HQMS数据上报专项扣款、电子病历修改扣款、奖励）；
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
  import flowP from '../../../static/image/examine/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/examine/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/examine.json'
  import headData from '@/data/examine-title.json'

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
