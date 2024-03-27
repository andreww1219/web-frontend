<script setup>
import {ref} from 'vue'
import { defineEmits } from 'vue';
const data=ref(true)
const emit=defineEmits('userClick')
const userClick = () => {
  emit('userClick',data)
        }
</script>

<template>
    <div>
        <div class="right-bar">
        <div class="title">消息</div>
        <div class="block">
          <div @click="userClick">
            <img class="icon" src="@\assets\img\report2.png" />
          <div class="text2">发布消息</div>
          </div>
        <div class="rec">
            <img class="icon2" src="@\assets\img\feedback2.png" />
            <div class="text3">用户反馈</div>
        </div>
        </div>
        </div>
        <button class="btn1" type="submit">全选</button>
      <button class="btn2" type="submit">删除</button>

        <div class="write">
          <textarea class="area">发布内容</textarea>
      </div>
      
    </div>
</template>
<style lang="less" scoped>
.right-bar{
    width: 15%;
    height:100%;
    margin-left: 350px;
    background-color: white;
    position: absolute;
    .title{
      font-size: 150%;
      padding:20% 0 0 15%;
    };
    .block{
      height:80%;
      .rec{
      background-color: #146EF5;
      margin-top: 12%;
      height:7%;
      }
      .icon{
      display: inline;
      height:70%;
      width:13%;
      margin-left: 10%;
      margin-top: 25%;
      margin-bottom: -5%;
      };
      .icon2{
        height: 66%;
        width:13%;
        margin-top: 4%;
        margin-left: 10%;
        margin-bottom: -5%;
      };
    .text2{
      display: inline;
      color: gray;
      padding-top: -5%;
      padding-left: 15%;
      };
      .text3{
        display: inline;
        padding-top: -5%;
        padding-left: 15%;
        color: white;
  
      }
    }
  };
  .write{
    display: flex;
    position: absolute;
    background-color: white;
    height:83%;
    width:56%;
    border: 5px solid white;
    border-radius: 20px;
    margin:7% 10% 10% 40%;
    .area{
      border: 0;
      height:90%;
      width: 99%;
      resize: none;
      outline-color: rgb(255, 255, 255);
      padding: 1%;
      font-weight: bold;
      font-size: 120%;
      margin-left: 1%;
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
  .btn1{
    display: inline;
    border:1px solid #146EF5;
    height: 5%;
    border-radius: 15px;
    color: white;
    width:7%;
    background-color: #146EF5;
    position: absolute;
    margin:3% 0% 0 40.5%;
  }
  .btn2{
    display: inline;
    border:1px solid #146EF5;
    ;
    border-radius: 15px;
    height: 5%;
    color: white;
    width:7%;
    background-color: #146EF5;
    position: absolute;
    margin:3% 0% 0 49%;
  }
</style>