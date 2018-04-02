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
    head:'信息更新公告',
    tips:'涉及医疗信息系统的信息、功能更新',
    list:[{
      href:'/update/project',
      text:'2017年上半年医疗质量信息管理平台主要项目进展'
    },{
      href:'',
      text:'2017年上半年临床路径信息系统更新'
    },{
      href:'',
      text:'2017年上半年电子病历信息更新汇总'
    },{
      href:'',
      text:'病案首页系统更新情况'
    },{
      href:'',
      text:'手麻系统更新情况'
    },
      {
        href:'',
        text:'临床路径系统更新情况'
      },
      {
        href:'',
        text:'病历系统更新完成情况'
      },
      {
        href:'',
        text:'HIS系统更新完成情况'
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
