<style src="../assets/css/consultantRegion.css"></style>

<template>
  <div class="consultant-region-component">
    <div class="consultant-region">
      <div class="consultant-region-province">
         <div v-for="item in this.province" @click="choseProvince(item.id)"
              class="consultant-region-grade"
              :class="item.display ? 'consultant-region-grade-ensure' : 'consultant-region-grade-unensure' ">
           {{item.value}}
         </div>

         <!--<div class="consultant-region-grade consultant-region-grade-unensure">北京市</div>-->
         <!--<div class="consultant-region-grade consultant-region-grade-unensure">天津市</div>-->
         <!--<div class="consultant-region-grade consultant-region-grade-unensure">上海市</div>-->
         <!--<div class="consultant-region-grade consultant-region-grade-unensure">重庆市</div>-->
         <!--<div class="consultant-region-grade consultant-region-grade-unensure">河北省</div>-->
         <!--<div class="consultant-region-grade consultant-region-grade-ensure">浙江省</div>-->
      </div>
      <div class="consultant-region-city">
         <div  v-for="item in this.shi1" @click="choseCity(item.id)"
            class="consultant-region-grade"
            :class="item.display ? 'consultant-region-grade-ensure' : 'consultant-region-grade-unensure' ">
           {{item.value}}
         </div>
      </div>
    </div>
    <div class="consultant-region-button">
      <div class="consultant-region-button-detail consultant-region-button-reset" @click="reset()">全部重置</div>
      <div class="consultant-region-button-detail consultant-region-button-ensure" @click="sendRegionCondition()">确定</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "consultantregion",
    data:function(){
      return {
        data:"this is consultantregion",
        mapJson:'../static/json/map.json',
        province:'',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city:'',
        block:'',
        textarea: '',
        chooseProvinceName: '',
        chooseCityName: '',
      }
    },
    created:function(){
      this.getCityData();
    },
    methods:{
      // 加载china地点数据，三级
      getCityData:function(){
        var that = this;
        this.$axios.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: [],display:false})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: [],display:false})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(id) {
        for (var index2 in this.province) {
          if (id === this.province[index2].id) {
            this.province[index2].display = true;
            this.chooseProvinceName = this.province[index2].value;
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            // this.E = this.qu1[0].id
            // this.provinceName = this.province[index2].value
            // this.cityName = this.province[index2].children[0].value
          }else{
            this.province[index2].display = false;
          }
        }


      },
      // 选市
      choseCity:function(id) {
        for (var index3 in this.shi1) {
          if (id === this.shi1[index3].id) {
            this.shi1[index3].display = true;
            this.chooseCityName = this.shi1[index3].value;
            // this.qu1 = this.shi1[index3].children
            // this.qu = this.shi1[index3].children[0].value
            // this.E = this.qu1[0].id
            // console.log(this.E)
            // this.cityName = this.city[index3].value
          }else{
            this.shi1[index3].display = false;
          }
        }
      },
      reset(){
          for (var index2 in this.province) {
            this.province[index2].display = false;
          }
          for (var index3 in this.shi1) {
            this.shi1[index3].display = false;
          }
          this.chooseProvinceName ='';
          this.chooseCityName = '';
      },
      sendRegionCondition(){
        this.$emit("getRegionCondition",this.chooseProvinceName,this.chooseCityName);
      }

    }
  }
</script>
<style>

</style>
