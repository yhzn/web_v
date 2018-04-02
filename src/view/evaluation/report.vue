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
    head:'月质量简报',
    tips:'每个月各条线质量情况的汇总',
    list:[{
      href:'/evaluation/novreport',
      text:'十一月份医疗质量管理简报'
    },{
      href:'',
      text:'十月份医疗质量管理简报'
    },{
      href:'',
      text:'九月份医疗质量管理简报'
    },{
      href:'',
      text:'八月份医疗质量管理简报'
    },{
      href:'',
      text:'七月份医疗质量管理简报'
    },{
      href:'',
      text:'六月份医疗质量管理简报'
    },{
      href:'',
      text:'五月份医疗质量管理简报'
    }]
  }
  export default {
    data () {
      return {
        menuData,
        headData,
      }
    },
    components:{
      menuList,
      headCon,
    }
  }
</script>
