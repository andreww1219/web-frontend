<script setup>


</script>

<template>
  <div class="work-space">
    <div class="nav">
      <div class="info">
<<<<<<< HEAD
      </div>
      <div class="nav-list">
=======
        <div class="img">
          <img src="@/assets/img/白子.jpg" alt="">
        </div>
        <div class="usr">
          <div class="usr-name">
            <div class="usr-name-text">
              砂狼白子
            </div>
            <div class="usr-name-edit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 21H21.5" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z" stroke="#999999" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="usr-char">
            管理员
          </div>
        </div>
      </div>
      <div class="nav-list">
        <div class="nav-list-item" ></div>
>>>>>>> origin
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
  background-color:#E6EAF18A;

}
.nav{
  position: fixed;
  width: 350px;
  height: 100%;
  background-color: #E6EAF18A;

  border: 1px solid transparent;
  border-right-color: #C5C9D2;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  .info{
    width: 100%;
    height: 15%;

<<<<<<< HEAD
    background-color:  #E6EAF18A;
=======
    //background-color: #ffffff;
    display: flex;
    flex-flow: row;

    justify-content: center;
    align-items: center;
    .img{
      width: 70px;
      height: 70px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .usr{
      width: 50%;
      height: 70px;
      margin-left: 2%;

      //background-color: gray;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: flex-start;

      &-name{
        width: 80%;
        height: 40%;
        display: flex;
        flex-flow: row;

        justify-content: space-between;
        &-text{
          font-size: 20px;
        }
      }
      &-char{
        width: 100%;
        height: 25%;

        font-size: 16px;
        color: #999999;
      }
    }
>>>>>>> origin
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
  }
}

</style>
