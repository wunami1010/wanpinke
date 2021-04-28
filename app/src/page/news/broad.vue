<template>
    <div class="box">
        <el-row :gutter="20" type="flex" justify="space-between">
            <div class="user">
                <div class="user-info">
                    <img src="static/ai/default_scu.jpg" class="user-avator" alt="">
                    <h1>&nbsp;&nbsp;{{name}}</h1>
                    <div>{{role}}</div>
                </div>
                <div class="user-info-list">
                    <p>上次登录时间：<span>2021-04-19</span></p>
                    <p>上次登录地点：<span>杭州</span></p>
                </div>
            </div>
            <div class="list">
                <div class="crumbs">待办事项</div>
                <el-button style="float: right; padding: 6px 0" type="text">添加</el-button>
                <el-table :data="todoList" :show-header="false" height="304" style="width:30rem;font-size:14px;">
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
                    <el-table-column width="60">
                            <template >
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="notice">
                <div class="crumbs">&nbsp;</div>
                <div class="crumbs">&nbsp;</div>
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
                                <el-table-column prop="date" width="180"></el-table-column>
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
                                <el-table-column prop="date" width="180"></el-table-column>
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
        date: '2021-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护，请提前做好准备'
      },
      {
        date: '2021-04-15 20:00:00',
        title: '【公司通知】今晚12点整发大红包，先到先得'
      }],
      read: [{
        date: '2021-04-02 12:00:00',
        title: '【公司通知】清明节放假日期为四月三号-四月五号'
      }],
      recycle: [{
        date: '2021-04-05 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护，请提前做好准备'
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
  background:#f0f0f0;
  padding: 10px;
}
.box img{
  width:20%;
  height: 20%;
  border-radius:50%;
}
.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}
.user{
    float: right;
    width:30rem;
    height: 20rem;
    margin: auto;
}
.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid black;
    float: left;
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
}
.user-info-list span {
    margin-left: 70px;
}
.mg {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.list{
    background: white;
    margin: auto;
    width:30rem;
    height: 20rem;
    float: left;
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
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
.notice{
    margin: auto;
    width:67rem;
    float: left;
}
</style>
