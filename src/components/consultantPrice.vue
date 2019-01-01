<style src="../assets/css/consultantPrice.css"></style>

<template>
  <div class="consultant-price-component">
       <div class="consultant-price-title">咨询价格（次）</div>
       <div class="consultant-price-content">
         <div class="consultant-price-content-line">
            <div @click="choosePriceCondition(0)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceUnlimitedIsEnsure}">价格不限</div>
            <div @click="choosePriceCondition(1)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceThreeHundredIsEnsure}">0-300元</div>
            <div @click="choosePriceCondition(2)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceFiveHundredIsEnsure}">301-500元</div>
         </div>
         <div class="consultant-price-content-line">
            <div @click="choosePriceCondition(3)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceSevenHundredIsEnsure}">501-700元</div>
            <div @click="choosePriceCondition(4)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceNineHundredIsEnsure}">701-900元</div>
            <div @click="choosePriceCondition(5)" :class="{'consultant-price-grade': priceGrade, 'consultant-price-grade-ensure': priceOverNineHundredIsEnsure}">901元以上</div>
         </div>
       </div>

       <div class="consultant-price-button">
         <div class="consultant-price-button-detail consultant-price-button-reset" @click="reset()">全部重置</div>
         <div class="consultant-price-button-detail consultant-price-button-ensure" @click="sendPriceCondition()">确定</div>
       </div>


  </div>
</template>
<script>
  export default {
    name: "consultantPrice",
    data:function(){
      return {
        data:"this is consultantPrice",
        priceGrade:true,
        priceUnlimitedIsEnsure:false,
        priceThreeHundredIsEnsure:false,
        priceFiveHundredIsEnsure:false,
        priceSevenHundredIsEnsure:false,
        priceNineHundredIsEnsure:false,
        priceOverNineHundredIsEnsure:false,
      }
    },
    methods:{
      choosePriceCondition(data){
        if(data == 0){
          this.priceUnlimitedIsEnsure = !this.priceUnlimitedIsEnsure;
          this.priceThreeHundredIsEnsure = false;
          this.priceFiveHundredIsEnsure = false;
          this.priceSevenHundredIsEnsure = false;
          this.priceNineHundredIsEnsure = false;
          this.priceOverNineHundredIsEnsure = false;

        }else if(data == 1){
          this.priceUnlimitedIsEnsure = false;
          this.priceThreeHundredIsEnsure = !this.priceThreeHundredIsEnsure;
          this.priceFiveHundredIsEnsure = false;
          this.priceSevenHundredIsEnsure = false;
          this.priceNineHundredIsEnsure = false;
          this.priceOverNineHundredIsEnsure = false;
        }else if(data == 2){
          this.priceUnlimitedIsEnsure = false;
          this.priceThreeHundredIsEnsure = false;
          this.priceFiveHundredIsEnsure = !this.priceFiveHundredIsEnsure;
          this.priceSevenHundredIsEnsure = false;
          this.priceNineHundredIsEnsure = false;
          this.priceOverNineHundredIsEnsure = false;
        }else if(data == 3){
          this.priceUnlimitedIsEnsure = false;
          this.priceThreeHundredIsEnsure = false;
          this.priceFiveHundredIsEnsure = false;
          this.priceSevenHundredIsEnsure = !this.priceSevenHundredIsEnsure;
          this.priceNineHundredIsEnsure = false;
          this.priceOverNineHundredIsEnsure = false;
        }else if(data == 4){
          this.priceUnlimitedIsEnsure = false;
          this.priceThreeHundredIsEnsure = false;
          this.priceFiveHundredIsEnsure = false;
          this.priceSevenHundredIsEnsure = false;
          this.priceNineHundredIsEnsure = !this.priceNineHundredIsEnsure;
          this.priceOverNineHundredIsEnsure = false;
        }else if(data == 5){
          this.priceUnlimitedIsEnsure = false;
          this.priceThreeHundredIsEnsure = false;
          this.priceFiveHundredIsEnsure = false;
          this.priceSevenHundredIsEnsure = false;
          this.priceNineHundredIsEnsure = false;
          this.priceOverNineHundredIsEnsure = !this.priceOverNineHundredIsEnsure;
        }
      },
      sendPriceCondition(){
        var priceMin = 0;
        var priceMax = 0;
        if(this.priceUnlimitedIsEnsure){
           priceMin = 0;
           priceMax = 0;
        }else if(this.priceThreeHundredIsEnsure){
           priceMin = 0;
           priceMax = 300;
        }else if(this.priceFiveHundredIsEnsure){
           priceMin = 301;
           priceMax = 500;
        }else if(this.priceSevenHundredIsEnsure){
           priceMin = 501;
           priceMax = 700;
        }else if(this.priceNineHundredIsEnsure){
           priceMin = 701;
           priceMax = 900;
        }else if(this.priceOverNineHundredIsEnsure){
           priceMin = 901;
           priceMax = 2000;
        }
        this.$emit("getPriceCondition",priceMin,priceMax);


      },
      reset(){
        this.priceUnlimitedIsEnsure = false;
        this.priceThreeHundredIsEnsure = false;
        this.priceFiveHundredIsEnsure = false;
        this.priceSevenHundredIsEnsure = false;
        this.priceNineHundredIsEnsure = false;
        this.priceOverNineHundredIsEnsure = false;
      }
    }
  }
</script>
<style>

</style>
