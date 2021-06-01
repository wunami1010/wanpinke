<template>
  <div class="hcontent">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="hcontent2">
      <div class="hometop">
        <p class="hometopheader">业务导航</p>
        <div class="homenav">
          <router-link to="/company_i">
            <div class="navitem">
              <img src="../../static/ai/管理.png" :style="{width: '4rem', height: '4rem'}">
              <p>信息管理</p>
            </div>
          </router-link>
          <div class="border"></div>
          <router-link to="/staff">
            <div class="navitem">
              <img src="../../static/ai/对话.png" :style="{width: '4rem', height: '4rem'}">
              <p>评分系统</p>
            </div>
          </router-link>
          <div class="border"></div>
          <router-link to="/recruit/job_m">
            <div class="navitem">
              <img src="../../static/ai/运营.png" :style="{width: '4rem', height: '4rem'}">
              <p>人才招聘</p>
            </div>
          </router-link>
          <div class="border"></div>
          <router-link to="/news/broad">
            <div class="navitem">
              <img src="../../static/ai/公告.png" :style="{width: '4rem', height: '4rem'}">
              <p>消息通知</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="homecontain">
        <div class="homeleft">
          <div class="calendar">
            <!--              <div><div id="prev">&lt;</div>{{c_month}}月<div id="next">&gt;</div></div>-->
            <!--              <div>{{c_year}}</div>-->
            <div class="weekdays">
              <el-calendar v-model="value">
              </el-calendar>
            </div>
            <!--              <div>-->
            <!--                <ul id="days">-->
            <!--                  <li-->
            <!--                  v-for="item in days"-->
            <!--                  :key="item"></li>-->
            <!--                </ul>-->
            <!--              </div>-->
          </div>
        </div>
        <div class="homeright">
          <p class="hometopheader" style="padding-bottom: 2rem">最新消息</p>
          <ul>
            <li class="latestNews"><span class="news"> [技术部] 新的一期简历投递即将开启</span><span class="date">2021-5-1</span></li>
            <li class="latestNews"><span class="news"> [行政部] 新的一期简历投递即将开启</span><span class="date">2021-5-1</span></li>
            <li class="latestNews"><span class="news"> [财务部] 新的一期简历投递即将开启</span><span class="date">2021-5-2</span></li>
            <li class="latestNews"><span class="news"> [人力资源部] 新的一期简历投递即将开启</span><span class="date">2021-5-2</span></li>
            <li class="latestNews"><span class="news"> [财务部] 新的一期简历投递即将开启</span><span class="date">2021-5-2</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      c_year: '',
      c_month: '',
      c_day: '',
      days: '',
      value: new Date()
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .el-breadcrumb{
    margin-bottom: 2rem;
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
  .hometop{
    width: 100%;
    height: 10rem;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
  }
  .hometopheader{
    display: flex;
    line-height: 3rem;
    margin-left: 2rem;
    font-weight: bold;
  }
  .homenav{
    display: flex;
    justify-content: space-around;
    padding: 0 5rem;
  }
  .border{
    border-left: 0.1rem solid lightgray;
  }
  .navitem p{
    font-weight: bold;
  }
  .navitem{
    cursor: pointer;
  }
  .homecontain{
    margin-top: 2rem;
    display: flex;
  }
  .homeleft{
    flex: 3;
    margin-right: 2rem;
    border: 0.08rem solid lightgray;
    height: 35rem;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
  }
  .homeright{
    flex: 4;
    height: 35rem;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
  }
  .weekdays /deep/ .el-calendar-table .el-calendar-day {
    height: 3.5rem;
  }
  .weekdays /deep/ .el-calendar-table thead th{
    font-size: 1rem;
  }
  /*.calendar div:nth-child(1) {
    /*font-size: 2.6rem;*/
    /*height: 6rem;*/
    /*line-height: 6rem;*/
    /*font-weight: bold;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
  /*}*/
  /*.calendar div:nth-child(2){
    /*height: 3rem;*/
    /*font-size: 1rem;*/
    /*font-weight: bold;*/
    /*border-bottom: 0.1rem ;*/
  /*}*/
  #prev,
  #next{
    height: 6rem;
    line-height: 6rem;
    margin: auto 2rem;
    font-size: 2.4rem;
    font-weight: bold;
    cursor: pointer;
  }
  .weekdays ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .weekdays{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .homeright li{
    list-style: none;
    height: 2rem;
  }
  #days{
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  #days li{
    box-sizing: border-box;
    flex: 0 0 20%;
  }
  li.latestNews{
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
  }
  span.date{
    font-size: 1rem;
    color: gray;
  }
  span.news{
    font-size: 1rem;
  }
</style>
