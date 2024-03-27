<script setup>
import router from '@/router';

function tomanagerlogin(){
  router.push({path:'/login/manager'})
}
</script>

<template>
  <img src="@/assets/img/head_img.png" class="headimg" />
  <div class="doctor-login">
      管理员登录
  </div>
  <div class="input-block">
    <img src="@/assets/img/username.png" class="icon">
    <input type="text" placeholder="请输入用户名"/> 
  </div>
  <div class="input-block">
    <img src="@/assets/img/password.png" class="icon">
    <input type='password' placeholder="请输入密码"/>
  </div>
  <button type="submit" class="sub">立即登录</button>
</template>

<style lang="less" scoped>
.headimg{
  width:20%;
  height:30%;
  margin:5% 0 0 40%;
};
.doctor-login{
  width: 100%;
  height: 1%;
  font-weight:bold;
  font-size: 160%;
  margin:0 0 8% 40%;
};
.input-block{
  border:5% solid white;
  border-radius: 10px;
  background-color:#CED8DC;
  height: 10%;
  width: 60%;
  margin-left: 20%;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  .icon{
  height:60%;
  width:8%;
  margin:2% 0 2% 5%;
  background-color: #CED8DC;
  display: inline; 
  }
};
.input-block input{
  width: 80%;
  height:80%;
  background-color: #CED8DC;
  outline: none;
  border:0;
  color:#999999;
  font-size: 110%;
  };
  .sub{
    border: rgba(11, 72, 116, 0.8);
    border-radius: 30px;
    background-color: rgba(11, 72, 116, 0.8);
    height:10%;
    width:60%;
    margin-left: 20%;
    font-size: 130%;
    color: #FFFFFF;
  }
.manager{
  color:#386B8F;
  display: inline-block;
  margin:0 1% 0 80%;
}
.manager-icon{
  height: 3.5%;
  width: 3.5%;
}


</style>
