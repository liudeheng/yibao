<template>
  <div class="rules">
    <div class="board">
      <div>我要投票</div>
      <div class="searchBar">
        <div class="left">
          <input class="input" type="text" placeholder="请输入ID/笔名">
        </div>
        <div class="right">
          <div class="searchbox">搜索</div>
        </div>
      </div>
      <div class="title">
          <span>排名</span>
          <span>ID/笔名</span>
          <span>获得票数</span>
          <span>投票</span>
      </div>
      <vote-box-list :results ="results"></vote-box-list>
      <!-- <div class="voteInfo">
        <div class="leftInfo"><info-form class="voteBox" :results ="results"></info-form></div>
        <div class="voteBtn" :results ="results"><div>投票</div></div>
      </div> -->
    
      <div class="arrow" >
        <img src="../assets/img/arrow.jpg" alt="">
      </div>
      <div class="back" @click="$router.back(-1)">返回</div>
    </div>

  </div>
</template>

<script>
import infoForm from "../components/content/infoForm";
import voteBoxList from "../components/content/voteBoxList"
import {getVoteList} from '../network/rank'
export default {
 
  name: "Vote",
  components: {
    infoForm,
    voteBoxList
  },
  data() {
    return {
      results:[],
      
    }
  },
  created(){
    this.getVoteList()  
  },
  methods:{
    getVoteList(){    
      getVoteList()
      .then(res => {
        this.results = res.data;
        console.log(this.results);
      })
    }
  },
}
</script>

<style scoped>
.rules{
  width:100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
  background-image: url("../assets/img/bgimg.png");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.board {
  margin: 0 60px 0;
  
  height: 95%;
  padding: 30px;
  border: 24px solid #12636b;
  background-color: #fff;
  position: relative;
}
.board >:first-child{
  color: #ff9600;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
}
.back {
  position: absolute;
  bottom: 60px;
  left: 7%;
  width: 85%;
  margin: 0 auto;
  text-align: center;

  line-height: 80px;
  color: #fff;
  font-size: 32px;
  border-radius: 30px;
  border: 5px solid #0d646c;
  height: 80px;
  background-color: #2fa0aa;
}
    .arrow {
      position: absolute;
      bottom: 140px;
      left: 50%;
      transform: translateX(-50%);
      height: 50px;
      width: 50px;
      margin: 0 auto;
      animation:arrowmove 1s infinite;

    }
    .arrow img {
      height: 50px;
      width: 50px;
    }
    @keyframes arrowmove{
      from { bottom: 150px;}
      to {bottom: 140px;}
    }
    .searchBar{
      height: 100px;
      width: 100%;
      
      box-shadow: 0 0 20px #dadada;
      border-radius: 10px;
    }
    .left {
      height: 100%;
      box-sizing: border-box;
      display: inline-block;
      width: 70%;
      
    }
    .input {
      box-sizing: border-box;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      padding-left: 50px;
      background:#FFFFFF url(../assets/img/fangdajing.svg) 4px no-repeat;
      background-size: 35px;
      position: relative;
      left: 20px;     
    }
    .input::placeholder{
      color: rgb(219, 219, 217);
      font-size: 16px;
      padding-top: 10px;
    }
    .right {
      float: none;
      box-sizing: border-box;
      height: 100%;
      width: 30%;
      display: inline-block;
      position: relative; 
    }
    .searchbox {
      position: absolute;
      box-sizing: border-box;
      height: 90%;
      width: 95%;
      background-color:#ff9600;
      border-radius: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      line-height: 95px;
     
      color: #FFFFFF;
    }
.title{
  height: 50px;
  
  margin-top: 30px;
}
.title span {
  display: inline-block;
  color: #ffae58;
  font-size: 16px;
  text-align: center;
}
.title >:nth-child(1){
  width: 20%;
}
.title >:nth-child(2){
  width: 30%;
  /* position: relative;
  left: -5%; */

}
.title >:nth-child(3){
  width: 25%;
}
.title >:nth-child(4){
  width: 25%;
}
.voteInfo{
  width: 100%;
  height: 70%;
  display: flex;
  
  border-bottom: 1px dotted rgb(211, 209, 209);
}
.leftInfo {
  width: 80%;
  flex: 75;
  display: inline-block;
  
}
.voteBtn {
  flex: 25;
  width: 20%;
  display: inline-block;
  text-align: center;
  
  position: relative;
  
  
}
.voteBtn div {
  height: 40%;
  width: 90%;
  background-color: #0d646c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 50px;
  color: #FFFFFF;
  border-radius: 7px;
  font-size: 16px;
}
.voteBox {
  height: 60%;
}

</style>