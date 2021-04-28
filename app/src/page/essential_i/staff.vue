<template>
  <div class="staffcontent">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>员工列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="s_top">
      <div v-for="item in sumList"
      :key="item.id">
        <p class="snum">{{item.num}}</p>
        <p class="sname">{{item.name}}</p>
      </div>
    </div>
    <div class="s_contain">
      <div class="s_left">
        <div id="sexecharts" :style="{width: '20rem', height: '20rem'}"></div>
        <div id="departmentecharts" :style="{width: '28rem', height: '28rem'}"></div>
        <div id="ageecharts" :style="{width: '20rem', height: '20rem'}"></div>
      </div>
      <div class="s_right">
        <div class="s_rightheader">
          <div>员工列表</div>
          <div class="searchpart">
            <select name="searchtype" id="searchtype" v-model="searchtype">
              <option value="工号">工号</option>
              <option value="姓名" selected>姓名</option>
              <option value="部门">部门</option>
              <option value="职位">职位</option>
            </select>
            <input type="search" id="search" v-model="search">
            <div id="searchBtn"><img src="../../../static/ai/搜索.png"></div>
          </div>
        </div>
        <el-table
        :data="tableData.slice((currentPage-1)*pagesize, currentPage*pagesize)"
        stripe>
          <el-table-column
          prop="jobNum"
          label="工号">
          </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门">
        </el-table-column>
        <el-table-column
          prop="position"
          label="职位">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式">
        </el-table-column>
        <el-table-column
          label="其他信息">
          ...
        </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="tableData.length"
          prev-text="<<"
          next-text=">>">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      search: '',
      searchtype: '姓名',
      sumList: [
        {name: '在职人数', num: 100},
        {name: '部门数量', num: 8},
        {name: '本月生日', num: 2},
        {name: '本月入职', num: 3},
        {name: '本月离职', num: 0}
      ],
      tableData: [
        {jobNum: 1, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 2, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 3, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 4, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 5, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 6, name: '张三', sex: '女', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 7, name: '张三', sex: '女', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 8, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 9, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 10, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 11, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 12, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 13, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 14, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 15, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'},
        {jobNum: 16, name: '张三', sex: '男', department: '行政部', position: '员工', tel: '138xxxxxxxx'}
      ]
    }
  },
  mounted () {
    this.drawLines()
  },
  methods: {
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    drawLines () {
      var sexechart = this.$echarts.init(document.getElementById('sexecharts'))
      var departmentchart = this.$echarts.init(document.getElementById('departmentecharts'))
      var ageechart = this.$echarts.init(document.getElementById('ageecharts'))
      sexechart.setOption({
        title: {
          text: '员工男女比例',
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
            radius: '50%',
            data: [
              {value: 31, name: '女'},
              {value: 60, name: '男'}
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
      departmentchart.setOption({
        title: {
          text: '部门人员分布',
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
            radius: '50%',
            data: [
              {value: 15, name: '行政部'},
              {value: 9, name: '财务部'},
              {value: 12, name: '管理部'},
              {value: 18, name: '技术部'},
              {value: 12, name: '人力资源部'},
              {value: 11, name: '客服部'},
              {value: 15, name: '其他'}
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
      ageechart.setOption({
        title: {
          text: '人员年龄分布',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['18-25', '25-30', '30-35', '35-40', '40-']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: ['21', '13', '14', '8', '2'],
          type: 'bar'
        }]
      })
    }
  }
}
</script>

<style scoped>
.el-breadcrumb{
  margin-bottom: 2rem;
}
.el-table{
  height: 33rem;
}
.s_top{
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.snum{
  font-weight: bold;
  font-size: 1.2rem;
}
.sname{
  color: gray;
}
.s_contain{
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.s_left{
  flex: 2;
  height: 46rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 2.6rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.s_left div{
  margin-top: 2rem;
}
.s_right{
  flex: 3;
  height: 40rem;
  border: 0.08rem solid rgb(202, 191, 191);
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.s_rightheader{
  height: 3.6rem;
  padding-left: 2rem;
  padding-right: 3rem;
  border-bottom: 0.08rem solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
}
.searchpart{
  display: flex;
}
#search{
  height: 1.8rem;
  border-radius: 0;
  width: 6rem;
  border: 0.1rem solid gray;
  border-left: none;
  border-right: none;
}
#searchtype{
  height: 1.8rem;
  border-top-left-radius: 0.9rem;
  border-bottom-left-radius: 0.9rem;
  border: 0.1rem solid gray;
}
#searchBtn{
  height: 1.6rem;
  width: 2rem;
  background-color: gray;
  border-top-right-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  border: 0.1rem solid gray;
}
#searchBtn img{
  width: 1.4rem;
  height: 1.4rem;
}
</style>
