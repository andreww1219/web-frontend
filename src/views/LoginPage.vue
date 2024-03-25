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

  background-image: url('@/assets/img/umi.jpg');
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .login{
    width: 40%;
    height: 50%;

    background-color: #fff;
  }
}
</style>
