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
      <img src="../assets/images/headPortrait.png" class="head-img" >
      <div class="con-name">李志坚</div>
      <div class="con-level">国家三级心理咨询师</div>
    </div>

    <!--咨询师介绍 -->
    <div class="consultant-introduce">
      <!--受训经历 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
        <div class="title">受训经历</div>
        </div>
        <div class="content">
             非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
             非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
             非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。

        </div>
      </div>

      <!--擅长领域和方向 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
          <div class="title">擅长领域和方向</div>
        </div>
        <div class="content">
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
        </div>
      </div>

      <!--咨询价格 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
          <div class="title">咨询价格</div>
        </div>
        <div class="content">
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
        </div>
      </div>

      <!--联系方式 -->
      <div class="consultant-introduce-detail">
        <div class="title-line">
          <div class="title">联系方式</div>
        </div>
        <div class="content">
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
          非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。非常牛逼。
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
        homeDesc:{}
      }
    },
    created:function(){
      this.getDatas();
    },
    methods:{
      getDatas:function(){  //从后台获取数据
        this.$http.get("/homeData").then(response => {   //使用了vue-resource去请求后台接口
          this.homeDesc = response.body.homeDesc;
          this.showLoading = false;
        },error => {
          console.log(error);
        });
      }
    }
  }
</script>
