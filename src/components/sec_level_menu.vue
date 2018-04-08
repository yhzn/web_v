<style>

.sec-level-menu .sec-menu{
  color:#fff;
}
.sec-level-menu .sec-menu-title{
  margin:0;
  padding:12px 10px;
  font-size:15px;
  background:#3b6590;
  border-bottom:1px solid #89b75d;
}
.sec-level-menu .sec-menu-title span{
  float:right;
  margin-left:10px;
}
.sec-level-menu .sec-menu-title span.icon{
  top:3px;
}
.sec-level-menu .sec-menu-title.active{
  background:#11294b;
}
.sec-level-menu .sec-menu-title.shadow{
  background:rgba(203,207,255,0.3);

}
.sec-level-menu .sub-menu{
  margin:0 10px;
}
.sec-level-menu .sub-menu li{
  padding:12px 10px;
  font-size:15px;
  text-align: center;
  background:#11294b;
  border-bottom:1px solid #89b75d;
}
.sec-level-menu .sub-menu li.active{
  background:#4983a6;
}
.sec-level-menu .sub-menu li.shadow{
 background:rgba(203,207,255,0.3);
}
</style>
<template>
<div class="sec-level-menu">
  <ul class="sec-menu">
    <li v-for="(item, index) in secMenu">
      <p class="sec-menu-title" :class="{active:item.active, shadow:titleState==index}" @touchstart="titleStateFun(index)" @touchend="showSubMenu(index)">
        {{item.text}}
        <span class="glyphicon glyphicon-menu-right icon" aria-hidden="true"  v-show="!item.active"></span>
        <span class="glyphicon glyphicon-menu-down icon" aria-hidden="true" v-show="item.active"></span>
        <span>更多</span>
      </p>
      <ul class="sub-menu" v-show="item.active">
        <li :class="{active:subItem.active, shadow:listState==subIndex}" v-for="(subItem, subIndex) in item.subList" @touchstart="listStateFun(subIndex)" @touchend="subMenu(index,subIndex,subItem.href)">
          {{subItem.text}}
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      titleState:null,
      listState:null,
    }
  },
  props:['secMenu'],
  methods:{
    showSubMenu (res) {
      this.titleState=null;
      this.secMenu.filter(r => {
        // 过滤出选中的列表
        return !this.secMenu[res].active
      }).map(v => v.active=false);

      this.secMenu[res].active=!this.secMenu[res].active
    },
    subMenu (index,subIndex,href) {
      this.listState=null;
      // 初始化菜单选项
      this.secMenu.every(v => {
        return !v.subList.some(s=>{
          s.active=false;
          return false
        },this)
      },this);
      // 选中项加标记
      this.secMenu[index].subList[subIndex].active=true;
      this.$router.push(href)
    },
    titleStateFun (res) {
      this.titleState=res;
    },
    listStateFun (res) {
      this.listState=res;
    }

  }
}
</script>
