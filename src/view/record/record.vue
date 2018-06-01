<style>
  .record .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .record .main-sec-title{
    margin:20px 10px;
  }
  .record .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .record .red{
    color:red;
  }
</style>
<template>
  <div class="record con">
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
          电子病历系统为医生提供病历书写的便捷方式，可根据患者病情变化来升降患者的急诊等级，从患者中选取需提交人员进行提交，也可套用病历模板进行细节修改。主任级别可以对电子病历进行增加、删除、修改、批注等操作。该系统由以下优点：
        </p>
        <p>
          一、提高病历合格率。一方面需要通过各种管理手段以及规章制度来保证，另一方面需要结合各种新技术，通过可行的技术途径来整合各种资源，明确将职责落实到具体个人，提高医院对病案质量的管理能力，通过统计、分析、预警、三级质量评定等事前控制手段，能有效的提醒和督促医务人员按时、按质完成病历书写工作。提高病历甲级率，从而提高医院提供综合竞争力。
        </p>
        <p>
          二、节省时间。对于医生来说，每天要接治多名患者，日常工作中70%的时间用于手工书写病历。通过电子病历系统提供的多种规范化的模板及辅助工具，不仅可以将医务人员从繁琐重复的病历文书书写工作中解脱出来，集中精力关注病人的诊疗，而且通过模板书写的病历更加完整、规范，同时，还可使医生将更多的时间用于提高自身的业务水平，收治更多的患者，从而可以提高医院的经济效益和医疗水平。
        </p>
        <p>
          三、病案质量。电子病历系统通过提供了完整、权威、规范、严谨的病历模板，避免了书写潦草、缺页、漏项、模糊及不规范用语等常见问题，提高病历审核合格率，提高医院服务综合竞争力。
        </p>
        <p>
          四、稳定病源。电子病历系统为患者提供了长期健康记录，并且支持健康记录快速检索，为医务人员决策提供更多的历史参考资料，提高患者对医院的认可度。
        </p>
        <p>
          五、提高病历质量。纸质病历的内容是自由文本形式，字迹可能不清，内容可能不完整，意思可能模糊。转抄容易出现潜在错误。只能被动地供医生作决策参考，不能实现主动提醒、警告或建议。涂改现象突出，病史书写随意性强，计算机打印病历不适当复制造成"张冠李戴"现象，缺某项病历记录内容，完成病历记录不及时。而电子病历系统从根本上解决了上述问题。
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
  import flowP from '../../../static/image/record/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/record/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/record-menu.json'
  import headData from '@/data/record-title.json'

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
