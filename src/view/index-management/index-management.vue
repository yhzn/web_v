<style>
  .index-management .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .index-management .main-sec-title{
    margin:20px 10px;
  }
  .index-management .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .index-management .red{
    color:red;
  }
</style>
<template>
  <div class="index-management con">
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
          HQMS指标管理通过ETL技术将HIS、病案管理系统、电子病历系统、院感、手术麻醉、单病种系统、合理用药和其他医院信息化系统中分布的异构数据源的数据抽取到临时中间层后进行清洗、转换、集成，最后加载到数据仓库中，成为数据联机分析处理、数据挖掘的基础，对全国三级医院的医疗信息质量346个指标数据（合理用药、患者安全、医院感染、手术并发症等）进行提取。
        </p>
        <p class="red">
          指标管理主要实现对全部指标的录入、查看、维护、报警、计算和周报、月报、季报、年报等统计。可实现分科室指标管理，可对各类指标数据自定义管理对比，且具有HIS病案首页和病案室病案首页数据对比功能。
        </p>
        <p>
          上报数据共有346个，同时根据上报的数据自动生成相关监测指标。包括（住院死亡总体情况、新生儿住院死亡情况、手术患者住院死亡情况、麻醉分级ASA分级手术情况、手术风险分级（NNIS分级）、抗菌药物用药、科研成果、科室设置及人员配置......）等。
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
  import flowP from '../../../static/image/index-management/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/index-management/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/index-management-menu.json'
  import headData from '@/data/index-management-title.json'

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
