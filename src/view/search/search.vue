<style>
  .search .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .search .main-sec-title{
    margin:20px 10px;
  }
  .search .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .search .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="search con">
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
          近年来医院对于医疗信息化越来越重视，发展的速度属于高速发展，医疗数据的类型和规模正以前所未有的速度快速增长，医疗数据的体量已让医疗真正进入大数据时代。医疗行业的特点使得医疗行业数据在积累上领先，但在数据应用水平上落后与金融、通信等行业的数据应用。在我们公司的先点后面、先线下后线上的战略规划指导思路下,开发了一个基于我公司数据中心平台基础开发出来的医疗数据查询系统。我公司参考医疗数据标准,分别抽取：通过规则校对的HIS、LIS、RIS数据、后结构化电子病历数据到CDR数据中心。
        </p>
        <p>
          科研数据查询系统可在医疗方面实现以下功能：一、医生可以通过订阅指标的方式来查询相关科研信息，医生可以直观的分析所需的医疗数据来印证自己论点；二、通过输入病人的关键症状以及其他指标信息,给出相关可能性的疾病诊断及确诊方法，以及以往最有效的治疗方案。后续规划在网上通过引导患者在录入自己的相关症状，给出有可能性的疾病诊断，甚至与可以根据各个可能性疾病推荐与之在对应治愈成功率最高、治疗方案最成熟、治疗周期最短、治疗效果最好等相关医院。
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
  import flowP from '../../../static/image/search/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/search/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/search-menu.json'
  import headData from '@/data/search-title.json'

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
