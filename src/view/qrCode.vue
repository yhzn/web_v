<style>

</style>
<template>
<div class="con">
  <div class="main">
    <img src="" alt="" v-lazy="qrCode">
  </div>
</div>
</template>
<script>
  import qrCode from '../../static/image/qrcode.png'
  export default {
    data () {
      return {
        qrCode,
      }
    }
  }
</script>
