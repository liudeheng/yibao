<template>
  <div class="rules">
    <div class="board">
      <div>投稿细则</div>
      <div>
        <p>
          细则数据待传入
        </p>
      </div>
      <div class="back" @click="$router.back(-1)">返回</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Rules",
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

</style>