<style src="../assets/css/consultantMode.css"></style>

<template>
  <div class="consultant-mode-component">
    <div class="consultant-mode-title">咨询方式</div>
    <div class="consultant-mode-content">
      <div class="consultant-mode-content-line">
        <div @click="chooseModeCondition(4)" :class="{'consultant-mode-grade': modeGrade, 'consultant-mode-grade-ensure': videoFaceIsEnsure}">视频/当面</div>
        <div @click="chooseModeCondition(3)" :class="{'consultant-mode-grade': modeGrade, 'consultant-mode-grade-ensure': faceIsEnsure}">面对面</div>
        <div @click="chooseModeCondition(2)" :class="{'consultant-mode-grade': modeGrade, 'consultant-mode-grade-ensure': videoIsEnsure}">视频</div>
      </div>
      <div class="consultant-mode-content-line">
        <div @click="chooseModeCondition(1)" :class="{'consultant-mode-grade': modeGrade, 'consultant-mode-grade-ensure': voiceIsEnsure}"   >语音</div>
        <div class="consultant-mode-grade consultant-mode-grade-hidden"></div>
        <div class="consultant-mode-grade consultant-mode-grade-hidden"></div>
      </div>
    </div>

    <div class="consultant-mode-button">
      <div class="consultant-mode-button-detail consultant-mode-button-reset" @click="reset()">全部重置</div>
      <div class="consultant-mode-button-detail consultant-mode-button-ensure" @click="sendModeCondition()">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantmode",
    data:function(){
      return {
        data:"this is consultantmode",
        voice:'',
        modeGrade:true,
        videoFaceIsEnsure:false,
        faceIsEnsure:false,
        videoIsEnsure:false,
        voiceIsEnsure:false
      }
    },
    methods:{
      chooseModeCondition(data){
         if(data == 1){
           this.voiceIsEnsure = !this.voiceIsEnsure;
         }else if(data == 2){
           this.videoIsEnsure = !this.videoIsEnsure;
         }else if(data == 3){
           this.faceIsEnsure = !this.faceIsEnsure;
         }else if(data == 4){
           this.videoFaceIsEnsure = !this.videoFaceIsEnsure;
         }
      },
      sendModeCondition(){
        var data = [];
        if(this.voiceIsEnsure){
          data.push(1);
        }
        if(this.videoIsEnsure){
          data.push(2);
        }
        if(this.faceIsEnsure){
          data.push(3);
        }
        if(this.videoFaceIsEnsure){
          data.push(4);
        }
        this.$emit("getModeCondition",data);
      },
      reset(){
        this.voiceIsEnsure = false;
        this.videoIsEnsure = false;
        this.faceIsEnsure = false;
        this.videoFaceIsEnsure = false;
      }
    }
  }
</script>
<style>

</style>
