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
    head:'资质项目申请入口',
    tips:'为医务人员提供相关流程操作快捷入口',
    list:[{
      href:'',
      text:'医疗技术申请'
    },{
      href:'',
      text:'手术资质申请'
    },{
      href:'',
      text:'执业注册申请'
    },{
      href:'',
      text:'执业变更申请'
    },{
      href:'',
      text:'多点执业申请'
    },{
      href:'',
      text:'处方权申请'
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
