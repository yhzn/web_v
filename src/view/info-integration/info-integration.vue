<style>
  .info-integration .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .info-integration .main-sec-title{
    margin:20px 10px;
  }
  .info-integration .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .info-integration .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="info-integration con">
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
          由于传统的医院信息集成方式随着系统的复杂度增加，无法满足需求，拓展和完善医院信息集成平台已成为重要趋势。从系统集成架构来说，传统的医院信息系统集成以HIS为核心，外部接口系统复杂, 急需引入院内集成平台改善集成架构。而在数据架构方面，传统的医院信息系统尚处于分散管理、各自独立管理的基础阶段，未实现有效的数据整合及利用。
        </p>
        <p>
          而我们的信息集成平台采用SOA架构，集中立项、分步建设、逐步深化，建成包括数据接入、临床数据存储、数据邦联服务以及在线数据应用等在内的相对完整的数据服务体系。针对目前临床业务流程和数据整合的突出问题，迁移已有临床系统接口，保证数据传输的一致性、及时性和稳定性；基于临床业务蓝图，创建和完善其他业务相关接口，并整合HRP等后台业务系统数据，基本实现院内的互联互通；在深化平台建设，提高效率和性能的基础上，建设院级数据仓库，实现生产数据库和决策支持数据库的分离；根据经营管理和临床需求，订制化地提供数据分析服务，并与医院绩效、OA等系统整合，实现医疗经营管理的PDCA闭环。
        </p>
        <p>
          信息集成平台的建成带来了临床服务和医院经营管理水平的提升,从临床业务视角来说：实现以综合病人诊疗而不是目前科室共能为中心的业务流程体系，促进相应的组织架构和管理体系变革；促进院内诊疗质量的提升和院间工程流程的优化；降低成本；区域医疗资源融合的基础条件；从技术视角来说：统一清晰的以病人为中心的数据架构；权威、完整、准确、及时、稳定的临床信息交换和共享；标准化的部门工作流程和临床业务流程；便利的对外交换信息；全程的监控和简便的运行管理。
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
  import flowP from '../../../static/image/info-integration/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/info-integration/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/info-integration-menu.json'
  import headData from '@/data/info-integration-title.json'

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
