<template>
 <div class="mydata">
   <div class="left">1</div>
   <div class="mid">
     <div>my微信名</div>
     <div>
       <span>笔名：</span>
       <span>111</span>
     </div>     
  </div>
  <div class="right">
     <div>1000</div>
     <div>获得票数</div>
   </div>         
 </div>
  
</template>

<script>
export default {
  name:"myData",
}
</script>

<style>
.mydata{
      width: 100%;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 30px;
      /* border:1px solid rgb(182, 181, 180); */
      box-shadow: 0 0 20px rgb(219, 219, 219);
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
    .right>:nth-child(1) {
      flex: 3; 
      color: red;
      font-size: 28px;
      padding: 10px;
    }
    .right>:nth-child(2){
      color: #ffae58;
      font-size: 20px;
    }

</style>