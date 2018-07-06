<style>
  .department-scheduling .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .department-scheduling .main-sec-title{
    margin:20px 10px;
  }
  .department-scheduling .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .department-scheduling .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="department-scheduling con">
    <head-con :headData="headData"></head-con>
    <div class="main bg-theme" v-show="showPage=='system'">
      <div>
        <img src="" alt="" v-lazy="banner">
      </div>
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="bannerTitle">
      </div>
      <div class="main-sec">
        <p>为实现医院医师、护士排班工作的自动化、电子化，方便和简化医院各科室的排班工作，使更多的临床管理人员从烦琐的手工排班中解放出来，以便更好地服务于医疗，研发了科室排班管理系统。</p>
        <p>
          本系统包含系统管理、基础数据管理、排班管理、审核管理和报表管理五大功能模块。系统支持APN连续性排班、DN排班等多种模式，灵活定义各值班班组人员的组成，可以对各种职业、职位、职称人数的安排设置定义，对排班的规则可以根据科室的实际情况进行设置，系统按照设置的规则和参数自动配置生成排班方案，并做到连续、公平、公正。 
        </p>
        <p>
          通过本系统，医院各科室能够方便和快捷地完成本科室的值班计划，大大减少了排班工作量。同时根据各个科室提交的值班计划，系统可以抽取各科室排班计划自动生成医院当天的值班计划，总值班及相关工作人员可以清晰明了的查看当天值班计划，同时还可以查看历史和未来时间的值班计划。同时，本系统与 HIS 进行衔接，实现了对医护人员排班工作的规范化，信息化管理。
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
  import flowP from '../../../static/image/department-scheduling/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/department-scheduling/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/department-scheduling-menu.json'
  import headData from '@/data/department-scheduling-title.json'

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
