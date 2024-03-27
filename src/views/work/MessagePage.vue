<script setup>
import info from '@/components/info.vue'
import navlist from '@/components/navlist.vue'
import postmessage from '@/components/postmessage.vue'
import feedback from '@/components/feedback.vue'
import {ref} from 'vue'
let ispost=ref(true)
const myClick=(msg)=>{
  ispost.value=msg.value
}
const userClick=(msg)=>{
  ispost.value=msg.value
}
</script>

<template>
  <div class="work-space">
    <div class="nav">
      <div class="info">
        <info></info>
      </div>
      <div class="nav-list">
        <navlist></navlist>
      </div>
      <div class="exit">
        <img class="exiticon" src="@\assets\img\out.png"/>
        <div class="outtext">退出</div>
      </div>
    </div>
    <postmessage v-if="ispost" @myClick="myClick"></postmessage>
    <feedback v-if="!ispost" @userClick="userClick"></feedback>
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
}

</style>
