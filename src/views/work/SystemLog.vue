<script setup>
import info from '@/components/info.vue';
import router from '@/router';
function tomessage(){
  router.push({path:'/work/message'})
}
</script>

<template>
  <div class="work-space">
    <div class="nav">
      <div class="info">
        <info></info>
      </div>
      <div class="nav-list">
        <div class="block">
          <img class='navicon' src="@\assets\img\home.png"/>
          <div class="text">主页</div>
        </div>
        <div class="block">
          <img class='navicon' src="@\assets\img\community.png"/>
          <div class="text">社区</div>
        </div>
      <div  @click="tomessage" class="block">
          <img class='navicon' src="@\assets\img\message2.png"/>
          <div class="text">消息</div>
      </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\doctor.png"/>
        <div class="text">医生管理</div>
      </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\usermanagement.png"/>
        <div class="text">用户管理</div>
      </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\goal.png"/>
        <div class="text">健康挑战和目标设定</div>
      </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\health.png"/>
        <div class="text">健康教育和资源库</div>
      </div>
      <div class="block">
        <div class="select">
          <div class="highlight"></div>
          <img class='navicon' src="@\assets\img\log2.png"/>
         <div class="text">系统日志</div>
        </div>
        </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\commodity.png"/>
        <div class="text">商品管理</div>
      </div>
      </div>
      <div class="exit">
        <img class="exiticon" src="@\assets\img\out.png"/>
        <div class="outtext">退出</div>
      </div>
    </div>
    <div class="write">
        <textarea class="area">
  2024-02-27 16：30   账号：新建了医生xxx的账号
  2024-02-27 16：28   查看：查看了张三的反馈</textarea>
    </div>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.work-space{
  width: 100%;
  height: 100%;
  background-color: #E6EAF18A;

}
.nav{
  position: fixed;
  width: 350px;
  height: 100%;
  background-color: #E6EAF18A;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  .info{
    width: 100%;
    height: 15%;

    background-color:  #E6EAF18A;
  }
  &-list{
    width: 100%;
    height: 70%;
    background-color:#E6EAF18A;
    .block{
      height:3%;
      width:100%;
      margin-bottom: 12%;
      margin-left: 15%;
      .select{
        display: inline;
        background-color: #E6EAF18A;
        height: 20%;
        width:100%;
        margin-left: -10px;
        .highlight{
            border: #146EF5;
            border-radius: 15px;
            width:14%;
            height:5%;
            margin-left: -3%;
            margin-top: 8%;
            background-color: #146EF5;
            float: left;
            position: absolute;
            z-index:1;
        };
         .navicon{
          background-color: #146EF5;
          margin-left: 3%;
          position: relative;
          z-index: 2;
        };
        .text{
          margin-left: 8%;
          z-index: 1;
          position: relative
        };
      };
      .navicon{
        background-color: #E6EAF18A;
        margin:10% 0% -3% 0%;
        display: inline;
      };
    .text{
      color: gray;
      display: inline;
      margin-left:8%;
      align-items: center;
        };
      }
    };
  .exit{
    width: 100%;
    height: 10%;

    background-color:  #E6EAF18A;
    ;
    .exiticon{
      margin-left: 17%;
      display: inline;
      margin-bottom: -3%;
      margin-right: 9%;
    };
    .outtext{
      margin-left: auto;
      display: inline;
      color: gray;
    }
  }
};
.write{
  display: flex;
  position: absolute;
  background-color: white;
  height:55%;
  width:73%;
  border: 5px solid white;
  border-radius: 20px;
  margin:3% 10% 10% 24%;
  .area{
    border: 0;
    height:90%;
    width: 99%;
    resize: none;
    padding:1%;
    outline-color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 120%;
    overflow:scroll;
    overflow-x:hidden;
  }
  .area::-webkit-scrollbar {
    width: 15px;
 }
 .area::-webkit-scrollbar-thumb {
    border-radius: 10px;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      background-color: #5d99f2;
}
.area::-webkit-scrollbar-track {
    background-color: transparent;
}
}
</style>
