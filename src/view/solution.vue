<style>
  .solution{
    background:#f1f1f1;

  }
  .solution .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .solution .main .sum img{
    width:100%;
  }
  .solution p{
    margin:0;
  }
  .solution a{
    color:#fff;
    text-decoration: none;
  }

  .solution .title{
    padding:8px 10px;
    line-height: 14px;
    background: #fff;

    border-bottom:1px solid #ebebeb;
  }
  .solution .title h3{
    padding-left: 5px;
    margin:0;
    font-size:16px;
    border-left:5px solid #3a9be5;
  }
  .solution .text-right .text div{
    padding-right:10px;
    text-align: right;
  }
  .solution .footer .other_btn dt{
    background:url('../../static/image/icon/contact.png');
    background-size:100% 100%;
  }
  .solution .footer .other_btn.active dt{
    background:url('../../static/image/icon/contact_click.png');
    background-size:100% 100%;
  }

  .solution .sum {
    height:157px;
  }
  .solution .sum img{
    width:100%;
    height:100%;
  }
  .solution .text-indent{
    text-indent: 2em;
    margin-bottom:5px;
  }
  .solution .green-light{
    color:#fff;
    background:#1d4761;
  }
  .solution .green-light h3{
    font-size:16px;
    text-align: center;
  }
  .solution .green-light .red{
    color:#ff0000;
  }
  .solution .green-light .sum-text{
    margin:0 10px;
  }
  .solution .contact{
    padding:10px 20px;
    font-size:18px;
  }
  .solution .contact-title{
    margin:0;
    text-align: center;
    height: 28px;
    font-size:18px;
    border-bottom: 1px solid #b6b6b6;

  }
  .solution .contact li a{
    color:#2c3e50;
    display: inline-block;
    text-decoration: none;
  }
  .solution .contact li span{
    display: block;
  }
  .solution .contact li span:nth-child(1){
    float:left;
    width:90px;
  }
  .solution .contact li span:nth-child(2){
    margin-left:95px;
  }
  .solution .icon{
    padding-top:20px;
  }
  .solution .icon li{
    float:left;
    margin-right:10px;
    margin-left:10px;
    width:calc( 50% - 20px );
    height:170px;
    margin-bottom:10px;

  }
  .solution .icon li img{
    width:100%;
  }
</style>
<template>
  <div class="solution cont">
    <head-con :headData="headData"></head-con>
    <div class="main green-light"  v-show="showPage=='system'">
      <div class="sum">
        <img src="" alt="" v-lazy="bannerPng">
      </div>
      <div class="sum-text">
        <h3>概述系统</h3>
        <p class="text-indent">
          急诊信息整体解决方案主要由急诊分诊系统、电子病历、医护一体化、临床路径四部分组成。本系统结合现阶段最先进的计算机网络技术和信息管理技术，建立科学规范的急诊分级量化指标，将急诊病情的初步判断前移至急诊分诊台，旨在实现急诊病人迅速且适当的分级处理，且合规合理的优化分配有限的医疗资源，提供一套解决急诊分级分诊实施、分级分诊记录和查询、分级分诊的量化指标维护、患者症状维护的信息系统，可以跟监护设备对接实现快速采集分级所需要的分级量化指标值，通过可配置化的逻辑判断语法对指标进行快速准确的分级。
        </p>
        <p class="text-indent">
          诊分诊系统制定了可量化的成人急诊分级分诊标准，该标准包括8项量化指标、48项通科优先级患者常见主诉或症状和25项创伤优先级患者常见主诉或症状。系统根据该标准将病人病情分为五级分，诊台按要求录入系统所需信息，系统可自动对患者进行分级分诊。
        </p>
        <p class="text-indent">
          电子病历系统为医生提供病历书写的便捷方式，可根据患者病情变化来升降患者的急诊等级，从患者中选取需提交人员进行提交，也可套用病历模板进行细节修改。主任级别可以对电子病历进行增加、删除、修改、批注等操作。
        </p>
        <p class="text-indent">
          临床路径系统主要是根据急诊分级来进行定制化急救路径，主要针对一、二级患者，三级患者视情况而定。对于进入临床路径的患者，严格按照临床路径的流程执行。
        </p>
        <p class="text-indent">
          医护一体化系统综合录入了患者及医生的诊治信息，可以直观的了解患者信息及医护项目，可查询统计护理单汇总、医嘱汇总、病人统计，更好的方便治疗护士进行相关护理工作。
        </p>
      </div>
    </div>
    <div class="main" v-show="showPage=='other'">
      <h3 class="contact-title">延华智能医疗</h3>
      <div class="contact">
        <ul>
          <li><span>联&nbsp;&nbsp;系&nbsp;&nbsp;人：</span><span>李朋海（业务顾问）</span></li>
          <li><span>联系电话：</span><span><a href="tel:18917672050">18917672050</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:86-21-61818686">86-21-61818686</a></span></li>
          <li><span>微&nbsp;&nbsp;信&nbsp;&nbsp;号：</span><span>hzmaolv</span></li>
          <li><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span><span>上海市普陀区西康路1255号普陀科技大厦6/7/11/17层</span></li>
          <li><span>路&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;线：</span><span>地铁7号线、13号线至长寿路（3号口）下车，步行377米<br/>公交837路至长寿路西康路下车，步行306米</span></li>
        </ul>
        <div>
          <img src="" alt="" v-lazy="contact">
        </div>
      </div>
    </div>
    <div class="main"  v-show="showPage=='fun'">
      <div class="wrapper wrap bg-theme">
        <div>
          <ul class="clearfix icon">
            <li v-for="item in iconData">
              <router-link :to="item.href">
              <img src="" alt="" v-lazy="item.img">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <foot-con :footBtnData="footBtnData" @togglePage="togglePage"></foot-con>
  </div>
</template>
<script>

  import headCon from '@/components/head.vue'
  import footCon from '@/components/foot.vue'
  import headData from '@/data/solution-head.json'

  import BScroll from 'better-scroll'

  import carePng from '../../static/image/icon/care.png'
  import clinicalPng from '../../static/image/icon/clinical.png'
  import diagnosisPng from '../../static/image/icon/diagnosis.png'
  import recordPng from '../../static/image/icon/record.png'

  import bannerPng from '../../static/image/solution/banner.png'
  import contact from '../../static/image/quality/contact.png'
  let footBtnData={
    fir:'系统概述',
    sec:'联系我们',
    thr:'功能清单'
  }
  let iconData=[
    {
      href:'/diagnosis/diagnosis',
      img:diagnosisPng
    },
    {
      href:'/record/record',
      img:recordPng
    },
    {
      href:'/clinical/clinical',
      img:clinicalPng
    },
    {
      href:'/care/care',
      img:carePng
    }
  ]
  export default {
    data() {
      return {
        contact,
        bannerPng,
        headData:headData.solution,
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
    activated () {
      this.initData(0)
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
      },
      async initData(start){
        console.log('start')
        this.$nextTick(()=>{
          new BScroll('.wrap',{
            scrollY:true,
            click:true,
            startY:start,
            probeType:3,
          }).on('scroll',(pos)=>{

          })
        })
      }
    },
    mounted() {
      this.initData(0)
    }
  }
</script>
