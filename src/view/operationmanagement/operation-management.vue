<style>
  .ope-man .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .ope-man .main-sec-title{
    margin:20px 10px;
  }
  .ope-man .main-sec{
    margin:0 10px;
    color:#fff;
  }
</style>
<template>
  <div class="ope-man con">
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
          手术管理模块主要完成对全院手术信息进行维护，并直接控制到业务程序的手术基本信息；对医生手术资质申请流程进行管理；对全院手术开展情况的统计分析并对医生的相关信息进行查询。包括手术目录、手术资质申请、手术登记统计、手术统计分析、全院统计分析、分科统计分析等。
        </p>
       <p>手术管理主要包括以下几方面的功能场景：全院手术的信息维护管理；医生手术资质申请及审核管理；全院手术开展情况统计分析查询。</p>
       <p>一、手术管理包含了手术分布表、介入操作分布表、全院当天手术级别例数分布图、全院当天手术类别例数分布图、全院当天重大/二进宫/外籍手术例数图、全院当天医疗技术例数分布图、全院当天介入操作名称例数分布图等。</p>
       <p>二、手术资质申请模块实现医生申请手术资质，管理部门审批考核以及手术和医生档案查询等功能。</p>
       <p>三、手术目录模块主要实现对手术目录详细信息进行查询和编辑，对医师手术及操作资质详细信息进行查询和编辑。</p>
       <p>四、手术登记统计模块主要对一些特殊手术情况进行申请和登记。</p>
       <p>五、手术统计分析模块包括电子首页手术统计基础表、病案首页手术统计基础表等。</p>
       <p>六、手术综合统计分析分为全院模块和分科模块，全院层面上可实现包括全院手术总例数分布、全院各科室手术及操作例数分布、手术级别分布、手术预后分布、全院特殊手术分布、手术类别分布、手术完成情况、手术费用分布、手术费用明细分析、环比同比分析等这些模块功能。</p>
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
  import flowP from '../../../static/image/operation/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/operation/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/operation-management-menu.json'
  import headData from '@/data/head_data.json'

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
