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
            <router-link to="/evaluation/check_norm">
            <div>
              <p>医疗质量指标</p>
              <p>考核与反馈</p>
            </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderSec">
            <router-link to="/evaluation/check_quality">
            <div>
              <p>病历质量</p>
              <p>考核与反馈</p>
            </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderThr">
            <router-link to="/evaluation/check_crisis">
            <div>
              <p>危机值</p>
              <p>考核与反馈</p>
            </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFou">
            <div>
              <p>内部考核与</p>
              <p>反馈总表</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFiv">
            <div>
              <p>临床路径与医疗</p>
              <p>信息考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderOne">
            <div>
              <p>手术管理质量</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderSec">
            <div>
              <p>会话</p>
              <p>管理与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderThr">
            <div>
              <p>门诊质量</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFou">
            <div>
              <p>医技质量</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFiv">
            <div>
              <p>感染控制质量</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderOne">
            <div>
              <p>预防保健质量</p>
                <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderSec">
            <div>
              <p>抗菌药</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderThr">
            <div>
              <p>输血安全</p>
              <p>管理与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFou">
            <div>
              <p>医疗技术</p>
              <p>考核与反馈</p>
            </div>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="lineBorderFiv">
            <div>
                <p>值班交接班</p>
                <p>考核与反馈</p>
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
  let headData={
    href:'/qualityPage',
    text:"医疗质量信息管理系统"
  }
  let data={
    head:'内部质控-考核与反馈',
    tips:'每天医务部考察科室内容'
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
