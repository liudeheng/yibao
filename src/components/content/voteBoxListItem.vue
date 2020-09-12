<template>
  <div class="box" >  
    <div class="left" >{{voteItem.rank}}</div>
    <div class="mid">
      <div>{{voteItem.nickname}}</div>
      <div>
        <span>笔名：</span>
        <span>{{voteItem.id}}</span>
      </div>     
    </div>
    <div class="right">
      <div>{{voteItem.vote}}</div>
    </div>
    <div class="btn">
      <div>投票</div>
    </div>
    </div>
 
</template>

<script>
export default {
  name:"voteBoxListItem",
  props: {
    voteItem: {
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
    .btn {
      flex: 3;
      text-align: center;
    }
    .btn div {
   
  width: 90%;
  background-color: #0d646c;
  /* position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  line-height: 50px;
  color: #FFFFFF;
  border-radius: 7px;
  font-size: 16px;
  }

</style>