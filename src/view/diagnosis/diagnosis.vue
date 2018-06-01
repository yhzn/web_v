<style>
  .diagnosis .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .diagnosis .main-sec-title{
    margin:20px 10px;
  }
  .diagnosis .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .diagnosis .red{
    color:red;
  }
</style>
<template>
  <div class="diagnosis con">
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
          急诊分级分诊是指通过对患者的病情进行简短的临床评估，依据其病情的轻重缓急安排优先诊疗次序，合理分配医疗资源，目标是在正确的时间、地点对患者实施正确的医疗帮助。该系统结合现阶段最先进的计算机网络技术和信息管理技术，建立科学规范的急诊分级量化指标，将急诊病情的初步判断前移至急诊分诊台，旨在实现急诊病人迅速且适当的分级处理，且合规合理的优化分配有限的医疗资源，提供一套解决急诊分级分诊实施、分级分诊记录和查询、分级分诊的量化指标维护、患者症状维护的信息系统。通过跟监护设备对接实现快速采集分级所需要的分级量化指标值，通过可配置化的逻辑判断语法对指标进行快速准确的分级。
        </p>
        <p>
          <span class="red">本急诊分诊信息管理系统主要设计使用对象是急诊科的管理者和急诊分诊台护士。</span>系统制定了可量化的成人急诊分级分诊标准，该标准包括8项量化指标、48项通科优先级患者常见主诉或症状和25项创伤优先级患者常见主诉或症状。分诊台按要求录入系统所需信息，系统可自动对患者进行分级分诊。
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
  import flowP from '../../../static/image/diagnosis/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/diagnosis/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/diagnosis-menu.json'
  import headData from '@/data/diagnosis-title.json'

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
