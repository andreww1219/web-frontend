<script setup>
import {ref} from 'vue'
import { defineEmits } from 'vue';
const data=ref(false)
const emit=defineEmits('myClick')
const myClick = () => {
  emit('myClick',data)
        }
</script>

<template>
    <div>
        <div class="right-bar">
        <div class="title">消息</div>
        <div class="block">
          <div class="rec">
          <img class="icon" src="@\assets\img\report.png" />
          <div class="text2">发布消息</div>
        </div>
          <div class="block" @click="myClick">
            <img class="icon2"  src="@\assets\img\feedback.png" />
            <div class="text3" >用户反馈</div>
          </div>
        </div>
        </div>
        <div class="write">
          <textarea class="area">发布内容</textarea>
      </div>
      <button class="btn1" type="submit">上传消息封面</button>
      <button class="btn2" type="submit">发布</button>
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
      margin-top: 20%;
      height:7%;
      }
      .icon{
      display: inline;
      height:70%;
      width:13%;
      margin-left: 10%;
      margin-top: 3%;
      margin-bottom: -5%;
      };
      .icon2{
        height: 6%;
        width:14%;
        margin-top: 10%;
        margin-left: 10%;
        margin-bottom: -4%;
      };
    .text2{
      display: inline;
      color: white;
      padding-top: -5%;
      padding-left: 15%;
      };
      .text3{
        display: inline;
        padding-top: -5%;
        padding-left: 14%;
        color: #666666;
  
      }
    }
  };
  .write{
    display: flex;
    position: absolute;
    background-color: white;
    height:55%;
    width:56%;
    border: 5px solid white;
    border-radius: 20px;
    margin:3% 10% 10% 40%;
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
    width:10%;
    background-color: #146EF5;
    position: absolute;
    margin:35% 10% 0 80%;
  }
  .btn2{
    display: inline;
    border:1px solid #146EF5;
    ;
    border-radius: 15px;
    height: 5%;
    color: white;
    width:5%;
    background-color: #146EF5;
    position: absolute;
    margin:35% 10% 0 91%;
  }
</style>