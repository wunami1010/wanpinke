<template>
    <div class="box">
        <el-row :gutter="20">
            <div class="user">
            <el-col :span="8">
                <el-row>
                    <el-col>
                        <el-card shadow="hover" class="mgb20">
                            <div class="user-info">
                                <img src="static/ai/default_scu.jpg" class="user-avator" alt="">
                                <h1>&nbsp;&nbsp;{{name}}</h1>
                                <div>{{role}}</div>
                            </div>
                            <div class="user-info-list">
                                <p>上次登录时间：<span>2018-01-01</span></p>
                                <p>上次登录地点：<span>杭州</span></p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            </div>
            <div class="list">
            <el-col :span="8">
                <el-card shadow="hover" :body-style="{ height: '304px'}">
                      <div slot="header" class="clearfix">
                          <div class="crumbs">待办事项</div>
                          <el-button style="float: right; padding: 6px 0" type="text">添加</el-button>
                      </div>
                      <p></p>
                      <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">
                          <el-table-column width="40">
                              <template slot-scope="scope">
                                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                              </template>
                          </el-table-column>
                          <el-table-column>
                              <template slot-scope="scope">
                                  <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                              </template>
                          </el-table-column>
                      </el-table>
                </el-card>
            </el-col>
            </div>
            <div class="notice">
                <el-col :span="8">
                <div class="crumbs">通知栏</div>
                <div class="container">
                <el-tabs v-model="message">
                    <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                        <el-table :data="unread" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane :label="`已读消息(${read.length})`" name="second">
                        <template v-if="message === 'second'">
                            <el-table :data="read" :show-header="false" style="width: 100%">
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <span class="message-title">{{scope.row.title}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="date" width="150"></el-table-column>
                                <el-table-column width="120">
                                    <template slot-scope="scope">
                                        <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                    <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
                        <template v-if="message === 'third'">
                            <el-table :data="recycle" :show-header="false" style="width: 100%">
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <span class="message-title">{{scope.row.title}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="date" width="150"></el-table-column>
                                <el-table-column width="120">
                                    <template slot-scope="scope">
                                        <el-button @click="handleRestore(scope.$index)">还原</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                </el-tabs>
                </div>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      todoList: [{
        title: '今天要修复100个bug',
        status: false
      },
      {
        title: '今天要修复100个bug',
        status: false
      },
      {
        title: '今天要写100行代码',
        status: false
      },
      {
        title: '今天要修复100个bug',
        status: false
      },
      {
        title: '今天要修复100个bug',
        status: true
      },
      {
        title: '今天要写100行代码',
        status: true
      }],
      message: 'first',
      showHeader: false,
      unread: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      },
      {
        date: '2018-04-19 21:00:00',
        title: '今晚12点整发大红包，先到先得'
      }],
      read: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }],
      recycle: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }]
    }
  },
  methods: {
    handleRead (index) {
      const item = this.unread.splice(index, 1)
      console.log(item)
      this.read = item.concat(this.read)
    },
    handleDel (index) {
      const item = this.read.splice(index, 1)
      this.recycle = item.concat(this.recycle)
    },
    handleRestore (index) {
      const item = this.recycle.splice(index, 1)
      this.read = item.concat(this.read)
    }
  },
  computed: {
    unreadNum () {
      return this.unread.length
    }
  }
}

</script>

<style scoped>
.box{
  margin:2rem 2rem;
  background:#f0f0f0;
  padding: 1.2rem;
}
.box img{
  width:20%;
  height: 20%;
  border-radius:50%;
}
.el-row {
    margin-bottom: 20px;
}
.user{
    width: 30rem;
    float: left;
    background: white;
    margin: 15px;
    height: 18rem;
}
.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid black;
    margin-bottom: 20px;
    float: left;
    padding: 1rem;
}
.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.user-info-list {
    font-size: 14px;
    color: grey;
    line-height: 30px;
    text-align: left;
    margin: 5px;
}
.user-info-list span {
    margin-left: 70px;
}
.mgb20 {
    margin-bottom: 20px;
}
.todo-item {
    font-size: 15px;
    color:black;
    line-height: 30px;
}
.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
.list{
    background:white;
    padding: 1rem;
    margin: 15px;
    font-size: 25px;
    float: right;
    width: 35rem;
    height: 16rem;
}
.notice{
    background: white;
    margin: 15px;
    width: 70rem;
    float: left;
    height: 20rem;
}
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
</style>
