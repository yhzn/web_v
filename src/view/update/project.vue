<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        2017年上半年医疗质量信息管理平台主要项目进展
      </div>
      <p class="text-indent">
        在院领导的大力支持下，由医务部牵头开发的“医疗质量信息管理平台”于 2012年底启动，近几年不断的创新和完善，根据医疗质量管理的核心环节，分为 医疗技术、指标管理、手术管理、能力评估、考核管理、不良事件等模块，实现 了医疗指标数据实时直报（HQMS）与深入挖掘；将医疗质量管理的全过程电子 化，节约了大量的人力成本，能更加快速有效的考核与反馈；医疗数据实时更新， 做到了资源充分共享。
      </p>
      <p class="text-indent">
        2017年上半年开发和完善的项目主要为：
      </p>
      <p class="text-indent">
        1、电子排班模块：排班人员顺序调整的智能调换；审核流程的完善；排班 人员名单的系统核对，排班系统的人性化操作完善等；
      </p>
      <p class="text-indent">
        2、外来质控模块：统计分析模块的完善，直观显示统计图；整改反馈模块 添加主任签名；质控标准模块的完善；
      </p>
      <p class="text-indent">
        3、委员会模块：新增质量委员会系统，实现质量委员会委员、工作职责、 委员会会议通知审核；会议予审的意见和问题交流流程在线操作，并实现委员个 人实时网上提案。
      </p>
      <p class="text-indent">
        4、科室与医疗骨干管理系统：医疗骨干管理的电子化，包含台账管理、考 核反馈、科室重点医疗数据查询，排班管理等模块。
      </p>
      <p class="text-indent">
        5、危急值模块：从医技科室发出危急值，到临床科室进行处置的全流程电 子化。整个模块框架已经确定，目前完成的是医技科室的危急值统一发送。

      </p>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'

  let headData={
    href:'/update/update',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
      }
    },
    components:{
      headCon,
    }
  }
</script>
