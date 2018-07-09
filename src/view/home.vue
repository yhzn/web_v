<style>
  .home .main{
    height:calc( 100vh - 42px );
    background:#e8e8e8;
  }
  .home .tips{
    height:36px;
    line-height:38px;
    margin-bottom:10px;
    text-align: center;
    color:red;
    font-size:14px;
    background: #b6b6b6;
  }
  .home a{
    display: block;
/*
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    padding-left:20px;
    font-weight: bold;
*/
    color:#fff;
    text-decoration: none;
  }



  .home .swiper-container{
    width: 100%;
    height:220px;
  }
  .home h3{
    margin-top:0;
    margin-bottom:10px;
    padding:6px;
    font-size: 18px;
    text-align: center;
    background:#fff;
  }
  .home .swiper-slide{
     width: 100%;
    height:100%;
  }
  .home .swiper-slide img{
    width:100%;
    height:100%;
  }
  .home .list {
    position: relative;
    min-height:100px;
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    margin-bottom:10px;
    background:#fff;
  }
  .home .list .left{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    height:80px;
    width:90px;

  }
  .home .list .right{
    margin-left:100px;
  }
  .home .list .left img{
    display: block;
    height:100%;
  }
  .home .list .right span:nth-child(1){
    display: inline-block;
    margin-bottom:5px;
    color:#1c8c90;
    font-size:18px;
    font-weight: bold;
  }
  .home .list .right span:nth-child(2){
    display: inline-block;
    font-size: 14px;
    padding-bottom:5px;
    color:#747474;
  }
