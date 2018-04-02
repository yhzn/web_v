<style>
  .menuCon{
     background:#1d4761;
  }
  .menuCon .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .menuCon .title-msg p{
    white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    overflow: hidden;
  }
  .menuCon .menu-list{
    color:#fff;
    padding:10px 20px;
    font-size:14px;
    background:#1d4061;
    border-bottom:1px solid #395b76;
  }
  .menuCon .menu-list a{
    color:#fff;
    text-decoration: none;
  }
  .menuCon .menu-list a.active{
    color:#0cc1ca;
  }
  .menuCon .menu-list span{
    margin-right:10px;
  }
</style>
<template>
  <div class="menuCon cont">
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>
    <div class="main">
      <div class="menu-list" v-for="item in data.list">
        <router-link :to="item.href"  :class="{active:item.href!=''}">
          <span>&gt;</span>{{item.text}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../static/image/icon/head_title.png'
  import bgTheme from '../../static/image/bg_theme.png'

  export default {
    data () {
      return {
        headTitleIcon,
        bgTheme
      }
    },
    props:['data'],
    components:{
      headTitle
    }

  }
</script>
