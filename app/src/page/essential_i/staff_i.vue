<template>
<div>
  <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
  <el-breadcrumb-item>员工详情界面</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>&nbsp;</h1>
  <div class="infor_box">
    <div class="left_box">
        <img src="static/ai/default_scu.jpg">
        <button class="changeBtn" @click="changeInfo" v-if="!IfChange"> <i class="el-icon-edit"></i>修改信息</button>
        <button class="changeBtn" @click="successChange" v-if="IfChange"> <i class="el-icon-success"></i>保存修改</button>
        <div class="para">
        <el-card class="box-card">
          <p v-if="!IfChange">{{message}}</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 8}"
            placeholder="请输入内容"
            v-model="message"
            v-if="IfChange">
          </el-input>
        </el-card>
      </div>
    </div>
    <div class="right_box">
      <li class="manyBox" v-for="(item,index) in InfoLists" :key="index">
        <div class="boxlist">
            <span class="InfoCata">{{item.title}}:</span><span class="InfoValue" v-if="!IfChange">{{item.value}}</span>
            <el-input v-model="item.value" placeholder="请输入内容" v-if="IfChange"></el-input>
        </div>
      </li>
    </div>
  </div>
  <div class="viewScore">
    <div class="viewheader"><span class="headertitle">评价情况</span></div>
    <div class="chartsView">
      <div id="attendechart" :style="{width: '20rem', height: '20rem'}"></div>
      <div id="scoreechart" :style="{width: '28rem', height: '15rem'}"></div>
    </div>
    <div class="wordView">
      <p class="wordheader" style="padding-bottom: 2rem; font-weight: bolder">其他说明</p>
      <ul>
        <li class="worditem"><span class="word"> 该员工本月解决突发情况表现出色</span><span class="date">2020-12-15</span></li>
        <li class="worditem"><span class="word"> 该员工在会议中发言角度独特</span><span class="date">2021-3-15</span></li>
        <li class="worditem"><span class="word"> 该员工上月工作略为懈怠</span><span class="date">2021-4-15</span></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      IfChange: false,
      input: '',
      InfoLists: [
        {id: 1, title: '姓名', value: '张三'},
        {id: 2, title: '工号', value: '00001'},
        {id: 3, title: '性别', value: '男'},
        {id: 4, title: '生日', value: '1998-05-04'},
        {id: 5, title: '入职年份', value: '2019-04-21'},
        {id: 6, title: '家庭地址', value: 'xxxxxx'},
        {id: 7, title: '电话', value: '1234567890'},
        {id: 8, title: '邮箱', value: '2222222@163.com'},
        {id: 9, title: '所在部门', value: '市场营销部'},
        {id: 10, title: '岗位', value: '市场营销顾问'}],
      message: '    同济大学市场营销专业本科毕业。专业绩点排名处于前30%。热心公益，曾多次获得优秀青年志愿者奖'
    }
  },
  mounted () {
    this.drawLines()
  },
  methods: {
    drawLines () {
      var attendechart = this.$echarts.init(document.getElementById('attendechart'))
      var scoreechart = this.$echarts.init(document.getElementById('scoreechart'))
      attendechart.setOption({
        title: {
          text: '员工上月出勤状况',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '40%',
            data: [
              {value: 18, name: '正常在岗'},
              {value: 1, name: '早退'},
              {value: 1, name: '迟到'},
              {value: 2, name: '请假'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      scoreechart.setOption({
        title: {
          text: '历次评分情况',
          left: 'center'
        },
        lengend: {
          data: ['个人评分成绩']
        },
        grid: {
          left: '1%',
          right: '5%',
          bottom: '7%',
          // top: '25%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          boundaryGap: false,
          nameTextStyle: {
            color: '#880858',
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: {
            lineStyle: {
              color: '#000000'
            }
          }
        },
        yAxis: {
          name: '分数',
          nameTextStyle: {
            color: '#000000',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#000000'
            }
          },
          type: 'value'
        },
        series: [
          {
            name: '个人成绩',
            data: ['80', '85.4', '84', '88', '90', '80'],
            type: 'line',
            itemStyle: {normal: {label: {show: true}}},
            lineStyle: {
              normal: {
                color: '#8AE'
              }
            }
          }
        ]
      })
    },
    changeInfo () {
      this.IfChange = true
      console.log('111')
    },
    successChange () {
      console.log('保存信息')
      console.log(this.message)
      this.IfChange = false
    },
    getStaffDetail () {
      let Ino = this.$route.params.id
      this.$http.get('http://localhost:3000/getStaffByIno/' + Ino, '')
        .then((res) => {
          if (res.data.state === 'success') {
            let detaildata = res.data.data
            console.log(res.data.data)
            this.InfoLists[0].Rvalue = detaildata.Ino
            this.InfoLists[0].Lvalue = detaildata.name
            this.InfoLists[1].Lvalue = detaildata.gender
            this.InfoLists[1].Rvalue = detaildata.birth
            this.InfoLists[2].Lvalue = detaildata.entrytime
            this.InfoLists[2].Rvalue = detaildata.address
            this.InfoLists[3].Lvalue = detaildata.tel
            this.InfoLists[3].Rvalue = detaildata.email
            this.InfoLists[4].Lvalue = detaildata.depart
            this.InfoLists[4].Rvalue = detaildata.position
          }
        }, err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getStaffDetail()
  }
}
</script>

<style scoped>
.viewheader{
  padding: 2rem;
}
.headertitle{
  font-weight: bolder;
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}
.wordView{
  display: flex;
  flex-direction: column;
  margin: .5rem 3rem;
  padding: 2rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.viewScore{
  display: flex;
  flex-direction: column;
  margin: .5rem 3rem;
  padding: 2rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.chartsView{
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
}

li.worditem{
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem;
  margin: 0.5rem;
}
span.date{
  font-size: 1rem;
  color: gray;
}
span.word{
  font-size: 1rem;
}
.infor_box{
    display: flex;
    margin: .5rem 3rem;
    padding: 2rem;
    justify-content: space-around;
    align-items: center;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}

.left_box{
  text-align: center;
  width: 23rem;
  padding:4rem;

}
.left_box img{
  width:12rem;
}
.right_box li{
  list-style-type:none;
  text-align: left;
  font-size: 16px;
  line-height: 40px;
}
.right_box{
  text-align: left;
  width:23rem;
  padding:4rem;

}
.changeBtn{
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgb(128, 85, 207);
  border-style: none;
  color: white;
  margin-left: 2rem;
}
.InfoCata{
  font-size: 1rem;
  color:rgb(128, 85, 207);
  display: inline-block;
}
.InfoValue{
  width: border-box;
  padding-left: .8rem;
}

.box_left{
  text-align: left;
  flex: 1;
}
.box_right{
  text-align: left;
  flex: 1;
}
.para{
  width: 25rem;
  margin-top: 5rem;
  font-size: 16px;
  text-align: left;
  white-space: pre-wrap;
}
</style>
