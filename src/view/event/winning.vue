<style>

</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        喜获长三角医疗质控管理论坛一等奖
      </div>
      <p class="text-indent">
        2016年第四届长三角地区医疗质量控制管理论坛于2016年10月20日-22日在上海举行，我院医务部同仁积极参与这次论坛的论文征集活动，获得大丰收。本次共有4篇管理类论文被选入论文汇编，并有1篇《上海市病案首页质量控制督查实施》被评为优秀论文一等奖，共有3篇全文登载，1篇摘要登载，具体论文题目如下：
      <p class="text-indent">
        1、上海市病案首页质量控制督查实施 ——— 于** 邓** 谭**等
      </p>
      <p class="text-indent">
        2、浦东新区基层医院院内感染管理与控制分析及对策研究 ——— 朱** 等
      </p>
      <p class="text-indent">
        3、应用质量指标警戒线、模块控制等方法质控管理新探 ——— 叶** 于** 等
      </p>
      <p class="text-indent">
        4、病历质控专家管理与评价体系构建初探 ——— 石** 丁** 朱** 等
      </p>
      <div class="img-sec clearFix">
        <div>
          <img src="" alt="" v-lazy="winOne">
        </div>
        <div>
          <img src="" alt="" v-lazy="winSec">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import winOne from '../../../static/image/win_1.png'
  import winSec from '../../../static/image/win_2.png'

  let headData={
    href:'/event/event',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
        winOne,
        winSec,
      }
    },
    components:{
      headCon,
    }
  }
</script>