</style>
<template>
  <div class="home cont">
    <div class="tips">
      请您点击右上角<strong> " ┇ " </strong>按钮添加收藏 ... <strong>↗</strong>
    </div>
    <div class="main">
      <div class="wrapper">
        <div>
          <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img :src='banner1' alt=""></div>
              <div class="swiper-slide"><img :src='banner2' alt=""></div>
              <div class="swiper-slide"><img :src='banner3' alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->

            <!-- 如果需要滚动条 -->
            <!--<div class="swiper-scrollbar"></div>-->
          </div>
          <h3>十五大系统展示</h3>

          <div class="list">
            <router-link class="clearfix" to="/qualityPage">
              <div class="left">
                <img src="" alt="" v-lazy="icon2">
              </div>
              <div class="right">
                <span>医疗质量信息管理系统</span>
                <span>医疗质量信息管理平台实现了医院质量信息的高度集成</span>
              </div>
            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/solution">

              <div class="left">
                <img src="" alt="" v-lazy="icon3">
              </div>
              <div class="right">
                <span>急诊信息整体解决方案</span>
                <span>急诊信息整体解决方案建立科学规范的急诊分级量化指标，合规合理的优化分配有限的医疗资源</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/cockpit/cockpit">

              <div class="left">
                <img src="" alt="" v-lazy="icon4">
              </div>
              <div class="right">
                <span>院长驾驶舱</span>
                <span>决策支持系统可以快速、准确、即时提供有价值的信息给管理者并辅助进行专题分析。</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/recovery/recovery">

              <div class="left">
                <img src="" alt="" v-lazy="icon5">
              </div>
              <div class="right">
                <span>医院康复科信息系统</span>
                <span>康复科信息系统旨在帮助康复科医生更好地帮助病人进行康复治疗单的管理，方便医疗治疗的追溯</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/report-disease/report-disease">

              <div class="left">
                <img src="" alt="" v-lazy="icon6">
              </div>
              <div class="right">
                <span>疾病上报管理系统</span>
                <span>疾病上报管理系统是防保科通过管理临床科室完成疾控中心所要求的有关传染病上报、监测等内容，防保科审核后上报至疾控中心</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/info-manage/info-management">

              <div class="left">
                <img src="" alt="" v-lazy="icon7">
              </div>
              <div class="right">
                <span>信息科管理系统</span>
                <span>信息科管理系统根据医院信息中心的管理压力提供一套解决运维管理、绩效管理、项目流程管理、值班管理、软硬件管理等的系统</span>
              </div>
            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/department-scheduling/department-scheduling">

              <div class="left">
                <img src="" alt="" v-lazy="icon8">
              </div>
              <div class="right">
                <span>科室排班管理系统</span>
                <span>科室排班管理系统实现了医院医师、护士排班工作的自动化、电子化，方便和简化医院各科室的排班工作</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/backbone-management/backbone-management">

              <div class="left">
                <img src="" alt="" v-lazy="icon9">
              </div>
              <div class="right">
                <span>科室与医疗骨干管理系统</span>
                <span>科室与医疗骨干管理系统是针对医院各科医疗骨干的信息业务管理工作而设计，提高所有科室整体运营效率，促进科室间的合作</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/gross-class/gross-class">

              <div class="left">
                <img src="" alt="" v-lazy="icon10">
              </div>
              <div class="right">
                <span>医院总值班系统</span>
                <span>总值班系统主要是供总值班及管理人员使用，是一个针对医院的业务数据进行实时更新、动态反馈的信息管理系统</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/bonuses/bonuses">

              <div class="left">
                <img src="" alt="" v-lazy="icon11">
              </div>
              <div class="right">
                <span>奖金发放管理系统</span>
                <span>奖金发放管理系统使奖金分配实现统一管理，由此大大提高绩效分配的效率，减少科室和绩效办的不必要的沟通，提高整体运行效率</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/attendance/attendance">

              <div class="left">
                <img src="" alt="" v-lazy="icon12">
              </div>
              <div class="right">
                <span>医院会议考勤管理系统</span>
                <span>会议考勤系统可以轻松记录汇总分析医院员工参加会议的出勤情况，实现了对医院员工考勤的信息化管理。</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/send/send">

              <div class="left">
                <img src="" alt="" v-lazy="icon13">
              </div>
              <div class="right">
                <span>病历分送系统</span>
                <span>病历分送系统就是利用先进的信息技术，辅助临床病历质量控制的检查环节，实现智能自主的病历分送管理体系</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/info-integration/info-integration">

              <div class="left">
                <img src="" alt="" v-lazy="icon14">
              </div>
              <div class="right">
                <span>医院信息集成平台</span>
                <span>信息集成平台采用SOA架构，集中立项、分步建设、逐步深化，建立一套相对完整的数据服务体系</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/search/search">

              <div class="left">
                <img src="" alt="" v-lazy="icon15">
              </div>
              <div class="right">
                <span>科研数据查询系统</span>
                <span>科研数据查询系统是基于一个我公司数据中心平台基础开发出来的医疗数据查询系统</span>
              </div>

            </router-link>
          </div>
          <div class="list">
            <router-link class="clearfix" to="/qq/qq">

              <div class="left">
                <img src="" alt="" v-lazy="icon1">
              </div>
              <div class="right">
                <span>消息发送平台</span>
                <span>消息发送平台通过跟据消息的特点来设置发送通道，可以在减少发送成本的同时又能更好完成消息发送任务</span>
              </div>

            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import emeTre from '../../static/image/home/emergency_treatment.png'
  import qualityCtr from '../../static/image/home/quality_control.png'
  import cockpit from '../../static/image/home/cockpit.png'
  import getHealth from '../../static/image/home/get_health.png'
  import disease from '../../static/image/home/disease.png'
  import information from '../../static/image/home/information.png'
  import scheduling from '../../static/image/home/scheduling.png'
  import backbone from '../../static/image/home/backbone.png'
  import hospitalDuty from '../../static/image/home/hospital_duty.png'
  import reward from '../../static/image/home/reward.png'
  import meetingAtt from '../../static/image/home/meeting_att.png'
  import medicalRecord from '../../static/image/home/medical_record.png'
  import IntegratedPlatform from '../../static/image/home/Integrated_platform.png'
  import search from '../../static/image/home/search.png'
  import BScroll from 'better-scroll'
  import banner1 from '../../static/image/banner1.png'
  import banner2 from '../../static/image/banner2.png'
  import banner3 from '../../static/image/banner3.png'

  import icon1 from '../../static/image/icon1.png'
  import icon2 from '../../static/image/icon2.png'
  import icon3 from '../../static/image/icon3.png'
  import icon4 from '../../static/image/icon4.png'
  import icon5 from '../../static/image/icon5.png'
  import icon6 from '../../static/image/icon6.png'
  import icon7 from '../../static/image/icon7.png'
  import icon8 from '../../static/image/icon8.png'
  import icon9 from '../../static/image/icon9.png'
  import icon10 from '../../static/image/icon10.png'
  import icon11 from '../../static/image/icon11.png'
  import icon12 from '../../static/image/icon12.png'
  import icon13 from '../../static/image/icon13.png'
  import icon14 from '../../static/image/icon14.png'
  import icon15 from '../../static/image/icon15.png'


  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Swiper from 'swiper/dist/js/swiper.min'
  import scrollTop from '@/data/homeScrollTop.json'

  export default {
    data () {
      return {
        scrollTop,
        emeTre,
        qualityCtr,
        getHealth,
        cockpit,
        disease,
        information,
        scheduling,
        backbone,
        hospitalDuty,
        reward,
        meetingAtt,
        medicalRecord,
        IntegratedPlatform,
        search,
        banner1,
        banner2,
        banner3,
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        icon6,
        icon7,
        icon8,
        icon9,
        icon10,
        icon11,
        icon12,
        icon13,
        icon14,
        icon15,

      }
    },
    components:{},
    activated () {
      let start=this.scrollTop.y;
      this.initData(start)

    },
    methods:{
      async initData(start){
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY:true,
            click:true,
            startY:start,
            probeType:3,
          }).on('scroll',(pos)=>{
            this.scrollTop.y=parseInt(pos.y)
          })
        })
      }

    },
    mounted () {
//      this.initData()

      new Swiper(this.$refs.swiperContainer,{ //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        speed:300,
        height: 220,
        autoplay: {
          delay:2000,
          disableOnInteraction: false
        },
        loop: true,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
//        autoHeight: true,
        effect : 'fade',
        pagination: {
          el: '.swiper-pagination'
        },
//        scrollbar:{
//          el: '.swiper-scrollbar'
//        },
        centeredSlides: true,
        paginationClickable: true,
        fadeEffect:true,
//        navigation: {
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev'
//        },
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      })
    }
  }
</script>
