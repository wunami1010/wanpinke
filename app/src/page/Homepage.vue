<template>
  <div class="content">
    <div class="picturerun">
      <div></div>
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
.content{
  height: 91vh;
  background-color: rgb(240, 240, 242);
}
.comBtn{
  display: flex;
  justify-content: space-around;
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
.picturerun{
  background-color: rgb(207, 202, 202);
  height: 60vh;
}
</style>
