<template>
  <div class="box">
    <img src="static/ai/default_scu.jpg">
    <div class="list">
      <p></p>
      <ul>
        <li>编号：00001</li>
        <li>姓名：张三</li>
        <li>性别：男</li>
        <li>出生年月：1998-7-29      </li>
        <li>年龄：</li>
        <li>入职时间：2013-9-12</li>
        <li>工龄：</li>
        <li>部门：市场部</li>
        <li>职位：部门经理</li>
        <li>联系方式：1351231000</li>
        <li>住址：xx-xx-xx</li>
        <li>籍贯：浙江省杭州市</li>
        <li>邮箱：无</li>
        <li>简介：无</li>
      </ul>
    </div>
  <p><button type="button">修改信息</button></p>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
.box{
  margin:2rem 2rem;
  background:rgb(205, 204, 206);
  padding: 1.2rem;
}
.box img{
  width:10%;
  height: 10%;
  border-radius:50%;
}
.list ul{
  margin: 0 auto;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
}
button{
  width: 6rem;
  height: 2rem;
  background-color: rgb(128, 85, 207);
  border: none;
  border-radius: 0.6rem;
  color: white;
}
</style>
