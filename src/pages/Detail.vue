<template>
  <div class="rules">
    <div class="board">
      <my-data></my-data>
      <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            正文
          </div>
          <textarea name="" id="" cols="20" rows="10" placeholder="阿巴阿巴阿巴"></textarea>
      </div> 
      <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            参赛作品
          </div>
          <div class="works">
            <img src="../assets/img/works.png" alt="">
          </div>
      </div>       


      <div class="btns">
        <div class="back" @click="$router.back(-1)">返回</div>
        <div class="vote">投票</div>
      </div>
      
    </div>

  </div>
</template>

<script>
import myData from "../components/content/myData"
export default {
  name: "Detail",
  components: {
    myData,
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
  padding: 30px;
  border: 24px solid #12636b;
  background-color: #fff;
  
}
.btns {
  position: relative;
  width: 100%;
  top: 80px;
  text-align: center;
}
.btns div {
  display: inline-block;
}
.back {
  left: 5%;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  margin-right: 50px;

  line-height: 80px;
  color: #fff;
  font-size: 32px;
  border-radius: 30px;
  border: 5px solid #0d646c;
  height: 80px;
  background-color: #2fa0aa;
}
.vote {
  margin-left: 50px;
  right: 5%;
  width: 40%;
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
.linetxt {
  margin-bottom: 15px;
}
.linetxt span{
  display: inline-block;
  color: red;
  font-size: 42px;
  line-height: 42px;
  position: relative;
  top: 10px;
  left: 10px;
}

.point {
  display: inline-block;
  height: 5px;
  width: 5px;
  border: 5px solid #ff9b0b;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 5px;
  margin-right: 10px;
  box-shadow: 0 0 5px #ff9b0b;
}
.line {
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 20px;
  
}
input {
  width: 100%;
  background:none;  
	outline:none;  
  border:none;
  border-bottom: 1px solid #aaaaaa;
}
input::placeholder {
  font-size: 20px;
  color: #aaaaaa;
}
textarea {
  width: 100%;
  height: 200px;
  outline: none;
  border: none;
  background-color: #f2f2f2;
}
textarea::placeholder{
  padding: 10px 0;
  font-size: 20px;
 
  color: #aaaaaa;
}
.works {
  height: 300px;
  width: 100%;
}
.works img {
  height: 100%;
  width: 100%;
  
}

</style>