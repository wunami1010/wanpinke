<template>
  <div class="hcontent">
    <div class="picturehome">
      <img src="../../static/ai/首页背景.jpg">
    </div>
    <div class="comBtn">
      <div class="joinorgan">加入公司</div>
      <div class="creatorgan">创建公司</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.hcontent{
  padding: 0;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.comBtn{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.comBtn div{
  margin-top: 5vh;
  width: 20rem;
  height: 10rem;
  line-height: 10rem;
  border: 0.1rem solid rgb(182, 180, 187);
  color: rgb(182, 180, 187);
  font-size: 2rem;
}
.picturehome img{
  width: 100%;
}
</style>
