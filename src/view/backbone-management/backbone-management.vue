<style>
  .backbone-management .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .backbone-management .main-sec-title{
    margin:20px 10px;
  }
  .backbone-management .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .backbone-management .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="backbone-management con">
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
          科室与医疗骨干管理主要是指医院制度、人员、经济、医疗工作、质量、设备、科研教学和信息等方面的综合协同管理，能够有效的提升医院整体管理水平，提高医护人员工作效率，确保医疗质量，减少医疗事故进而提高所有科室整体运营效率，促进科室间的合作。
        </p>
        <p>
          本科室与医疗骨干管理系统是针对医院各科医疗骨干的信息业务管理工作而设计，能协助完成各类台账上报、各类表格统计的工作以及与医疗质量管理系统的功能对接。使医疗骨干从纷繁复杂的表格填表中解放出来，提高整体科室的工作效率，促进科室间的交流和合作。
        </p>
        <p>
          科室与医疗骨干管理主要是包含月质量自查、台账、外部质控和科室工作小组的科室综合日常管理。本系统的临床路径管理模块能很好地实现临床路径管理与电子病历系统衔接；病历质量管理模块完全符合国家提出的病历质量管理系统要求规范。
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
  import flowP from '../../../static/image/backbone-management/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/backbone-management/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/backbone-management-menu.json'
  import headData from '@/data/backbone-management-title.json'

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
