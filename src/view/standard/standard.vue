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
    head:'外来质控管理流程和标准',
    tips:'外来操作质控的操作依据',
    list:[{
      href:'/standard/stencil',
      text:'外来质控纪要模版'
    },{
      href:'',
      text:'外来质控检查结果反馈表模版'
    },{
      href:'',
      text:'外来质控流程图'
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
