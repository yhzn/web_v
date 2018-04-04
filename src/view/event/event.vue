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
    head:'大事件',
    tips:'院级以上宣传推广信息及成果展示',
    list:[{
      href:'/event/analysis',
      text:'我院 “信息化时代下的临床路径管理与分析”'
    },{
      href:'/event/winning',
      text:'喜获长三角医疗质控管理论坛一等奖'
    },{
      href:'',
      text:'我院成为浦东新区感控专业委员会主任委员单位'
    },{
      href:'',
      text:'医务部两项 “东方起航” 课题投入应用'
    },{
      href:'',
      text:'我院国家级临床路径继续教育培训圆满举行'
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
