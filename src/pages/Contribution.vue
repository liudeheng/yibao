<template>
  <div>
    <div class="contri">
      <!-- <img src="../assets/img/bgimg.png" alt=""> -->
      <div class="board">
        <div>我要投稿</div>
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            姓名<span>*</span>
          </div>
          <input type="text" placeholder="请输入您的真实姓名">
        </div>
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            笔名
          </div>
          <input type="text" placeholder="请输入您的笔名">
        </div>
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            联系方式<span>*</span>
          </div>
          <input type="text" placeholder="请输入您的联系方式">
        </div>        
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            地址<span>*</span>
          </div>
          <input type="text" placeholder="请输入您的地址">
        </div>
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            正文
          </div>
          <textarea name="" id="" cols="20" rows="10" placeholder="请输入介绍(最多500字)"></textarea>
        </div>   
        <div class="line">
          <div class="linetxt">
            <div class="point"></div>
            上传文件(支持文件图片和视频)
          </div>
          <div class="upload">
            <div class="up_add_bg">
               <input type="file" class="up_add" id="exampleInputFile">
            </div>
            <input class="file" type="file">
            <img src="../assets/img/icon.png" alt="">
            <div class="uploaditem">文件</div>
            <img src="../assets/img/icon.png" alt="">
            <div class="uploaditem">图片</div> 
            <img src="../assets/img/icon.png" alt="">
            <div class="uploaditem">视频</div>           
          </div>
        </div>
        <div class="posted">提交</div>  
        <!-- <div>
            <div class='box'> 
              <input type='file' ref='input_dom' @change="">
            </div>   
            <img src="" alt=" " v-for="">
        </div>   -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"Contribution",
}
</script>

<style scoped>
.contri {
  width:100%;
  /* height: 100%; */
  padding-top: 60px;
  background-image: url("../assets/img/bgimg.png");
  background-size: 100% 100%;
  background-attachment: fixed;
  /* position: relative; */
}

.board {
  margin: 0 60px 0;
  height: 100%;
  padding: 54px;
  border: 24px solid #12636b;
  background-color: #fff;
  overflow: auto;
}
.board >:first-child{
  color: #ff9600;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
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
.upload img {
  display: block;
  height: 70px;
  width: 70px;
}
.upload div {
  font-size: 16px;
  padding-left: 7px;
  margin: 10px 0 20px;
  color: #ff9b0b;
}
.posted{
  
  margin: 0 auto;
  text-align: center;

  line-height: 60px;
  color: #fff;
  font-size: 32px;
  border-radius: 30px;
  border: 5px solid #0d646c;
  height: 70px;
  background-color: #2fa0aa;
}
.file {
  outline: none;
  border: none;
}

.up_add {
  width: 100px;
  height: 100px;
  opacity: 0;
}
.up_add_bg {
  width: 100px;
  height: 100px;
  background-image: url(../assets/img/icon.png);
  background-size: 100px 100px;
}
.box>input{
  position:relative;
  width: 100px;
  height: 100px;
}
.box>input::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/img/icon.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 20;
}


</style>