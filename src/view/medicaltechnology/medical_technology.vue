<style>
  .medical-tec .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .medical-tec .main-sec-title{
    margin:20px 10px;
  }
  .medical-tec .main-sec{
    margin:0 10px;
    color:#fff;
  }
</style>
<template>
  <div class="medical-tec con">
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
          医疗技术做为医疗质量管理的核心，为医院的质量管理提供了极大的便捷，主要分为以下几部分功能：
        </p>
        <p>
          一、实现了无纸化办公。由传统的手写纸质版变为电子统计，将医疗技术文件及相关档案进行分类归档，极大地节省人员时间，方便快捷。
        </p>
        <p>
          二、提高了医疗质量。对医院现有或新兴的医疗技术分门别类的统筹规划，进行合理有效的医疗资质匹配，及时准确的进行督查与评估。
        </p>
        <p>
          三、精确的大数据统筹分析。与相关系统进行对接分析，明确了解相关技术项目的经费发放明细以及所产生的效益，可及时准确的查询相关技术开展情况，了解医疗技术明细及考核状况
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
  import flowP from '../../../static/image/medical/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/medical/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/medical-technology-menu.json'
  import headData from '@/data/medical-head-title.json'

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
