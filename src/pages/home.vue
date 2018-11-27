<template>
  <div class="home-box">
    <div class="home-bg"  :style="homeDesc.bgImg"  @click="toDetail(homeDesc.id)">
      <div class="home-bgcolor">
        <div class="home-desc">
          <h4 class="home-day">{{homeDesc.day}}</h4>
          <p class="home-month">{{homeDesc.month}}</p>
          <p class="home-text-short">{{homeDesc.textShort}}</p>
        </div>
        “藏龙”项目从这里开始
      </div>
      <one-load v-show="showLoading"></one-load>
    </div>
    <!--首屏文字和图片完-->
    <!--其他代码
         .....
     -->
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
