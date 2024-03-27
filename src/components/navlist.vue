<script setup>
</script>

<template>
    <div class="block">
        <img class='navicon' src="@\assets\img\home.png"/>
        <div class="text">主页</div>
      </div>
      <div class="block">
        <img class='navicon' src="@\assets\img\community.png"/>
        <div class="text">社区</div>
      </div>
    <div class="block">
      <div class="select">
        <div class="highlight"></div>
        <img class='navicon' src="@\assets\img\message.png"/>
        <div class="text">消息</div>
      </div>
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
       <img class='navicon' src="@\assets\img\log.png"/>
       <div class="text">系统日志</div>
      </div>
    <div class="block">
      <img class='navicon' src="@\assets\img\commodity.png"/>
      <div class="text">商品管理</div>
    </div>
</template>
<style lang="less" scoped>
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
</style>