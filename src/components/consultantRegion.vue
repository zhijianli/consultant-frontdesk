<style src="../assets/css/consultantRegion.css"></style>

<template>
  <div class="consultant-region-component">
    <div class="consultant-region">
      <div class="consultant-region-province">
         <div v-for="item in this.province" class="consultant-region-grade consultant-region-grade-ensure" >
           {{item.value}}
         </div>

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
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
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

    }
  }
</script>
<style>

</style>
