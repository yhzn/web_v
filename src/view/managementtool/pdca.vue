<style>
</style>
<template>
  <div class="txt cont">
    <head-con :headData="headData"></head-con>
    <div class="main">
      <div class="head">
        PDCA循环
      </div>
      <p class="text-indent">
        DCA循环又叫质量环，是管理学中的一个通用模型，最早由休哈特于1930年构想，后来被美国质量管理专家戴明博士在1950年再度挖掘出来，并加以广泛宣传和运用于持续改善产品质量的过程。
      </p>
      <div class="img-one">
        <img src="" alt="" v-lazy="anaImg">
      </div>
      <p class="text-indent green-light">PDCA循环基本解释</p>
      <p class="text-indent">PDCA是英语单词Plan(计划)、Do(执行)、Check(检查)和Action(纠正) 的第一个字母，PDCA循环就是按照这样的顺序进行质量管理，并且循环不止地进行下去的科学程序。</p>
      <p class="text-indent">1、P (plan) 计划，包括方针和目标的确定，以及活动规划的制定。</p>
      <p class="text-indent">2、D (Do) 执行，根据已知的信息，设计具体的方法、方案和计划布 局；再根据设计和布局，进行具体运作，实现计划中的内容。 </p>
      <p class="text-indent">3、C (check) 检查，总结执行计划的结果，分清哪些对了，哪些错了， 明确效果，找出问题。 </p>
      <p class="text-indent"> 4、A (Action)纠正，对总结检查的结果进行处理，对成功的经验加以 肯定，并予以标准化；对于失败的教训也要总结，引起重视。对于没有解 决的问题，应提交给下一个PDCA循环中去解决。 、P (plan) 计划，包括 方针和目标的确定，以及活动规划的制定。</p>
      <p class="text-indent">PDCA循环是全面质量管理所应遵循的科学程序。全面质量管理活动的 全部过程，就是质量计划的制订和组织实现的过程，这个过程就是按照PDCA循环，不停顿地周而复始地运转的。PDCA循环不仅在质量管理体系中运用，也适用于一切循序渐进的管理工作。
      </p>
      <p class="text-indent green-light">应用阶段</p>
      <p class="text-indent">1、计划阶段。要通过市场调查、用户访问等，摸清用户对产品质量的 要求，确定质量政策、质量目标和质量计划等。包括现状调查、分析、确定要因、制定计划。</p>
      <p class="text-indent">2、设计和执行阶段。实施上一阶段所规定的内容。根据质量标准进行 产品设计、试制、试验及计划执行前的人员培训。</p>
      <p class="text-indent">3、检查阶段。主要是在计划执行过程之中或执行之后，检查执行情况， 看是否符合计划的预期结果效果。 </p>
      <p class="text-indent">、处理阶段。主要是根据检查结果，采取相应的措施。巩固成绩，把 成功的经验尽可能纳入标准，进行标准化，遗留问题则转入下一个PDCA 循环去解决。即巩固措施和下一步的打算。 </p>
      <p class="text-indent green-light">循环特点</p>
      <p class="text-indent">处理阶段是PDCA循环的关键。因为处理阶段就是解决存在问题，总结 经验和吸取教训的阶段。该阶段的重点又在于修订标准，包括技术标准和管理制度。没有标准化和制度化，就不可能使PDCA循环转动向前。</p>
      <p class="text-indent">PDCA循环，可以使我们的思想方法和工作步骤更加条理化、系统化、
        图像化和科学化。它具有如下特点：</p>
      <p class="text-indent">1、大环套小环、小环保大环、推动大循环。 PDCA循环作为质量管理 的基本方法，不仅适用于整个工程项目，也适应于整个企业和企业内的科室、工段、班组以至个人。各级部门根据企业的方针目标，都有自己的PDCA循环，层层循环，形成大环套小环，小环里面又套更小的环。大环是小环的母体和依据，小环是大环的分解和保证。各级部门的小环都围绕着企 业的总目标朝着同一方向转动。通过循环把企业上下或工程项目的各项工作有机地联系起来，彼此协同，互相促进。</p>
      <p class="text-indent">2、不断前进、不断提高。 PDCA循环就像爬楼梯一样，一个循环运转结束，生产的质量就会提高一步，然后再制定下一个循环，再运转、再提高，不断前进，不断提高。 </p>
      <p class="text-indent">3、门路式上升。 PDCA循环不是在同一水平上循环，每循环一次，就 解决一部分问题，取得一部分成果，工作就前进一步，水平就进步一步。每通过一次PDCA循环，都要进行总结，提出新目标，再进行第二次PDCA循环，使品质治理的车轮滚滚向前。PDCA每循环一次，品质水平和治理 水平均更进一步。</p>
      <p class="text-indent green-light">PDCA循环发展前景</p>
      <p class="text-indent">质量管理中，PDCA循环得到了广泛的应用，并取得了很好的效果，
        PDCA循环的四个阶段，“策划—实施—检查—改进”的PDCA循环的管理模
        式，体现科学认识论的一种具体管理手段和一套科学的工作程序。PDCA
        管理模式的应用对我们提高日常工作的效率有很大的益处，它不仅在质量
        管理工作中可以运用，同样也适合于其他各项管理工作。</p>
    </div>
  </div>
</template>
<script>
  import headCon from '@/components/head.vue'
  import anaImg from '../../../static/image/pdca.png'

  let headData={
    href:'/managementtool/managementtool',
    text:"医疗质量信息管理系统"

  }
  export default {
    data () {
      return {
        headData,
        anaImg,
      }
    },
    components:{
      headCon,
    }
  }
</script>
