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
    head:'外来质控目录',
    tips:'近期外来质控记录',
    list:[{
      href:'/qualitycontrol/controlcenter',
      text:'肿瘤化疗质控中心'
    },{
      href:'',
      text:'上海市病历质控中心'
    },{
      href:'',
      text:'妇科质控中心'
    },{
      href:'',
      text:'妇保所'
    },{
      href:'',
      text:'浦东新区中医质控中心'
    },{
      href:'',
      text:'上海市中医质控中心'
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
