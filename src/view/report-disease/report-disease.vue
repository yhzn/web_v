<style>
  .report-disease .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .report-disease .main-sec-title{
    margin:20px 10px;
  }
  .report-disease .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .report-disease .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="report-disease con">
    <head-con :headData="headData"></head-con>
    <div class="main bg-theme" v-show="showPage=='system'">
      <div>
        <img src="" alt="" v-lazy="banner">
      </div>
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="bannerTitle">
      </div>
      <div class="main-sec">
        <p>防保科通过本系统管理临床科室完成疾控中心所要求的有关传染病上报、监测等内容，防保科审核报至疾控中心。主要功能有：</p>
        <p>
          <span class="green-light">1、传染病上报卡：</span>
          科室发现传染病上报防保科，防保科审核后，上报疾控中心。
        </p>
        <p>
          <span class="green-light">2、门诊、住院日志：</span>
          防保科查看门诊就诊和住院病人情况。
        </p>
        <p><span class="green-light">3、COPD数据导出：</span>
          查看、导出慢性阻塞性肺疾病人信息。
        </p>
        <p><span class="green-light">4、恶性肿瘤疾病上报卡：</span>
          医生上报恶性肿瘤病人至防保科。</p>
        <p><span class="green-light">5、A/B代码查询：</span>
          防保科查看全院诊断为A/B编码里的疾病的病人信息并填写处理结果。</p>
        <p><span class="green-light">6.AFP查询：</span>
          防保科查看全院诊断为AFP编码里的疾病的病人信息。
        </p>
        <p><span class="green-light">7.急性腹泻病分诊：</span>
          防保科查看门诊诊断为腹泻和肠炎的非肠道门诊病人信息并填写处理结果。
        </p>
        <p><span class="green-light">8、肠道门诊模块：</span>
          医生在病人就诊时填写肠道小卡，生成肠道登记本、腹泻监测汇总、腹泻送检单、腹泻个案登记表</p>
        <p><span class="green-light">9、儿科模块：</span>
          儿科护士上报呼吸道监测数据，生成不明原因肺监测主动搜索登记表、儿科流感监测周报、儿科数据汇总表。</p>
        <p><span class="green-light">10、性病科模块：</span>
          取全院检验为性病的病人，性病科医生填写处理结果，防保科考核，性病科医生在病人就诊时填写性病小卡，生成性病登记本。。</p>
        <p><span class="green-light">11、检验科模块：</span>
          取性病科申请的HIV检验或者梅毒检验为阴性的病人，检验科维护血清编号，生成艾滋病哨点监测项目血样集体送检单，检验科填写提交防保科审核，生成月报。</p>
        <p><span class="green-light">12、肝炎门诊模块：</span>
          肝炎门诊医生在病人就诊时填写肝炎小卡，生成肝炎登记本。
        </p>
        <p><span class="green-light">13.发热门诊模块：</span>
          发热门诊医生在病人就诊时填写发热小卡，生成发热登记本</p>
        <p><span class="green-light">14、肺科模块：</span>
          肺科医生查看、审核传染病种为结核的传报卡。</p>
        <p><span class="green-light">15、麻疹风疹阳性：</span>
          防保科查看麻疹风疹检验为阳性的病人信息。</p>
        <p><span class="green-light">16、肝炎阳性指标平：</span>
          取全院肝炎检验指标为阳性的病人，医生填写处理结果及备注。</p>
        <p><span class="green-light">17、发热血检：</span>
          取发热门诊病人，发热检验科维护血检病人，生成发热病人疟疾血检登记及送检复核工作表。</p>
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
  import flowP from '../../../static/image/report-disease/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/report-disease/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/report-disease-menu.json'
  import headData from '@/data/report-disease-title.json'

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
