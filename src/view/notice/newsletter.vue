<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        浦东新区医学会学术活动简讯
      </div>
      <p>各医疗机构：</p>
      <p class="text-indent">
        定于2018年3月17日（周六）在上海市第十人民医院举办<strong>“2018消化前沿上海论坛”</strong>的学术会议。具体安排如下：
      </p>
      <p>一、会议时间：2018年3月17日上午8:00开始</p>
      <p>二、会议地点：上海市第十人民医院2号楼1楼会议室</p>
      <p>三、参加对象：各级医疗机构消化内科、消化外科、内镜及全科医师</p>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'

  let headData={
    href:'/notice/notice',
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
