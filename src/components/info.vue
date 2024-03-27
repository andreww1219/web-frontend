<script setup>
</script>

<template>
    <img class='head' src="@/assets/img/head_img.png"/>
    <div class="name">机器人1号</div>
    <img class='infoicon' src="@\assets\img\edit.png"/>
    <div class="tip">管理员</div>
</template>
<style lang="less" scoped>
.head{
    height:50%;
    width:20%;
    margin:10% 0 0 10%;
    display: inline;
  };
  .name{
    display: inline-block;
    position: absolute;
    margin:15% 0% 0% 5%;
    font-size: 110%
  };
  .infoicon{
    display: inline-block;
    position: absolute;
    margin:15% 0% 0% 35%;
  };
  .tip{
    font-size: 80%;
    margin:-8% 0 0 35%;
    color: gray;
    width:20%;
  }
</style>