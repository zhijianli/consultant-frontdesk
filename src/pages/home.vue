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

    <!--筛选条件 -->
    <div class="screening-conditions">
      <div class="screening-conditions-region screening-conditions-font">地区
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-price screening-conditions-font">价格
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-mode screening-conditions-font">咨询方式
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>
      <div class="screening-conditions-field screening-conditions-font">领域
        <img src="../assets/images/triangle.png" class="triangle" >
      </div>

    </div>

    <!--咨询师List -->
    <div class="consultant-list">

      <!--咨询师信息 -->
      <div class="consultant">
        <!--咨询师头像 -->
        <div class="head-portrait">
          <img src="../assets/images/headPortrait.png" class="head-portrait-img" >
        </div>

        <!--咨询师介绍 -->
        <div class="introduce">
          <div class="consultant-name">
             李志坚
          </div>
          <div class="consultant-describe">
            一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。
            一个牛逼的心理咨询师。
          </div>
          <div class="consultant-price">

             300元/次
          </div>
        </div>


      </div>
      <div class="line"></div>

      <!--咨询师信息 -->
      <div class="consultant">
        <!--咨询师头像 -->
        <div class="head-portrait">
          <img src="../assets/images/headPortrait.png" class="head-portrait-img" >
        </div>

        <!--咨询师介绍 -->
        <div class="introduce">
          <div class="consultant-name">
            李志坚
          </div>
          <div class="consultant-describe">
            一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。
            一个牛逼的心理咨询师。
          </div>
          <div class="consultant-price">

            300元/次
          </div>
        </div>

      </div>
      <p class="line"></p>

      <!--咨询师信息 -->
      <div class="consultant">
        <!--咨询师头像 -->
        <div class="head-portrait">
          <img src="../assets/images/headPortrait.png" class="head-portrait-img" >
        </div>

        <!--咨询师介绍 -->
        <div class="introduce">
          <div class="consultant-name">
            李志坚
          </div>
          <div class="consultant-describe">
            一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。一个牛逼的心理咨询师。
            一个牛逼的心理咨询师。
          </div>
          <div class="consultant-price">

            300元/次
          </div>
        </div>


      </div>
      <p class="line"></p>

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
