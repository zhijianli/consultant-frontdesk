<style src="../assets/css/consultantPrice.css"></style>

<template>
  <div class="consultant-price-component">
       <div class="consultant-price-title">咨询价格（次）</div>
       <div class="consultant-price-content">
         <div class="consultant-price-content-line">
            <div class="consultant-price-grade consultant-price-grade-unensure">价格不限</div>
            <div class="consultant-price-grade consultant-price-grade-ensure">0-300元</div>
            <div class="consultant-price-grade consultant-price-grade-unensure">301-500元</div>
         </div>
         <div class="consultant-price-content-line">
            <div class="consultant-price-grade consultant-price-grade-unensure">501-700元</div>
            <div class="consultant-price-grade consultant-price-grade-unensure">701-900元</div>
            <div  class="consultant-price-grade consultant-price-grade-unensure">901元以上</div>
         </div>
       </div>

       <div class="consultant-price-button">
         <div class="consultant-price-button-detail consultant-price-button-reset">全部重置</div>
         <div class="consultant-price-button-detail consultant-price-button-ensure">确定</div>
       </div>


  </div>
</template>
<script>
  export default {
    name: "consultantPrice",
    data:function(){
      return {data:"this is consultantPrice"}
    }
  }
</script>
<style>

</style>
