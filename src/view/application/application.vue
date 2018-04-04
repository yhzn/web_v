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
  import headData from '@/data/head_data.json'

  let menuData={
    head:'应用实例',
    tips:'针对管理工具进行实际操作',
    list:[{
      href:'',
      text:'运用PDCA循环改善传染病报告'
    },{
      href:'',
      text:'运用PDCA循环改进对住院时间超过30天的患者管理项目'
    },{
      href:'',
      text:'运用PDCA循环提高病案首页诊断准确性'
    },{
      href:'',
      text:'手卫生依从性的PDCA循环管理'
    },{
      href:'',
      text:'品管圈在急性缺血性卒中门急诊流程再造的应用'
    },{
      href:'',
      text:'应用PDCA方法实施值班交接班的持续质量改进'
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
