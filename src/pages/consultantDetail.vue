<style src="../assets/css/consultantDetail.css"></style>

<template>
  <div class="home-box">

    <!--咨询师banner -->
    <div class="banner">
      <router-link tag='a' :to="'./consultantDetail'" >
        <img src="../assets/images/consultantDetail.png" class="banner-img" >
      </router-link>
    </div>
    <div class="head">
      <img  v-bind:src="headPortraitUrl" class="head-img" >
      <div class="con-name">{{this.consultantName}}</div>
      <div class="con-level">国家三级心理咨询师</div>
      <!--{{https://image-consultant.oss-cn-hangzhou.aliyuncs.com/this.headPortraitUrl}}-->
      <!--../assets/images/headPortrait.png-->
    </div>

    <!--咨询师介绍 -->
    <div class="consultant-introduce">
      <!--受训经历 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
        <div class="title">受训经历</div>
        </div>
        <div class="content">
             {{this.experienceOfTraining}}
        </div>
      </div>

      <!--擅长领域和方向 -->
      <div class="consultant-field-detail">
        <div class="title-line">
          <div class="title">擅长领域和方向</div>
        </div>
        <div style="display: flex" v-for="item in consultingFieldList" class="content">

          <div>{{item.name}}：</div>

          <div v-for="item2 in item.consultingFieldDetailList" class="consulting-field-detail">
               {{item2.name}}
          </div>

        </div>

      </div>

      <!--咨询价格 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
          <div class="title">咨询价格</div>
        </div>
        <div class="content">
          {{this.price}}元/小时
        </div>
      </div>

      <!--联系方式 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
          <div class="title">联系方式</div>
        </div>
        <div class="content">
          {{this.telephone}}
        </div>

      </div>


    </div>


  </div>
</template>

<script>
  import oneLoad from "../components/loading.vue" //引入loading组件,在数据加载时显示,他的显示隐藏由 showLoading的值决定
  export default {
    name: 'home',
    components:{
      oneLoad
    },
    data:function(){
      return {
        msg: 'Welcome to one demo',
        showLoading:true,
        homeDesc:{},
        id:null,
        consultantName:'',
        telephone:'',
        experienceOfTraining:'',
        price:'',
        headPortraitUrl:'',
        aliOssUrl:'https://image-consultant.oss-cn-hangzhou.aliyuncs.com/',
        consultingFieldList:'',

      }
    },
    created:function(){
      this.getConsultantFieldAndDetail();
    },
    beforeMount() {
      this.id = this.$route.query.id;
      if(this.id>0){
        var params = new URLSearchParams();
        params.append('id', this.$route.query.id);
        return this.$axios.post("/api/consultantCenter/consultant/getConsultantById",params).then((response) => {
          if (response.status === 200) {
            this.consultantName = response.data.consultant.name;
            this.telephone = response.data.consultant.telephone;
            this.experienceOfTraining = response.data.consultant.experienceOfTraining;
            this.price = response.data.consultant.price;
            this.headPortraitUrl = this.aliOssUrl+response.data.consultant.headPortraitUrl;
          } else {
            return {msg: "抱歉，服务器错误"}
          }
        }).catch((error) => {
          return Promise.reject({msg: error.message})
        })
      }

    },
    methods:{
      // 加载咨询领域数据
      getConsultantFieldAndDetail:function(){
        var that = this;
        var params = new URLSearchParams();
        if(this.id){
          params.append('consultantId', this.id);
        }
        this.$axios.post("/api/consultantCenter/consultingField/getConsultantFieldAndDetail",params).then((response) => {
          if (response.status === 200) {

            console.log("-========-");
            this.consultingFieldList = response.data.consultingFieldList

          } else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      }
    }
  }
</script>
