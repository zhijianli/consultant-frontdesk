<style src="../assets/css/consultantField.css"></style>

<template>
  <div class="consultant-field-component">
    <div v-for="item in consultantFieldArray">
      <div class="consultant-field-title">{{item.value}}</div>
      <div class="consultant-field-content">
        <div class="consultant-field-content-line">
          <div  @click="chooseConsultantFieldDetail(item2.id)"
                class="consultant-field-grade"
               :class="item2.display ? 'consultant-field-grade-ensure' : 'consultant-field-grade-unensure' "
               v-for="item2 in item.children">{{item2.value}}</div>
        </div>
      </div>
    </div>

    <div class="consultant-field-button">
      <div class="consultant-field-button-detail consultant-field-button-reset" @click="reset()">全部重置</div>
      <div class="consultant-field-button-detail consultant-field-button-ensure">确定</div>
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
        this.$axios.post("/api/consultantCenter/consultingField/getConsultantFieldAndDetail",params).then((response) => {
          if (response.status === 200) {
            this.consultingFieldList = response.data.consultingFieldList;
            var consultingFieldDetailList = null;
            for (var index in this.consultingFieldList) {
              this.consultantFieldArray.push({id: this.consultingFieldList[index].id, value: this.consultingFieldList[index].name,children: []})
              consultingFieldDetailList = this.consultingFieldList[index].consultingFieldDetailList;
              for(var index1 in consultingFieldDetailList){
                 this.consultantFieldDetailArray.push({id: consultingFieldDetailList[index1].id, value: consultingFieldDetailList[index1].name,consultingFieldId: consultingFieldDetailList[index1].consultingFieldId, display:false})
              }
              // console.log("======="+this.consultantFieldDetailArray[0].value);
            }

            // 分类领域
            for (var index in this.consultantFieldArray) {
              for (var index1 in this.consultantFieldDetailArray) {
                if (this.consultantFieldArray[index].id === this.consultantFieldDetailArray[index1].consultingFieldId) {
                  this.consultantFieldArray[index].children.push(this.consultantFieldDetailArray[index1]);
                  console.log(this.consultantFieldArray[index].id+"======="+this.consultantFieldDetailArray[index1].consultingFieldId);
                }
              }
            }
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
      }
    }
  }
</script>
<style>

</style>
