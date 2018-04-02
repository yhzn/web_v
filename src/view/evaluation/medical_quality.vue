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
    head:'季度医疗质量讲评',
    tips:'每季度医疗质量的汇总讲评',
    list:[{
      href:'/evaluation/comment',
      text:'2017年第一季度抗生素临床合理用药讲评'
    },{
      href:'',
      text:'输血科2017年第二季度讲评'
    },{
      href:'',
      text:'第一季度临床输血质量讲评'
    },{
      href:'',
      text:'2016年11月份本部处方医嘱点评'
    },{
      href:'',
      text:'2016年10月北院处方医嘱点评'
    },{
      href:'',
      text:'输血科2016年第四季度讲评'
    },{
      href:'',
      text:'输血科2016年第三季度讲评'
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
