<style src="../assets/css/consultantDetail.css"></style>

<template>
  <div class="home-box">

    <!--咨询师banner -->
    <div>
      <router-link tag='a' :to="'./consultantDetail'" >
        <img src="../assets/images/banner.jpg" style="width:100%;height:160px;">
      </router-link>
    </div>

    <!--咨询师介绍 -->
    <div class="consultant-introduce">
      <div class="consultant-experience"></div>
      <div class="consultant-field"></div>
      <div class="consultant-price"></div>
      <div class="consultant-contact-information"></div>


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
