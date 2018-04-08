<style>
  .quality{
    background:#f1f1f1;

  }
  .quality .hidden{
    display: none;
  }
  .quality .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .quality .main .sum img{
    width:100%;
  }
  .quality p{
    margin:0;
  }
  .quality a{
    color:#fff;
  }
  .quality .icon{
    padding:10px 10px 0;
  }
  .quality .icon a{
    color:#333;
    text-decoration: none;
  }
  .quality .icon dl{
    float: left;
    width:25%;
    height:80px;
    padding-top:10px;
    margin-bottom:10px;
  }
  .quality .icon dt{
    width:36px;
    height:36px;
    margin:0 auto 5px;
  }

  .quality .icon dd{
    text-align: center;
  }
  .quality .icon dl.active{
    background:#d1d1d1;
  }

  .quality .title{
    padding:8px 10px;
    line-height: 14px;
    background: #fff;

    border-bottom:1px solid #ebebeb;
  }
  .quality .title h3{
    padding-left: 5px;
    margin:0;
    font-size:16px;
    border-left:5px solid #3a9be5;
  }
  .quality .list-con{
    font-size:14px;
    padding:10px;
    margin-bottom:20px;
    background:#fff;
  }
  .quality .thr-list{
    float: left;
    width:33.3333%;
  }
  .quality .thr-list .text{
    position: relative;
    height:80px;
    color:#fff;
    font-weight: bold;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .quality .thr-list .text div{
    position: absolute;
    top:50%;
    right:0;
    left:0;
    transform: translateY(-50%);
  }
  .quality .text-right .text div{
    padding-right:10px;
    text-align: right;
  }
  .quality .thr-list:nth-child(1) .text{
    margin-right:10px;
  }
  .quality .thr-list:nth-child(2) .text{
    margin-left:5px;
    margin-right:5px;
  }
  .quality .thr-list:nth-child(3) .text{
    margin-left:10px;
  }
  .quality .tab-list{
    padding-top:10px;
    background:#000000;
  }
  .quality .tab-list .tab-text{
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height:46px;
    color:#fff;
    margin:0 5px 10px;
  }
  .quality .tab-list .tab-text div{
    position: absolute;
    top:50%;
    width:100%;
    text-align: center;
    transform: translateY(-50%);
  }
  .quality .sec-list{
    float:left;
    width:50%;
  }
  .quality .sec-list .text {
    position:relative;
    height:90px;
    color:#fff;
    font-size:14px;
  }
  .quality .sec-list .text div{
    position:absolute;
    width:100%;
    top:50%;
    text-align: center;
    transform: translateY(-50%);
  }
  .quality .sec-list .text:nth-child(1){
    margin-right:5px;
  }
  .quality .sec-list .text:nth-child(2){
    margin-left  :5px;
  }
  .quality .footer .other_btn dt{
    background:url('../../static/image/icon/contact.png');
    background-size:100% 100%;
  }
  .quality .footer .other_btn.active dt{
    background:url('../../static/image/icon/contact_click.png');
    background-size:100% 100%;

  }

  .quality .sum {
    height:157px;
  }
  .quality .sum img{
    width:100%;
    height:100%;
  }
  .quality .text-indent{
    text-indent: 2em;
    margin-bottom:5px;
  }
  .quality .green-light{
    color:#fff;
    background:#1d4761;
  }
  .quality .green-light h3{
    font-size:16px;
    text-align: center;
  }
  .quality .green-light .red{
    color:#ff0000;
  }
  .quality .green-light .sum-text{
    margin:0 10px;
  }
  .quality .contact{
    padding:10px 20px;
  }
  .quality .contact-title{
    text-align: center;
    font-size: 16px;
    height: 28px;
    border-bottom: 1px solid #b6b6b6;

  }
  .quality .contact li a{
    color:#2c3e50;
  }
  .quality .contact li span{
    display: block;
  }
  .quality .contact li span:nth-child(1){
    float:left;
    width:70px;
  }
  .quality .contact li span:nth-child(2){
    margin-left:75px;
  }
  .quality .router-link-active{
    background:red;
  }
</style>
<template>
<div class="quality cont">
  <head-con :headData="headData"></head-con>
  <div class="main green-light"  v-show="showPage=='system'">
    <div class="sum">
      <img src="" alt="" v-lazy="summary">
    </div>
    <div class="sum-text">
      <h3>概述系统</h3>
      <p class="text-indent">医疗质量信息管理平台就是利用先进的信息技术、建立医疗质量实时控制模式，将质控重点从终末结果反溯前移至诊疗环节预防，实现医院质量信息的高度共享与集成，而建设的一整套包括医技质量管理、医疗指标管理、手术质量管理、不良事件上报、医师能力评估等在内的信息系统。</p>

      <p class="text-indent">
        <span class="red">系统采用B/S模式架构，开发工具为.NET，数据库使用SQL SERVER 2008，同时也支持使用 ORACLE，</span>可以帮助医疗机构管理医生的工作规范，简便医院管理者的工作方式，实现对医生全面整体能力评估，控制实际业务从而提高医疗质量。
      </p>
      <p class="text-indent">
        系统通过SOA面向服务管理架构模式实现应用组件的有效整合，完成应用系统的统一化管理与维护。系统主要设计使用对象是医院的医务管理者，例如医务部等。同时，医院科研管理和绩效管理也均可以使用本系统开展工作
      </p>
    </div>
  </div>
  <div class="main" v-show="showPage=='other'">
    <h3 class="contact-title">延华智能医疗</h3>
    <div class="contact">
      <ul>
        <li><span>联&nbsp;&nbsp;系&nbsp;&nbsp;人：</span><span>李鹏海（业务顾问）</span></li>
        <li><span>联系电话：</span><span><a href="tel:18917672050">18917672050</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:86-21-61818686">86-21-61818686</a></span></li>
        <li><span>微&nbsp;&nbsp;信&nbsp;&nbsp;号：</span><span>hzmaolv</span></li>
        <li><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span><span>上海市普陀区西康路1255号普陀科技大厦6/7/11/17层</span></li>
        <li><span>路&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;线：</span><span>地铁7号线、13号线至长寿路（3号口）下车，步行377米<br/>公交837路至长寿路西康路下车，步行306米</span></li>
      </ul>
      <div>
        <img src="" alt="" v-lazy="contact">
      </div>
    </div>
  </div>
  <div class="main"  v-show="showPage=='fun'">
    <div class="icon clearFix">
      <div>
        <dl v-for="(iconItem, iconIndex) in iconData" :class="{active:iconActive==iconIndex}" @touchstart="goStart(iconIndex)" @touchend="goEnd(iconItem.href)">
          <dt><img src="" v-lazy="iconItem.img"></dt>
          <dd>
            {{iconItem.text}}
          </dd>
        </dl>
      </div>
    </div>
    <div class="title">
      <h3>院部事件、信息公告</h3>
    </div>
    <div class="list-con">
      <div class="clearFix">
        <div class="thr-list text-right">
          <router-link to="event/event">
            <div class="text" v-lazy:background-image="event">
              <div>
                大事件
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/notice/notice">
            <div class="text" v-lazy:background-image="notice">
              <div>
                通知公告
              </div>
            </div>
          </router-link>

        </div>
        <div class="thr-list">
          <router-link to="/update/update">
            <div class="text" v-lazy:background-image="toUpdate">
              <div>
                信息更新公告
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>指标数据</h3>
    </div>
    <div class="list-con">
      <div class="tab-list clearFix">
        <div class="thr-list text-right">
          <div class="tab-text" v-lazy:background-image="colorBorder_1">
            <router-link to="/target/hospital">
              <div>
                住院病人统计
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="tab-text" v-lazy:background-image="colorBorder_2">
            <router-link to="/target/treatment">
              <div>
                门急诊统计
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="tab-text" v-lazy:background-image="colorBorder_3">
            <router-link to="/target/register">
              <div>
                挂号统计
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="tab-text" v-lazy:background-image="colorBorder_4">
            <router-link to="/target/norm">
              <div>
                年度指标
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="tab-text" v-lazy:background-image="colorBorder_5">
            <router-link to="/target/scheduling">
              <div>
                科室排班
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="tab-text" v-lazy:background-image="colorBorder_6">
            <router-link to="/target/endanger">
              <div>
                危急值管理
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>外来质控</h3>
    </div>
    <div class="list-con">
      <div class="clearFix">
        <div class="thr-list">
          <div class="text" v-lazy:background-image="catalog">
            <router-link to="/qualitycontrol/qualitycontrol">
              <div>
                <p>外来质控</p>
                <p>目录</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="feedBack">
            <router-link to="/feedback/feedback">
              <div>
                <p>外来质控</p>
                <p>反馈</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="thr-list">
          <div class="text" v-lazy:background-image="flow">
            <router-link to="/standard/standard">
              <div>
                <p>外来质控</p>
                <p>管理流程和标准</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>质量与考核</h3>
    </div>
    <div class="list-con">
      <div class="tab-list clearFix">
        <div class="thr-list text-right">
          <router-link to="/evaluation/check">
            <div class="tab-text" v-lazy:background-image="colorBorder_1">
              <div>
                <p>内部质控</p>
                <p>考核与反馈</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/evaluation/report">
            <div class="tab-text" v-lazy:background-image="colorBorder_2">
              <div>
                月质量简报
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/evaluation/record">
            <div class="tab-text" v-lazy:background-image="colorBorder_3">
              <div>
                <p>协调会议记录及</p>
                <p>签到</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/evaluation/medicalquality">
            <div class="tab-text" v-lazy:background-image="colorBorder_4">
              <div>
                季度医疗质量
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/evaluation/inspectionresult">
            <div class="tab-text" v-lazy:background-image="colorBorder_5">
              <div>
                <p>月检查结果</p>
                <p>反馈</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>管理及培训</h3>
    </div>
    <div class="list-con">
      <div class="clearFix">
        <div class="thr-list">
          <router-link to="/managementtool/managementtool">
            <div class="text" v-lazy:background-image="admin">
              <div>
                管理工具
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/application/application">
            <div class="text" v-lazy:background-image="application">
              <div>
                应用实例
              </div>
            </div>
          </router-link>
        </div>
        <div class="thr-list">
          <router-link to="/training/training">
            <div class="text" v-lazy:background-image="tran">
              <div>
                培训交流
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>快捷入口</h3>
    </div>
    <div class="list-con">
      <div class="clearFix">
        <div class="sec-list">
          <router-link to="/qualifications/qualifications">
            <div class="text" v-lazy:background-image="admin">
              <div>
                资质项目申请入口
              </div>
            </div>
          </router-link>
        </div>
        <div class="sec-list">
          <router-link to="/liaison/liaison">
            <div class="text" v-lazy:background-image="application">
              <div>
                通知联络
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>文件展示</h3>
    </div>
    <div class="list-con">
      <div class="clearFix">
        <div class="sec-list">
          <router-link to="/security/security">
            <div class="text" v-lazy:background-image="securityGoals">
              <div>
                中国医院协会患者安全目标
              </div>
            </div>
          </router-link>
        </div>
        <div class="sec-list">
          <router-link to="/fileman/fileman">
            <div class="text" v-lazy:background-image="file_m">
              <div>
                文件管理
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <foot-con :footBtnData="footBtnData" @togglePage="togglePage"></foot-con>
</div>
</template>
<script>
  import summary from '../../static/image/summary.png'
  import homePageIcon from '../../static/image/icon/home_page.png'
  import medicalCareIcon from '../../static/image/icon/medical_care.png'
  import operationIcon from '../../static/image/icon/operation.png'
  import targetIcon from '../../static/image/icon/target.png'
  import eventIcon from '../../static/image/icon/event.png'
  import assessmentIcon from '../../static/image/icon/assessment.png'
  import checkIcon from '../../static/image/icon/check.png'
  import dryMedicIcon from '../../static/image/icon/dry_medicine.png'
  import qualityCtrIcon from '../../static/image/icon/quality_ctr.png'
  import committeeIcon from '../../static/image/icon/committee.png'
  import moveIcon from '../../static/image/icon/move.png'
  import outpatientIcon from '../../static/image/icon/outpatient.png'
  import endangerIcon from '../../static/image/icon/endanger.png'
  import fileIcon from '../../static/image/icon/file.png'
  import systemIcon from '../../static/image/icon/system.png'
  import selfIcon from '../../static/image/icon/self.png'
  import event from '../../static/image/quality/event.png'
  import notice from '../../static/image/quality/notice.png'
  import toUpdate from '../../static/image/quality/to_update.png'
  import catalog from '../../static/image/quality/catalog.png'
  import feedBack from '../../static/image/quality/feedback.png'
  import flow from '../../static/image/quality/flow.png'
  import admin from '../../static/image/quality/admin.png'
  import application from '../../static/image/quality/application.png'
  import tran from '../../static/image/quality/tran.png'
  import apply from '../../static/image/quality/apply.png'
  import liaison from '../../static/image/quality/liaison.png'
  import securityGoals from '../../static/image/quality/security_goals.png'
  import file_m from '../../static/image/quality/file_m.png'
  import contact from '../../static/image/quality/contact.png'

  import colorBorder_1 from '../../static/image/border/color-border-1.png'
  import colorBorder_2 from '../../static/image/border/color-border-2.png'
  import colorBorder_3 from '../../static/image/border/color-border-3.png'
  import colorBorder_4 from '../../static/image/border/color-border-4.png'
  import colorBorder_5 from '../../static/image/border/color-border-5.png'
  import colorBorder_6 from '../../static/image/border/color-border-6.png'

  import headCon from '@/components/head.vue'
  import footCon from '@/components/foot.vue'
  import headData from '@/data/head_data.json'

  let footBtnData={
    fir:'系统概述',
    sec:'联系我们',
    thr:'功能清单'
  }
  let iconData=[
    {
      href:'',
      img:homePageIcon,
      text:'首页'
    },
    {
      href:'/medicaltechnology/medicaltechnology',
      img:medicalCareIcon,
      text:'医疗技术'
    },
    {
      href:'',
      img:operationIcon,
      text:'手术管理'
    },
    {
      href:'',
      img:targetIcon,
      text:'指标管理'
    },
    {
      href:'',
      img:eventIcon,
      text:'不良事件'
    },
    {
      href:'',
      img:assessmentIcon,
      text:'能力评估'
    },
    {
      href:'',
      img:checkIcon,
      text:'考核管理'
    },
    {
      href:'',
      img:dryMedicIcon,
      text:'医干管理'
    },
    {
      href:'',
      img:qualityCtrIcon,
      text:'外来质控'
    },
//    {
//      active:false,
//      href:'',
//      img:moveIcon,
//      text:'更多'
//    },
    {
      href:'',
      img:committeeIcon,
      text:'质量委员会'
    },
    {
      href:'',
      img:outpatientIcon,
      text:'门诊管理'
    },
    {
      href:'',
      img:endangerIcon,
      text:'危机值管理'
    },
    {
      href:'',
      img:fileIcon,
      text:'文件管理'
    },
    {
      href:'',
      img:systemIcon,
      text:'系统管理'
    },
    {
      href:'',
      img:selfIcon,
      text:'自身管理'
    }
  ]

  export default {
    data() {
      return {
        event,
        notice,
        toUpdate,
        catalog,
        feedBack,
        flow,
        admin,
        application,
        tran,
        apply,
        liaison,
        file_m,
        contact,
        securityGoals,
        colorBorder_1,
        colorBorder_2,
        colorBorder_3,
        colorBorder_4,
        colorBorder_5,
        colorBorder_6,
        summary,
        headData,
        iconActive:null,
        iconData,
        footBtnData,
        showPage:'fun'
      }
    },
    components: {
      headCon,
      footCon,
    },
    methods: {
      togglePage(page){
        this.showPage=page
      },
      goStart (res) {
        this.iconActive=res;
      },
      goEnd (data) {
        this.iconActive=null;
        this.$router.push({path:data});
      }
    },
    mounted() {

    }
  }
</script>
