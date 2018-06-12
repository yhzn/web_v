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
          决策支持系统可以快速、准确、即时提供有价值的信息给管理者，
          并辅助进行专题分析。加大全院范围内信息资产的利用率，建立统
          一的分析平台。提高信息分析的准确性、一致性、时效性是建设医
          院信息现代化的重要基石。
        </p>
        <p>
          决策支持系统提供了领先的卫统直报数据处理模块，并提供了HBI到
          卫统直报服务器的“一键上报”服务，减轻了医院卫统报送工作的压
          力。分析主题涵盖医院常用软件，包括HIS、PACS、LIS、电子病
          历、病案、人力资源等方面的数据。全方位分析医院的各项经营业
          务数据，为精细化管理和管理决策提供有力的数据支撑。它的核心
          价值体现在以下几点：
        </p>
        <p>
          一、对医院各类数据进行清理整合，构建医院统一的业务数据仓库，实现
          医院数据的规范化持久化管理，实现数据分析应用的长效机制。
        </p>
        <p>
          二、透过数据，全面掌控医院运营中的每一个细节，发现内在的规律和趋
          势，使医院准确获悉“发生了什么”、“为什么发生”、“未来将怎样”，并以
          直观的图表展示给决策者。
        </p>
        <p>
          三、以标准化的病案首页核心，整合各类临床数据，形成完整的数据链，
          解决医院数据的信息孤岛。
        </p>
        <p>
          四、针对卫生统计网络直报平台，进行针对性的优化开发配置，并以此帮
          助医院减轻卫统数据生成、管理、报送等的压力，同时也能明显提高卫统
          数据质量。
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
  import flowP from '../../../static/image/cockpit/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/cockpit/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/cockpit-menu.json'
  import headData from '@/data/cockpit-head-title.json'

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
