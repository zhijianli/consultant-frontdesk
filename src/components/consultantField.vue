<style src="../assets/css/consultantField.css"></style>

<template>
  <div class="consultant-field-component">
    <div v-for="item in consultantFieldArray">
      <div class="consultant-field-title">{{item.value}}</div>
      <div class="consultant-field-content">
        <!--<div class="consultant-field-content-line">-->
            <!--<div  @click="chooseConsultantFieldDetail(item2.id)"-->
                  <!--class="consultant-field-grade"-->
                 <!--:class="item2.display ? 'consultant-field-grade-ensure' : 'consultant-field-grade-unensure' "-->
                 <!--v-for="item2 in item.children">{{item2.value}}-->
            <!--</div>-->
        <!--</div>-->
        <div v-for="item2 in item.children" class="consultant-field-content-line">
          <div  @click="chooseConsultantFieldDetail(item3.id)"
                class="consultant-field-grade"
                :class="item3.display ? 'consultant-field-grade-ensure' : 'consultant-field-grade-unensure' "
                v-for="item3 in item2.children">{{item3.value}}
          </div>
        </div>
      </div>
    </div>

    <div class="consultant-field-button">
      <div class="consultant-field-button-detail consultant-field-button-reset" @click="reset()">全部重置</div>
      <div class="consultant-field-button-detail consultant-field-button-ensure" @click="sendFieldCondition()">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantfield",
    data:function(){
      return {
        data:"this is consultantfield",
        consultingFieldList:null,
        consultantFieldArray:[],
        consultantFieldDetailArray:[],
      }
    },
    created:function(){
      this.getFieldData();
    },
    methods:{
      // 获取领域数据
      getFieldData:function(){
        var params = new URLSearchParams();
        // this.$axios.post("/api/consultantCenter/consultingField/getConsultantFieldAndDetail",params).then((response) => {
            this.$axios.post("/api/consultingField/getConsultantFieldAndDetail",params).then((response) => {
              if (response.status === 200) {
              this.consultingFieldList = response.data.consultingFieldList;
              for (var index in this.consultingFieldList) {

                  var consultingFieldDetailList = this.consultingFieldList[index].consultingFieldDetailList;

                  var consultantFieldMidArray = [];
                  var consultantFieldBottomArray = [];
                  for(var index1 in consultingFieldDetailList){

                      this.consultantFieldDetailArray.push({id: consultingFieldDetailList[index1].id, value: consultingFieldDetailList[index1].name,consultingFieldId: consultingFieldDetailList[index1].consultingFieldId, display:false});
                      consultantFieldBottomArray.push(this.consultantFieldDetailArray[this.consultantFieldDetailArray.length-1]);
                      if((index1!=0 && (index1+1)%3==0) || index1 == (consultingFieldDetailList.length-1)){
                         consultantFieldMidArray.push({value:"中间层",children: consultantFieldBottomArray});
                         consultantFieldBottomArray=[];
                      }

                  }
                  this.consultantFieldArray.push({id: this.consultingFieldList[index].id, value: this.consultingFieldList[index].name,children: consultantFieldMidArray})
            }

            // 分类领域
            // for (var index in this.consultantFieldArray) {
            //   for (var index1 in this.consultantFieldDetailArray) {
            //     if (this.consultantFieldArray[index].id === this.consultantFieldDetailArray[index1].consultingFieldId) {
            //         var consultantFieldMidArray = [];
            //         for (var i=0;i<3;i++){
            //           consultantFieldMidArray.push(this.consultantFieldDetailArray[index1]);
            //         }
            //         this.consultantFieldArray[index].children.push(consultantFieldMidArray);
            //       // this.consultantFieldArray[index].children.push(this.consultantFieldDetailArray[index1]);
            //        // console.log(this.consultantFieldArray[index].id+"======="+this.consultantFieldDetailArray[index1].consultingFieldId);
            //     }
            //   }
            // }
          } else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      chooseConsultantFieldDetail:function(id){
          for (var index in this.consultantFieldDetailArray) {
            if (id === this.consultantFieldDetailArray[index].id) {
              this.consultantFieldDetailArray[index].display = !this.consultantFieldDetailArray[index].display;
            }
          }
      },
      reset:function () {
        for (var index in this.consultantFieldDetailArray) {
            this.consultantFieldDetailArray[index].display = false;
        }
      },
      sendFieldCondition:function(){
        var chooseFieldDetailList = [];
        for (var index in this.consultantFieldDetailArray) {
          if(this.consultantFieldDetailArray[index].display === true){
             chooseFieldDetailList.push(this.consultantFieldDetailArray[index].id);
          }
        }
        this.$emit("getFieldCondition",chooseFieldDetailList);
      }
    }
  }
</script>
<style>

</style>
