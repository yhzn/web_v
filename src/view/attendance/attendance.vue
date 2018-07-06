<style>
  .attendance .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .attendance .main-sec-title{
    margin:20px 10px;
  }
  .attendance .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .attendance .green-light{
    color:#41a68f;
  }
</style>
<template>
  <div class="attendance con">
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
          随着医院的规模的不断扩大，人员的不断增加，各种类型的会议给人事部门的考勤管理和会议室管理带来很大的工作量。传统的考勤采用纸张或邮件的形式手工统计，通过人工记录等方式进行考核。这种处理方式，信息量强度很大，很容易出错，且记录考勤及休假的真实性和实时性不高，已很难以适应医院的需求。传统的会议室管理，也是采用纸质表格登记管理，低效而且易出错。
        </p>
        <p>
          医院会议考勤系统的目的通过会议考勤管理系统的使用，可以轻松记录、汇总、分析医院员工参加会议的出勤情况，从而更好地做好医院的各项工作安排，提高了工作效率，实现了对医院员工考勤的信息化管理。
        </p>
        <p>
          会议考勤管理系统采用Microsoft ADO数据接口，默认采用单机Access2000数据库，可根据实际情况重新设置数据连接。考勤机采集的数据自动导出到考勤管理程序中，考勤管理系统通过配置能够自动从考勤管理程序中导入数据。对于不同型号的考勤机，可通过接口轻松实现。
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
  import flowP from '../../../static/image/attendance/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/attendance/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/attendance-menu.json'
  import headData from '@/data/attendance-title.json'

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
