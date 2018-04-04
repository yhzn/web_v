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
    head:'外来质控反馈',
    tips:'针对外来质控专家提出的问题，医院进行的整改方案',
    list:[{
      href:'/feedback/confluence',
      text:'2016年上半年外部质控汇总'
    },{
      href:'',
      text:'6.24妇科质控主要问题'
    },{
      href:'',
      text:'6.24妇科质控问题'
    },{
      href:'',
      text:'2015年上半年外部质控汇总'
    },{
      href:'',
      text:'2015年下半年外部质控汇总'
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
