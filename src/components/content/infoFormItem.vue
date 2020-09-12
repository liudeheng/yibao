<template>
  <div class="box" >
   
    <div class="left" >{{infoItem.rank}}</div>
    <div class="mid">
      <div>{{infoItem.nickname}}</div>
      <div>
        <span>笔名：</span>
        <span>{{infoItem.id}}</span>
      </div>     
    </div>
    <div class="right">
      <div>{{infoItem.vote}}</div>
    </div>
    </div>
 
</template>

<script>
export default {
  name:"infoFormItem",
  props: {
    infoItem: {
      type: Object,
      default() {
        return{}
      }
    }
  }
}
</script>

<style scoped>
 .box {
      width: 100%;
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      
      
    }
    .left {
     flex: 2;
     color: red;
     font-size: 28px;
    }
    .mid {
      flex: 5;
    }
    .mid>:nth-child(1) {
      font-size: 28px;
      font-weight: 600;
      color: black;
      padding-bottom: 10px;
    }
    .mid>:nth-child(2) span{
      color: rgb(182, 181, 180);
      font-size: 12px;
    }
    .right {
      flex: 3; 
      color: red;
      font-size: 28px;
    }

</style>