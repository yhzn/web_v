<style>
</style>
<template>
  <div>
    <head-con :headData="headData"></head-con>
    <menu-list :data="menuData"></menu-list>
  </div>
</template>
<script>
  import menuList from '@/components/menu_list.vue'
  import headCon from '@/components/head.vue'

  let headData={
    href:'/qualityPage',
    text:"医疗质量信息管理系统"

  }
  let menuData={
    head:'通知公告',
    tips:'日常工作下发信息，与OA系统无缝对接',
    list:[{
      href:'/notice/newsletter',
      text:'浦东新区医学会学术活动简讯”'
    },{
      href:'',
      text:'2018年成人麻疹加强免疫接种时间通知'
    },{
      href:'',
      text:'2018年两会期间应急班排班表'
    },{
      href:'',
      text:'关于浦东新区医学会举办《压力蒸汽......'
    },{
      href:'',
      text:'关于“A+”、“O+”悬浮红细胞库存紧张的通知'
    },
    {
      href:'',
      text:'关于2018年1月南院医疗质量反馈内容挂网的通知'
    },
    {
      href:'',
      text:'2018年3月份本部、南院支援急诊人员备班表'
    }
    ]
  }
  export default {
    data () {
      return {
        headData,
        menuData,


      }
    },
    components:{
      headCon,
      menuList
    }
  }
</script>
