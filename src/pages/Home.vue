<template>
  <div class="home">
    <img class="homeimg" src="../assets/img/homeimg.png" alt="">
    
    <!-- <div @click="btnClick">
      <button  data-path="/contribution">我要投稿</button>
      <button  data-path="/rank">排行榜</button>
      <button  data-path="/vote">我要投票</button>
      <button  data-path="/rules">投稿细则</button>
    </div> -->
      <!-- <button @click="btnClick('/contrivution')">我要投稿</button>
      <button @click="btnClick('/rank')">排行榜</button>
      <button @click="btnClick('/vote')">我要投票</button>
      <button @click="btnClick('/rules')">投稿细则</button> --> 
      <div class="homediv">
         <div v-for="item in homebtn" @click="btnClick(item.path)" :key="item.path">{{item.name}}</div>
      </div> 
        
      
  </div>

</template>

<script>
import axios from 'axios'
import bus from '../utils/bus'
import {getHomeData} from '../network/home' 


export default {
  name:"Home",
  props: {    
  },
  data() {
    return {
      result:null,
      myToken:'',
      homebtn:[ 
        {
          'name':"我要投稿",
          'path':"/contribution"
        },
        {
          'name': "排行榜",
          'path':"./rank"
        },
        {
          'name':"我要投票",
          'path':"/vote"
        },
        {
          'name': "投稿细则",
          'path':"./rules"
        }
      ]

    }
  },
  created(){
    this.getHomeData();

  //   axios.get('https://apidgybhd.kccloud.pro/user/login', {
  //   params: {
  //     openid:'or_WGuE5Ljd-iJCfR5zqiVUxsSlQ'
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  },
  
  methods: {
    btnClick(index) {
      this.$router.push(index)    
    },
   getHomeData(){
      getHomeData().then(res => {
        this.result = res;
        // console.log(this.result);
        this.myToken = this.result.access_token;        
        console.log(this.myToken);
        window.sessionStorage.setItem("myTrueToken",this.myToken);
      })
    },
 
  }
}
</script>

<style scoped>
.home { 
  width:100%;
  height: 100%;
  position: relative;

}
.homeimg {
  width:100%;
  height: 100%;
}
.homediv{
  position: absolute;
  top: 37%;
  width: 100%;

  text-align: center;
  display: flex;
  justify-content: center;
  /* align-content: flex-start; */
  flex-flow: row wrap;
}
.homediv div{
  text-align: center;
  line-height: 100px;
  color: #fff;
  font-size: 32px;
  border-radius: 30px;
  border: 5px solid #0d646c;
  height: 100px;
  background-color: #2fa0aa;
  
  flex: 0 0 32%;
  margin: 0 5%;
  margin-bottom: 30px;
  box-shadow:-2px 2px 5px #0d646c;


}

</style>