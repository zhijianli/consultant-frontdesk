<style src="../assets/css/consultantMode.css"></style>

<template>
  <div class="consultant-mode-component">
    <div class="consultant-mode-title">咨询方式</div>
    <div class="consultant-mode-content">
      <div class="consultant-mode-content-line">
        <div class="consultant-mode-grade consultant-mode-grade-unensure">视频/当面</div>
        <div class="consultant-mode-grade consultant-mode-grade-ensure">面对面</div>
        <div class="consultant-mode-grade consultant-mode-grade-unensure">视频</div>
      </div>
      <div class="consultant-mode-content-line">
        <div class="consultant-mode-grade consultant-mode-grade-unensure">语音</div>
        <div class="consultant-mode-grade consultant-mode-grade-hidden"></div>
        <div class="consultant-mode-grade consultant-mode-grade-hidden"></div>
      </div>
    </div>

    <div class="consultant-mode-button">
      <div class="consultant-mode-button-detail consultant-mode-button-reset">全部重置</div>
      <div class="consultant-mode-button-detail consultant-mode-button-ensure">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantmode",
    data:function(){
      return {data:"this is consultantmode"}
    }
  }
</script>
<style>

</style>
