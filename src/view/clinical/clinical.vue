<style>
  .clinical .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .clinical .main-sec-title{
    margin:20px 10px;
  }
  .clinical .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .clinical .red{
    color:red;
  }
</style>
<template>
  <div class="clinical con">
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
          临床路径管理系统是根据国家卫生部发布的22个专业112个病种，结合医院临床路径实施经验所开发，遵照循证医学的方法，根据某种疾病或某种手术方法，制定一种大家同意认可的治疗模式，让患者由住院到出院都依此模式来接受治疗，并依据治疗结果来分析评估及总结每个患者的差异，以避免下一个患者住院时发生同样的失误，体现的是医疗流程表格化，医嘱信息菜单化，医疗治疗监控实时化。
        </p>
        <p>
          “临床路径管理"是指针对一个病种，制定出医院内医务人员必须遵循的诊疗模式，使病人从入院到出院依照该模式接受检查、手术、治疗、护理等医疗服务。采用临床路径管理系统可以强调时效性，明确规定了各项处置及活动介入时间。方法强调有效性。临床路径更多关注于实践性，使医疗护理标准化，即患者一旦进入医疗程序，医务人员该怎样做，均有明确规定，让患者在进入临床路径后的时间段都依此模式接受照顾。强调完整性和合作性，它是由提供医疗照护的所有成员共同研拟治疗内容及执行时间，临床实践中以患者为中心，整合多个部门的工作，包括专业部门及行政部门，强调部门间的横向联系于沟通。
        </p>
        <p>
          实施临床路径管理将保证患者所接受的治疗项目精细化、标准化、程序化，减少治疗过程的随意化；提高医院资源的管理和利用，加强临床治疗的风险控制;缩短住院周期，降低费用。临床路径还为医疗成本效率核算提供了客观依据。实施标准化管理，提高医疗质量，临床路径研究的目的就是减少费用和提供医疗质量。最终为患者提供连续的，各学科协作的全面服务，即最佳服务。
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
  import flowP from '../../../static/image/clinical/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/clinical/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/clinical-menu.json'
  import headData from '@/data/clinical-title.json'

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
