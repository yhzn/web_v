<style>
  .home .main{
    height:calc( 100vh - 42px );
  }
  .home .tips{
    height:36px;
    line-height:38px;
    margin:0 10px 8px;
    text-align: center;
    color:red;
    font-size:14px;
    background: #b6b6b6;
  }
  .home .list{
    position:relative;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0 10px 20px;
    height:120px;
    font-size:18px;

  }
  .home a{
    display: block;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    padding-left:20px;
    font-weight: bold;
    color:#fff;
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
          <div class="list" v-lazy:background-image="qualityCtr">
            <router-link to="/qualityPage">
              医疗质量信息管理系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="emeTre">
            <router-link to="/homePage">
            急诊信息整体解决方案
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="cockpit">
            <router-link to="/homePage">
            院长驾驶舱
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="getHealth">
            <router-link to="/homePage">
            医院康复科信息系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="disease">
            <router-link to="/homePage">
            疾病上报管理系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="information">
            <router-link to="/homePage">
            信息科管系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="scheduling">
            <router-link to="/homePage">
            科室排班系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="backbone">
            <router-link to="/homePage">
            科室与医疗骨干管理系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="hospitalDuty">
            <router-link to="/homePage">
            医院总值班系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="reward">
            <router-link to="/homePage">
            奖金发放管理系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="meetingAtt">
            <router-link to="/homePage">
            医院会议考勤管理系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="medicalRecord">
            <router-link to="/homePage">
            病历分送系统
            </router-link>
          </div>
          <div class="list" v-lazy:background-image="IntegratedPlatform">
            <router-link to="/homePage">
            医院信息集成平台
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
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
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

      }
    },
    activated () {
      this.initData()
    },
    methods:{
      async initData(){
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY:true,
            click:true,
          })
        })
      }
    },
    mounted () {
    }
  }
</script>
