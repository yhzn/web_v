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
    head:'文件管理',
    tips:'院级以上重要文件信息快速访问入口',
    list:[{
      href:'',
      text:'关于推进按病种收费工作的通知'
    },{
      href:'',
      text:'按病种收费的320个病种目录'
    },{
      href:'',
      text:'医务部工作站良点'
    },{
      href:'',
      text:'医疗质量管理办法'
    },{
      href:'',
      text:'医师执业注册管理办法'
    },{
      href:'',
      text:'卫生部《三级综合医院评审标准实施细则》'
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
