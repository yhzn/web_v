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
    head:'通知联络',
    tips:'各科室及中层以上干部联系方式',
    list:[{
      href:'',
      text:'本部各科室联系方式'
    },{
      href:'',
      text:'中层及以上干部通讯录'
    },{
      href:'',
      text:'医务部联系电话'
    },{
      href:'',
      text:'本部临床路径管理员联系表'
    },{
      href:'',
      text:'本部各科室医干联系表'
    },{
      href:'',
      text:'本部床位分布图'
    },{
      href:'',
      text:'本部科室分布图'
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
