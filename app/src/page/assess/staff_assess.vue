<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/essential_i/staff'}">评分系统</el-breadcrumb-item>
      <el-breadcrumb-item>评价页面</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="contentWrapper">
      <div class="mainBox">
        <div class="header">
          <h3 class="title">员工绩效考核评定表</h3>
          <div class="staffMessage">
            <span class="tag">工号：{{Assess.id}}</span>
            <span class="tag">姓名：{{Assess.name}}</span>
            <span class="tag">评价时间：{{Assess.time}}</span>
            <span class="tag">所属部门：{{Assess.department}}</span>
            <span class="tag" style="color: #6d4fc9; font-size: 1rem" >最终分数：{{Assess.mark}}</span>
          </div>
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="PART1" name="first">
                <div class="ability">
                  <div class="gap"><h3 class="gapTitle">工作态度及综合素质</h3><hr class="modelSplit"></div>
                  <div class="mark" v-for="item in Abi" :key="item.index">
                    <div class="marking">
                      <span class="dimension">{{item.name}}</span>
                      <el-rate
                        v-model="item.mark"
                        :colors="colors">
                      </el-rate>
                    </div>
                    <p class="rule">*{{item.rule}}</p>
                    <hr>
                  </div>
                  <div class="bottom">
                    <div class="showMark">
                      <span class="mark">得分：{{P1mark}}</span>
                    </div>
                    <div class="btnbox">
                      <button class="submitMark" @click="submitP1">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="PART2" name="second">
                <div class="arrival">
                  <div class="gap"><h3 class="gapTitle">考勤得分</h3><hr class="modelSplit"></div>
                  <div class="arrTable">
                    <table class="arrtable">
                      <caption class="tTitle" style="padding-bottom: 1rem; font-weight: bolder">本月出勤情况</caption>
                      <tr class="tRow">
                        <th class="tt">理应到岗天数</th>
                        <th class="tt">实际到岗天数</th>
                        <th class="tt">出勤率</th>
                        <th class="tt">其他特殊情况</th>
                      </tr>
                      <tr class="tRow">
                        <td>{{Arrival.total}}</td>
                        <td>{{Arrival.actual}}</td>
                        <td>{{Arrival.rate}}</td>
                        <td>{{Arrival.extra}}</td>
                      </tr>
                    </table>
                    <p class="rule" style="margin-left: 2rem">{{Arrival.rule}}</p>
                    <div class="marking">
                      <span style="font-size: 1rem; margin-left: 2rem">评分：</span>
                      <el-rate
                        v-model="Arrival.mark"
                        :colors="colors">
                      </el-rate>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="showMark">
                      <span class="mark">得分：{{P2mark}}</span>
                    </div>
                    <div class="btnbox">
                      <button class="submitMark" @click="submitP1">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="PART3" name="third">
                <div class="remark">
                  <div class="gap"><h3 class="gapTitle">工作错误</h3><hr class="modelSplit"></div>
                    <div class="matterMrak">
                      <div class="matter">
                        <el-input type="textarea" :rows="5" v-model="Assess.mistake" placeholder="本部分为额外扣分，初始为5星，有一项重大工作失误减1星，后以1星两分计入总分"></el-input>
                      </div>
                      <div class="marking">
                        <span style="font-size: 1rem; margin-left: 2rem">评分：</span>
                        <el-rate
                          v-model="Assess.mismark"
                          :colors="colors">
                        </el-rate>
                      </div>
                    </div>
                  <div class="gap"><h3 class="gapTitle">学习进步</h3><hr class="modelSplit"></div>
                  <div class="matterMrak">
                    <div class="matter">
                      <el-input type="textarea" :rows="5" v-model="Assess.study" placeholder="本部分为额外加分，初始为0星，有一项可以工作领域的加分成就加1星，后以1星两分计入总分"></el-input>
                    </div>
                    <div class="marking">
                      <span style="font-size: 1rem; margin-left: 2rem">评分：</span>
                      <el-rate
                        v-model="Assess.stumark"
                        :colors="colors">
                      </el-rate>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="showMark">
                      <span class="mark">附加得分：{{P3mark}}</span>
                    </div>
                    <div class="btnbox">
                      <button class="submitMark" @click="submitP1">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="PART4" name="fourth">
                <div class="remark">
                  <div class="gap"><h3 class="gapTitle">其他事项</h3><hr class="modelSplit"></div>
                  <el-input type="textarea" :rows="5" v-model="Assess.other" placeholder="本部分为对员工的特别备注事项，不计入考核总分，也可以选择不填"></el-input>
                </div>
                <div class="bottom" style="display:flex; justify-content: flex-end">
                  <div class="btnbox">
                    <button class="submitMark" @click="submitFinal">FINISH</button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      Assess: {
        id: '1',
        name: '张三',
        time: '2021.4~2021.5',
        department: '技术部',
        mark: 'XX',
        mistake: '',
        study: '',
        mismark: '',
        stumark: '',
        other: ''
      },
      p1mark: '',
      Abi: [
        {name: '计划执行力', mark: '', rule: '独立按计划完成：5星；按计划完成：3~4星；延迟完成：1~2星'},
        {name: '工作主动性', mark: '', rule: '积极主动完成工作：5星；按要求完成工作：3~4星；经催促后完成工作：1~2星'},
        {name: '敬业精神', mark: '', rule: '非常敬业、责任心强、工作严谨：5星；能达到要求：3~4星；达不到要求：1~2星'},
        {name: '工作效率', mark: '', rule: '以项目组内成员平均工作分配量为基准，超额完成：5星；达到要求：3~4星；低于平均：1~2星'},
        {name: '团队合作性', mark: '', rule: '非常善于与项目组良好沟通合作：5星；能达到基本要求：3~4星；不能和项目组成员愉快合作：1~2星'},
        {name: '解决问题能力', mark: '', rule: '能够独立解决突发事件：5星；能按领导要求解决问题：3~4星；不能解决问题：1~2星'}
      ],
      Arrival: {total: '21', actual: '18', rate: '85%', extra: '', mark: '', rule: '*出勤率100%：5星；90%以上：4星；80%以上：3星；70%以上：2星；70%以下：1星,若有特殊情况视情况而定'}
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    showRule () {
      const tip = this.$createElement
      this.$notify({
        title: 'TIP!',
        message: tip('i', {style: 'font-size:0.1rem;color:grey'},
          '员工绩效考核有四部分组成，PART4为需要备注的额外事项（可以不填），不计入分数,总分=PART1×60%+PART2×40%（+PART3）'),
        offset: 100,
        duration: 0
      })
    },
    submitP1 () {
      this.$confirm('是否提交本部分分数？', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '提交成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交'
        })
      })
    },
    submitFinal () {
      this.$confirm('是否提交所有评价？', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '提交成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交'
        })
      })
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.showRule()
    })
  },
  computed: {
    P1mark: function () {
      var sum = 0
      var p1mark = 0
      // console.log(sum)
      // console.log(this.Abi.length)
      for (var i = 0; i < this.Abi.length; i++) {
        sum = sum + this.Abi[i].mark * 20
      }
      p1mark = (sum / this.Abi.length).toFixed(2)
      console.log(p1mark)
      return p1mark
    },
    P2mark: function () {
      var p2mark = (this.Arrival.mark * 20).toFixed(2)
      return p2mark
    },
    P3mark: function () {
      var p3mark = ((this.Assess.mismark + this.Assess.stumark) * 2).toFixed(2)
      return p3mark
    }
  }
}
</script>

