<script setup>

</script>

<template>
  <div class="work-space">
    <div class="nav">
      <div class="info">

      </div>
      <div class="nav-list">

      </div>
      <div class="exit">

      </div>
    </div>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.work-space{
  width: 100%;
  height: 100%;
  background-color: var(--workspace-background);

}
.nav{
  position: fixed;
  width: 350px;
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  .info{
    width: 100%;
    height: 15%;

    background-color: #ffffff;
  }
  &-list{
    width: 100%;
    height: 70%;

    background-color: red;
  }
  .exit{
    width: 100%;
    height: 10%;

    background-color: gray;
  }
}
</style>
