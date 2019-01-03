<style src="../assets/css/home.css"></style>

<template>
  <div class="home-box">
    <!-- <div class="home-bg"  :style="homeDesc.bgImg"  @click="toDetail(homeDesc.id)">
      <div class="home-bgcolor">
        <div class="home-desc">
          <h4 class="home-day">{{homeDesc.day}}</h4>
          <p class="home-month">{{homeDesc.month}}</p>
          <p class="home-text-short">{{homeDesc.textShort}}</p>
        </div>
        “藏龙”项目从这里开始
      </div>
      <one-load v-show="showLoading"></one-load>
    </div> -->
    <!--首页banner -->
    <div>
      <router-link tag='a' :to="'./consultantDetail'" >
      <img src="../assets/images/banner.jpg" style="width:100%;height:150px;">
      </router-link>
    </div>

    <!--搜索框 -->
    <!--<div>-->
      <input class="search" v-model="searchName" @mouseleave="getDatas()" placeholder="输入咨询师姓名搜索"></input>
    <img src="../assets/images/search.png" class="search-imge" >
    <!--</div>-->


    <!--<layer v-model="showLayer" @sure="yesFn" :btn="['确定使用', '放弃']" :content="'欢迎使用vue2-layer-mobile'"></layer>-->
    <!--筛选条件 -->
    <div class="screening-conditions">
      <div class="screening-conditions-region screening-conditions-font" @click="viewConsultantRegion()">地区
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-price screening-conditions-font" @click="viewConsultantPrice()">价格
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-mode screening-conditions-font" @click="viewConsultantMode()">咨询方式
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-field screening-conditions-font" @click="viewConsultantField()">领域
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>

    </div>
    <!--筛选条件具体展示 -->
    <consultantRegion v-if="showConsultantRegion" v-on:getRegionCondition="getRegionCondition"></consultantRegion>
    <consultantPrice v-if="showConsultantPrice" v-on:getPriceCondition="getPriceCondition"></consultantPrice>
    <consultantMode v-if="showConsultantMode" v-on:getModeCondition="getModeCondition"></consultantMode>
    <consultantField v-if="showConsultantField"></consultantField>

    <!--咨询师List -->
    <div class="consultant-list" v-for="item in consultantList">

      <!--咨询师信息 -->
      <div class="consultant" @click="consultantDetail(item.id)">
        <!--咨询师头像 -->
        <div class="head-portrait">
          <img :src="'https://image-consultant.oss-cn-hangzhou.aliyuncs.com/'+item.headPortraitUrl" class="head-portrait-img" />
        </div>
        <!--../assets/images/headPortrait.png-->
        <!--咨询师介绍 -->
        <div class="introduce">
          <div class="consultant-name">
             {{item.name}}
          </div>
          <div class="consultant-describe">
            {{item.experienceOfTraining}}
          </div>
          <div class="consultant-price">
            {{item.price}}元/次
          </div>
        </div>


      </div>
      <div class="line"></div>


    </div>

  </div>
</template>

<script>
  import consultantPrice from '../components/consultantPrice.vue'
  import consultantField from '../components/consultantField.vue'
  import consultantMode from '../components/consultantMode.vue'
  import consultantRegion from '../components/consultantRegion.vue'
  import oneLoad from "../components/loading.vue" //引入loading组件,在数据加载时显示,他的显示隐藏由 showLoading的值决定

  export default {
    name: 'home',
    components:{
      oneLoad,
      consultantPrice,
      consultantField,
      consultantMode,
      consultantRegion
    },
    data:function(){
      return {
        msg: 'Welcome to one demo',
        showLoading:true,
        showConsultantPrice: false,
        showConsultantField: false,
        showConsultantMode: false,
        showConsultantRegion: false,
        homeDesc:{},
        searchName:"",
        consultationMethodList:[],
        priceMin:0,
        priceMax:0,
        chooseProvinceName: '',
        chooseCityName: '',
      }
    },
    created:function(){
      this.getDatas();
    },
    methods:{
      getDatas:function(){  //从后台获取数据
        var params = new URLSearchParams();
        params.append('name', this.searchName);
        params.append('consultationMethodList', this.consultationMethodList);
        params.append('priceMin', this.priceMin);
        params.append('priceMax', this.priceMax);
        params.append('province', this.chooseProvinceName);
        params.append('city', this.chooseCityName);

        console.log("~~~~~~~~~~"+this.consultationMethodList+
                    "~~~~~~~~"+this.priceMin+"~~~~~~~~~~~"+this.priceMax+
                    "~~~~~~~~"+this.chooseProvinceName+"~~~~~~~~~~~"+this.chooseCityName);

        return this.$axios.post("/api/consultantCenter/consultant/getAllMessageByCondition",params).then((response) => {
        // return this.$axios.post("/api/consultant/getAllMessageByCondition",params).then((response) => {
          if (response.status === 200) {
            this.$store.state.consultantList = response.data.consultantList;
            this.$store.state.name = response.data.consultantList[0].name;

          } else {
            return {msg: "抱歉，服务器错误"}
          }
        }).catch((error) => {
          return Promise.reject({msg: error.message})
        })

        // this.$http.get("/homeData").then(response => {   //使用了vue-resource去请求后台接口
        //   this.homeDesc = response.body.homeDesc;
        //   this.showLoading = false;
        // },error => {
        //   console.log(error);
        // });
      },
      viewConsultantPrice:function () {
          this.showConsultantPrice = !this.showConsultantPrice;
          this.showConsultantField = false;
          this.showConsultantMode = false;
          this.showConsultantRegion = false;
      },
      viewConsultantField:function () {
        this.showConsultantField = !this.showConsultantField;
        this.showConsultantPrice = false;
        this.showConsultantMode = false;
        this.showConsultantRegion = false;
      },
      viewConsultantMode:function () {
        this.showConsultantMode = !this.showConsultantMode;
        this.showConsultantPrice = false;
        this.showConsultantField = false;
        this.showConsultantRegion = false;
      },
      viewConsultantRegion:function () {
        this.showConsultantRegion = !this.showConsultantRegion;
        this.showConsultantPrice = false;
        this.showConsultantField = false;
        this.showConsultantMode = false;
      },
      consultantDetail(id){
        this.$router.push({
          path:'consultantDetail',
          query:{
             id:id
          }
        })
      },
      resetCondition:function(){
        this.consultationMethodList = [];
        this.priceMin = 0;
        this.priceMax = 0;
        this.chooseProvinceName = '';
        this.chooseCityName = '';
      },
      getModeCondition:function (data) {
         this.resetCondition();
         this.consultationMethodList.push(data);
         this.getDatas();
      },
      getPriceCondition:function(priceMin,priceMax){
         this.resetCondition();
         this.priceMin = priceMin;
         this.priceMax = priceMax;
         this.getDatas();
      },
      getRegionCondition:function(chooseProvinceName,chooseCityName){
         this.resetCondition();
         this.chooseProvinceName = chooseProvinceName;
         this.chooseCityName = chooseCityName;
         this.getDatas();
      },

    },

    computed:{
      consultantList(){
        return this.$store.state.consultantList
      },
    }
}
  </script>
