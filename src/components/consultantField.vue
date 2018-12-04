<style src="../assets/css/consultantfield.css"></style>

<template>
  <div class="consultant-field-component">
    <div class="consultant-field-title">情绪</div>
    <div class="consultant-field-content">
      <div class="consultant-field-content-line">
        <div class="consultant-field-grade consultant-field-grade-unensure">抑郁</div>
        <div class="consultant-field-grade consultant-field-grade-ensure">焦虑</div>
        <div class="consultant-field-grade consultant-field-grade-unensure">恐惧</div>
      </div>
      <div class="consultant-field-content-line">
        <div class="consultant-field-grade consultant-field-grade-unensure">情绪管理</div>
        <div class="consultant-field-grade consultant-field-grade-unensure">危机干预</div>
        <div  class="consultant-field-grade consultant-field-grade-unensure">迷茫</div>
      </div>
    </div>
    <div class="consultant-field-title">性与性别</div>
    <div class="consultant-field-content">
      <div class="consultant-field-content-line">
        <div class="consultant-field-grade consultant-field-grade-unensure">性心理</div>
        <div class="consultant-field-grade consultant-field-grade-unensure">性别认同</div>
        <div class="consultant-field-grade consultant-field-grade-unensure">GLTB</div>
      </div>
    </div>
    <div class="consultant-field-title">亲密关系</div>
    <div class="consultant-field-content">
      <div class="consultant-field-content-line">
        <div class="consultant-field-grade consultant-field-grade-unensure">原生家庭</div>
        <div class="consultant-field-grade consultant-field-grade-ensure">家庭暴力</div>
        <div class="consultant-field-grade consultant-field-grade-unensure">亲子关系</div>
      </div>
    </div>

    <div class="consultant-field-button">
      <div class="consultant-field-button-detail consultant-field-button-reset">全部重置</div>
      <div class="consultant-field-button-detail consultant-field-button-ensure">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantfield",
    data:function(){
      return {data:"this is consultantfield"}
    }
  }
</script>
<style>

</style>
