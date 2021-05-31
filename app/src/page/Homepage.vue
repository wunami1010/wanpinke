<template>
  <div class="hcontent">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="hcontent2">
      <div class="hometop">
        <p class="hometopheader">业务导航</p>
        <div class="homenav">
          <div class="navitem">
            <img src="../../static/ai/管理.png" :style="{width: '4rem', height: '4rem'}">
            <p>信息管理</p>
          </div>
          <div class="border"></div>
          <div class="navitem">
            <img src="../../static/ai/对话.png" :style="{width: '4rem', height: '4rem'}">
            <p>评分系统</p>
          </div>
          <div class="border"></div>
          <div class="navitem">
            <img src="../../static/ai/运营.png" :style="{width: '4rem', height: '4rem'}">
            <p>人才招聘</p>
          </div>
          <div class="border"></div>
          <div class="navitem">
            <img src="../../static/ai/公告.png" :style="{width: '4rem', height: '4rem'}">
            <p>消息通知</p>
          </div>
        </div>
      </div>
      <div class="homecontain">
        <div class="homeleft">
          <div class="calendar">
            <div><div id="prev">&lt;</div>{{c_month}}月<div id="next">&gt;</div></div>
            <div>{{c_year}}</div>
            <div class="weekdays">
              <ul>
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
              </ul>
            </div>
            <div>
              <table id="days">
                <li
                v-for="item in days"
                :key="item"></li>
              </table>
            </div>
          </div>
        </div>
        <div class="homeright">
          <p class="hometopheader">最新消息</p>
          <ul>
            <li>5-1 新的一期简历投递即将开启</li>
            <li>5-1 新的一期简历投递即将开启</li>
            <li>5-1 新的一期简历投递即将开启</li>
            <li>5-1 新的一期简历投递即将开启</li>
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
      days: ''
    }
  },
  mounted () {
    this.createcalendar()
  },
  methods: {
    createcalendar () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      this.c_year = year
      this.c_month = month
      this.c_day = day
      // const montholympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      // const monthnormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      var table = document.getElementById('days')
      // var totalday = (year % 4 === 0) ? montholympic[month] : monthnormal[month]
      let d = new Date(year, month - 1, 0)
      let dd = new Date(year, month, 1)
      for (let i = 0; i < 6; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
          let td = document.createElement('td')
          let days = i * 7 + j + 1
          let getDate = dd.getDay() + 1
          if (days >= getDate && days <= d.getDate() + getDate - 1) {
            var t = days - getDate + 1
            td.innerText = t
            td.style = 'color:black;'
            if (t === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
              td.style = 'color: white; background-color: #1d2241; border-radius:5px '
            }
          }
          tr.appendChild(td)
        }
        table.appendChild(tr)
      }
      // var str = ''
      // var myclass
      // for (let i = 1; i < firstday; i++) {
      //   str += '<li></li>'
      // }
      // for (let i = 1; i <= totalday; i++) {
      //   if ((i < day && year === date.getFullYear() && month === date.getMonth()) || year < date.getFullYear() || (year === date.getFullYear() && month < date.getMonth())) {
      //     myclass = " class='lightgray'"
      //   } else if (i === day && year === date.getFullYear() && month === date.getMonth()) {
      //     myclass = " class='gray'"
      //   } else {
      //     myclass = " class='darkgray'"
      //   }
      //   str += '<li' + myclass + '>' + i + '</li>'
      // }
      // console.log(str)
      // days.innerHTML = str
    }
  }
}
</script>

<style scoped>
.el-breadcrumb{
  margin-bottom: 2rem;
}
.hcontent{
  padding: 0;
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
  flex: 4;
  margin-right: 2rem;
  height: 30rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.homeright{
  flex: 3;
  height: 40rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.calendar div:nth-child(1) {
  font-size: 2.6rem;
  height: 6rem;
  line-height: 6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.calendar div:nth-child(2){
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 0.1rem ;
}
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
  font-size: 1.2rem;
  font-weight: bold;
}
#days li{
  width: 30%;
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
</style>
