<style>
  .ch_cri h2{
    font-size:16px;
    color:#fff;
    text-align: center;
    margin-bottom:10px;
  }
  .ch_cri p.yellow-light{
    color:#f8be7b;
  }
  .ch_cri li span{
    display: block;
    color:#fff;
  }
  .ch_cri li span:nth-child(1){
    float:left;
    width:130px;
  }
  .ch_cri li span:nth-child(2){
    margin-left:130px;
  }
</style>
<template>
  <div class="txt cont ch_cri">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        危机值考核与反馈
      </div>
      <h2>上海市**医院（南院）危急值管理评估结果</h2>
      <p class="green-light">一、 危急值定义</p>
      <p>“危急值”（Critical Values）是指当这种检验、检查结果出现时，表明患者可能正处于有生命危险的边缘状态，临床医生需要及时得到检验、检查信息，迅速给予患者有效的干预措施或治疗，就可能挽救患者生命 否则就有可能出现严重后果，失去最佳抢救机会。</p>
      <p class="green-light">二、 危急值报告管理要求</p>
      <p>各医技科室医务人员发现“危急值”情况时，立即由专人电话通知“危急值”结果，住院患者通知所在病区相关医务人员，门急诊患者通知就诊 科室相关医务人员。并在《“危急值”报告登记本》上记录患者信息、危 急值情况、报告时间以及接收报告的医务人员信息。</p>
      <p class="green-light">三、 各相关科室危急值报告内容</p>
      <p class="text-indent yellow-light">（一） 内镜室</p>
      <p>1、消化道异物（引起出血、穿孔等严重后果者）。</p>
      <p>2、急性活动性出血（包括食管胃底静脉曲张、消化性溃疡、血管畸形等）</p>
      <p>3、操作中出现穿孔等严重并发症。</p>
      <p>4、无痛胃、肠镜麻醉意外。</p>
      <p>5、在检查过程中及检查后出现有危及生命并需及时处理的情况。</p>
      <p class="text-indent yellow-light">（二） 心电图室</p>
      <ul>
        <li>
          <span class="text-center">危急指标</span><span class="text-center">诊断标准</span>
        </li>
        <li>
          <span>急性心肌梗死</span><span>首次出现的 ST 段弓背抬高及异常 Q 波</span>
        </li>
        <li>
          <span>急性心肌缺血</span><span>ST 段抬高并较上次心电图有动态变化</span>
        </li>
        <li>
          <span>高血钾 </span><span>首次出现 T 波高尖</span>
        </li>
        <li>
          <span>室性心动过速</span><span>心室频率&gt;100bpm,持续时间&gt;30 秒</span>
        </li>
        <li>
          <span>室上性心动过速 </span><span>心室率>180bpm</span>
        </li>
        <li>
          <span>心动过缓</span><span>心室率&lt;30bpm</span>
        </li>
        <li>
          <span>心室扑动、颤动</span><span>&gt;QRS 波群及 ST-T 无法辨认或消失,出现颤动波或扑动波</span>
        </li>
        <li>
          <span>心室停搏 </span><span>&gt;4.0 秒长间歇</span>
        </li>
        <li>
          <span>室早呈 R on T </span><span>室早出现在 T 波顶点及以前</span>
        </li>
        <li>
        </li>
      </ul>
      <p class="text-indent yellow-light">（三） 医学超声科</p>
      <p>1、 大量心包积液合并心包填塞</p>
      <p>2、心肌梗死严重并发症：室间隔穿孔或心脏破裂、首次发现的室壁瘤合并附壁血栓形成</p>
      <p>3、 心脏骤停</p>
      <p>4、首次发现的主动脉夹层</p>
      <p>5、 首次发现的 LVEF 小于 35%并伴有急性左心衰表现</p>
      <p>6、颈动脉梗阻</p>
      <p>7、腹主动脉瘤</p>
      <p>8、腹主动脉夹层动脉瘤</p>
      <p>9、外伤后腹腔积液</p>
      <p>10、外伤后胸腔积液</p>
      <p>11、异位妊娠</p>
      <p>12、前置胎盘</p>
      <p>13、胎盘早剥</p>
      <p class="text-indent yellow-light">（四） 医学影像科</p>
      <p>普放</p>
      <p>1、气管、支气管异物</p>
      <p>2、液气胸，尤其是张力性气胸（大于 50%以上）</p>
      <p>3、急性肺水肿</p>
      <p>4、心包填塞、纵膈摆动</p>
      <p>5、消化道穿孔、急性肠梗阻（包括肠套叠）</p>
      <p>6、外伤性膈疝</p>
      <p>CT</p>
      <p>1、严重的颅脑血肿、挫裂伤、蛛网膜下腔出血的急性期</p>
      <p>2、硬膜下/外血肿急性期</p>
      <p>3、脑疝</p>
      <p>4、颅内急性大面积脑梗死（范围达到一个脑叶或全脑干范围或以上）</p>
      <p>5、液气胸，尤其是张力性气胸（除复查病人）大于 50%以上</p>
      <p>6、肺栓塞</p>
      <p>7、急性主动脉夹层、主动脉瘤破裂、肠系膜动脉栓塞</p>
      <p>8、消化道穿孔</p>
      <p>9、肝脾胰肾等腹腔脏器破裂出血</p>
      <p>MR</p>
      <p>急性大面积脑梗死</p>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'

  let headData={
    href:'/evaluation/check',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
      }
    },
    components:{
      headCon,
    }
  }
</script>
