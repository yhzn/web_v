<style>
  .care .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .care .main-sec-title{
    margin:20px 10px;
  }
  .care .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .care .red{
    color:red;
  }
</style>
<template>
  <div class="care con">
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
          “医护一体化”是指医生和护士形成相对固定的诊疗团队，以医护小组的形式为病人提供治疗、护理、康复一体化的责任制整体医疗服务。“医护一体化”工作模式打破了原有的医患、护患两条平行线的模式，重建医、护、患三位一体的崭新工作格局，护士参与诊疗计划的制定，共同讨论治疗护理方案，医护共同查房及病例讨论，在为病人提供整体护理的基础上提供整体医疗服务。
        </p>
        <p>
          “医护配合治护一体化”的护理新模式，即由三线(组长)、二线、一线组成的医生系列和二级责任护士、一级责任护士、助理护士组成的护士系列共同构成一个“医护一体化”的治疗护理小组。每组由二级责任护士以管理重病人为主，一级责任护士以管理轻病人为主。患者整个住院期间的一切治护活动和出院后的随访与指导均固定由同一组医护人员负责，大大地缩短了医护患之间的距离，从而极大地提高术后生活质量与生存率，保证了治疗效果。
        </p>
        <p>
          医护一体化系统综合录入了患者及医生的诊治信息，可以直观的了解患者信息及医护项目，可查询统计护理单汇总、医嘱汇总、病人统计，更好的方便治疗护士进行相关护理工作。
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
  import flowP from '../../../static/image/care/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/care/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/care-menu.json'
  import headData from '@/data/care-title.json'

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
