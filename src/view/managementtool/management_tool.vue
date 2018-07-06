<style>
  .check .thr-list{
    float:left;
    width:33.3333%;
  }
  .check .thr-list .text{
    position: relative;
    margin:5px;
    height:70px;
    text-align: center;
    color:#fff;
    background-size:100% 100%;
    background-repeat: no-repeat;
  }
  .check .thr-list .text div{
    position: absolute;
    width:100%;
    top:50%;
    color:#fff;
    transform:translateY(-50%);
  }
  .check .main p{
    margin-bottom:0px;
  }
</style>
<template>
  <div class="txt cont chart check">
    <head-con :headData="headData"></head-con>
    <head-title :dataHead="data.head" :dataTips="data.tips" :headTitleIcon="headTitleIcon"></head-title>
    <div class="main">
      <div class="clearFix">
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderOne">
            <router-link to="/managementtool/pdca">
              <div>
                PDCA循环
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderSec">
              <div>
                <p>从经验管理走向</p>
                <p>科学管理</p>
              </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderThr">
              <div>
                鱼骨图分析法
              </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFou">
            <div>
              <p>FMEA失效模式</p>
              <p>与影响分析</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFiv">
            <div>
             SMART原则
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderOne">
            <div>
              决策树分析法
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderSec">
            <div>
             5S现场管理法
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderThr">
            <div>
              六西格玛管理法
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import headTitle from '@/components/head_title'
  import headTitleIcon from '../../../static/image/icon/head_title.png'
  import lineBorderOne from '../../../static/image/border/line-border-1.png'
  import lineBorderSec from '../../../static/image/border/line-border-2.png'
  import lineBorderThr from '../../../static/image/border/line-border-3.png'
  import lineBorderFou from '../../../static/image/border/line-border-4.png'
  import lineBorderFiv from '../../../static/image/border/line-border-5.png'
  import headData from '@/data/head_data.json'

  let data={
    head:'管理工具',
    tips:''
  }
  export default {
    data () {
      return {
        headData,
        data,
        headTitleIcon,
        lineBorderOne,
        lineBorderSec,
        lineBorderThr,
        lineBorderFou,
        lineBorderFiv,
      }
    },
    components:{
      headCon,
      headTitle,
    }
  }
</script>
