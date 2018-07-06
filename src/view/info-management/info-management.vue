<style>
  .info-management .main{
    height:calc( 100vh - 100px );
    overflow: auto;
  }
  .info-management .main-sec-title{
    margin:20px 10px;
  }
  .info-management .main-sec{
    margin:0 10px;
    color:#fff;
  }
  .info-management .green-light{
  	color:#41a68f;
  }
</style>
<template>
  <div class="info-management con">
    <head-con :headData="headData"></head-con>
    <div class="main bg-theme" v-show="showPage=='system'">
      <div>
        <img src="" alt="" v-lazy="banner">
      </div>
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="bannerTitle">
      </div>
      <div class="main-sec">
        <p>随着信息科技的快速发展，越来越多的医院加速实施信息化网络平台、HIS业务平台等信息系统，提供了医院的工作效率和服务水平，但同时也给医院信息中心带来了越来越大的管理压力。本系统根据医院信息中心的管理压力，提供一套解决运维管理、绩效管理、项目流程管理、值班管理、软硬件管理等的系统，方便医院信息中心的日常管理操作，为医院信息科的运维和管理提供方便，节约信息科的工作时间，提高工作效率。</p>
        <p>
          <span class="green-light">信息科维护人员：</span>
          在绩效考核模块自评、对运维信息进行记录、录入硬件信息、上传文档、查看值班表、通讯录、操作手册、运维记录等。
        </p>
        <p>
          <span class="green-light">信息科维护登记人员：</span>
          在维护人员的职责的基础上，还需要对运维来电进行录入。
        </p>
        <p><span class="green-light">信息科维护组长：</span>
          对录入的维护信息、硬件信息、上传的文档等进行审核。
        </p>
        <p><span class="green-light">信息科主任：</span>
          查看维护人员的绩效考核，更新维护通讯录，查看项目进度。
        </p>
        <p><span class="green-light">医院工作人员：</span>
          对维护人员进行评价，在评价单上打分。
        </p>
        <p><span class="green-light">系统管理人员：</span>
          维护系统的账户信息，对通讯录、绩效考核方法进行配置。
        </p>
        
      </div>
    </div>
    <div class="main bg-theme" v-show="showPage=='other'">
      <div class="main-sec-title">
        <img src="" alt="" v-lazy="flowPTitle">
      </div>

      <div class="main-sec">
        <img src="" alt="" v-lazy="flowP">
      </div>
    </div>
    <div class="main bg-theme" v-show="showPage=='fun'">
      <sec-level :secMenu="secMenu"></sec-level>
    </div>
    <foot-con :footBtnData="footBtnData" @togglePage="togglePage"></foot-con>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import footCon from '@/components/foot.vue'
  import secLevel from '@/components/sec_level_menu.vue'
  import flowP from '../../../static/image/info-management/flow.png'
  import flowPTitle from '../../../static/image/medical/flow_title.png'
  import banner from '../../../static/image/info-management/banner.png'
  import bannerTitle from '../../../static/image/medical/banner_title.png'

  import secMenu from '@/data/info-management-menu.json'
  import headData from '@/data/info-management-title.json'

  let footBtnData={
    fir:'功能描述',
    sec:'流程图',
    thr:'功能列表'
  }
  export default {
    data () {
      return {
        headData,
        footBtnData,
        showPage:'fun',
        flowP,
        flowPTitle,
        banner,
        bannerTitle,
        secMenu,

      }
    },
    components:{
      headCon,
      footCon,
      secLevel,
    },
    methods:{
      togglePage (page) {
        this.showPage=page;
      },

    },
    mounted() {
    }
  }
</script>
