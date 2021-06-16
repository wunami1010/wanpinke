<template>
  <div class="contentWrapper">
    <div class="AllList">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane :label="`未读简历(${UnReadResume.length})`" name="first">
          <el-table :data="UnReadResume" stripe style="width: 100%">
            <el-table-column width="100%" align="right">
              <template slot-scope="scope">
                <span class="InfoStyle">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column width="50%" align="center">
              <template slot-scope="scope">
                <span class="InfoStyle">{{scope.row.gender}}</span>
              </template>
            </el-table-column>
            <el-table-column width="180%" align="center">
              <template slot-scope="scope">
                <span class="InfoStyle">{{scope.row.graduated}}</span>
              </template>
            </el-table-column>
            <el-table-column width="50%" align="center">
              <template slot-scope="scope">
                <span class="InfoStyle">{{scope.row.education}}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <span class="InfoStyle">{{scope.row.year}}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button @click="handleMore(scope.$index)">查看详情</el-button>
                <el-button @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane :label="`已读简历(${ReadedResume.length})`" name="second">
          <el-table :data="ReadedResume" stripe style="width: 100%">
            <el-table-column prop="name" width="100%" align="right"></el-table-column>
            <el-table-column prop="gender" width="50%" align="center"></el-table-column>
            <el-table-column prop="graduated" width="180%" align="center"></el-table-column>
            <el-table-column prop="education" width="50%" align="center"></el-table-column>
            <el-table-column prop="year"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button @click="handleUnread(scope.$index)">标为未读</el-button>
                <el-button @click="handleDelete(scope.$index)" type="danger">永久删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      UnReadResume: [{
        id: 1,
        name: '张三',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }, {
        name: '张三',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }, {
        name: '张三',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }, {
        name: '张三',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }],
      ReadedResume: [{
        name: '李四',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }, {
        name: '李四',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }, {
        name: '李四',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁'
      }]
    }
  },
  created () {
    this.showResume()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleMore (index) {
      let id = this.UnReadResume[index].id
      this.$router.push({path: '/recruit/resume/' + id})
    },
    handleRead (index) {
      let id = this.UnReadResume[index].id
      console.log(id)
      this.$http.post('http://localhost:3000/changeRstate', {changestate: 'Haveread', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showResume()
          }
        }, err => {
          console.log(err)
        })
    },
    handleUnread (index) {
      let id = this.ReadedResume[index].id
      console.log(id)
      this.$http.post('http://localhost:3000/changeRstate', {changestate: 'Neverread', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showResume()
          }
        }, err => {
          console.log(err)
        })
    },
    handleDelete (index) {
      let id = this.ReadedResume[index].id
      this.$http.post('http://localhost:3000/deleteResume', {changestate: 'Haveread', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showResume()
          }
        }, err => {
          console.log(err)
        })
    },
    showResume () {
      this.$http.post('http://localhost:3000/getResumeList', {state: 'Neverread'})
        .then((res) => {
          if (res.data.state === 'success') {
            this.UnReadResume = res.data.data
          }
        }, err => {
          console.log(err)
        })
      this.$http.post('http://localhost:3000/getResumeList', {state: 'Haveread'})
        .then((res) => {
          if (res.data.state === 'success') {
            this.ReadedResume = res.data.data
          }
        }, err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.contentWrapper{
  margin: 2rem;
}
</style>
