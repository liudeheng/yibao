<template>
  <div class="rules">
    <div class="board">
      <div>排行榜</div>

      <div class="rankers">
        <my-data @click.native = toDetail></my-data>
        <div class="title">
          <span>排名</span>
          <span>ID/笔名</span>
          <span>获得票数</span>
        </div>
        <info-form class="comp" :results ="results"></info-form>
        <!-- <info-form class="comp"></info-form>  
        <info-form class="comp"></info-form>  
        <info-form class="comp"></info-form>   -->
      </div>
      <div class="arrow">
        <img src="../assets/img/arrow.jpg" alt="">
      </div>
      <div class="back" @click="$router.back(-1)">返回</div>
    </div>

  </div>
</template>

<script>
import infoForm from '../components/content/infoForm'
import myData from '../components/content/myData'
import bus from '../utils/bus'
import {getVoteList} from '../network/rank'

export default {
  name: "Rank",
  data() {
    return {
      results:[],
      
    }
  },
  components: {
    myData,
    infoForm, 
  },
  created(){
    this.getVoteList()  
  },
  methods: {
    toDetail(){
      this.$router.push('/detail')
    },
    getVoteList(){    
      getVoteList({keyword:'', page:0})
      .then(res => {
        this.results = res.data;
        console.log(this.results);
      })
    }
  }
}
</script>

<style scoped>
.rules{
  width:100%;
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url("../assets/img/bgimg.png");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.board {
  margin: 0 60px 0;
  height: 95%;
  padding: 54px;
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
  width: 80%;
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
.title{
  height: 50px;
  /* height: 100%; */
}
.title span {
  display: inline-block;
  color: #ffae58;
  font-size: 20px;
  text-align: center;
}
.title >:nth-child(1){
  width: 20%;
}
.title >:nth-child(2){
  width: 50%;
}
.title >:nth-child(3){
  width: 30%;
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
    .rankers {
      height: 75%;
      overflow: hidden;
    }
    .comp {
      /* height: 80%; */
    }
</style>