<style src="../assets/css/consultantRegion.css"></style>

<template>
  <div class="consultant-region-component">
    <div class="consultant-region">
      <div class="consultant-region-province">
         <div class="consultant-region-grade consultant-region-grade-unensure">北京市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">天津市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">上海市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">重庆市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">河北省</div>
         <div class="consultant-region-grade consultant-region-grade-ensure">浙江省</div>
      </div>
      <div class="consultant-region-city">
         <div class="consultant-region-grade consultant-region-grade-ensure">杭州市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">宁波市</div>
         <div class="consultant-region-grade consultant-region-grade-unensure">温州市</div>
      </div>
    </div>
    <div class="consultant-region-button">
      <div class="consultant-region-button-detail consultant-region-button-reset">全部重置</div>
      <div class="consultant-region-button-detail consultant-region-button-ensure">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantregion",
    data:function(){
      return {data:"this is consultantregion"}
    }
  }
</script>
<style>

</style>