<style scoped>
  .contentWrapper{
    /*background-color: rgb(240, 240, 242);*/
    padding: 0 3rem 3rem;
  }
  .mainBox{
    background-color: white;
    margin: .5rem 3rem;
    padding: 4rem;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
  }
  .staffMessage{
    display: flex;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .tag{
    opacity: 90%;
    padding-right: 2rem;
  }
  .gap{
    margin-top: 2rem;
    display: flex;
    /*padding: 0 5rem;*/
  }
  h3.gapTitle{
    color: #6d4fc9;
    font-size: 1rem;
  }
  .modelSplit{
    flex: 1;
    height: .1rem;
    margin: 2rem 0rem 2rem 4rem;
    background-color: #987cb9;
  }
  .bottom{
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .btnbox{
    align-self: flex-end;
  }
  .marking{
    display: flex;
    flex: 1;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
  }
  span.dimension{
    font-size: 1.5rem;
    /*flex: 0 20%;*/
    margin-right: 3rem;
  }
 .el-rate__icon{
    font-size: 2rem;
  }
  button.submitMark{
    width: 5rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: rgb(128, 85, 207);
    border-style: none;
    color: white;
    margin-left: 2rem;
  }
  .showMark{
    display: flex;
  }
  p.rule{
    flex: 1;
    font-size: 0.8rem;
    color: #987cb9;
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .arrTable{
    border: 0.08rem solid lightgray;
  }
  table.arrtable{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.1rem solid #dddddd;
  }
  tr.tRow{
    flex: 1;
    display: flex;
  }
  th,td{
    flex: 0 0 25%;
    height: 3rem;
  }
</style>
