<script setup>

</script>

<template>
  <div class="login-container">
    <div class="login">
      <RouterView />
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container{
  width: 100%;
  height: 100%;
  opacity: 90%;

  background-image: url('@/assets/img/login_bg.png');
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .login{
    width: 40%;
    height: 50%;
    border:5px solid white;
    border-radius: 5%;
    opacity: 90%;
    background-color: #fff;
  };
}
</style>
