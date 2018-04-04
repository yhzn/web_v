<style>
  .footer{
    background:#000;
    height:60px;
  }
  .footer .thr-list{
    float:left;
    width:33.3333%;
  }
  .footer dl{
    width:60px;
    margin:8px auto;
    color:#fff;
  }
  .footer dl.active{
    color:#69fded;
  }
  .footer dt{
    width: 30px;
    height: 28px;
    margin: auto;
    margin-bottom: 5px;
  }
  .footer dd{
    text-align: center;
  }
  .footer dl.active{
    color:#69fded;
  }
  .footer .system_btn dt{
    background:url('../../static/image/icon/summary.png');
    background-size:100% 100%;
  }
  .footer .system_btn.active dt{
    background:url('../../static/image/icon/summary_click.png');
    background-size:100% 100%;

  }
  .footer .fun_btn dt{
    background:url('../../static/image/icon/detailed.png');
    background-size:100% 100%;

  }
  .footer .fun_btn.active dt{
    background:url('../../static/image/icon/detailed_click.png');
    background-size:100% 100%;

  }
  .footer .other_btn dt{
    background:url('../../static/image/icon/flow.png');
    background-size:100% 100%;

  }
  .footer .other_btn.active dt{
    background:url('../../static/image/icon/flow_click.png');
    background-size:100% 100%;

  }

</style>
<template>
  <div class="footer">
    <div class="thr-list">
      <dl class="system_btn"  :class="{active:btnActive=='system'}" @click="togglePage('system')">
        <dt></dt>
        <dd>{{footBtnData.fir}}</dd>
      </dl>
    </div>
    <div class="thr-list">
      <dl class="other_btn"  :class="{active:btnActive=='other'}" @click="togglePage('other')">
        <dt></dt>
        <dd>{{footBtnData.sec}}</dd>
      </dl>
    </div>
    <div class="thr-list">
      <dl class="fun_btn" :class="{active:btnActive=='fun'}" @click="togglePage('fun')">
        <dt></dt>
        <dd>{{footBtnData.thr}}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        btnActive:'fun',
      }
    },
    components:{

    },
    props:['footBtnData'],
    methods:{
      togglePage (page) {
        this.btnActive=page;
        this.$emit('togglePage',page)
      }
    }

  }
</script>
