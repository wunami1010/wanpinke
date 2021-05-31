<template>
    <div class="box">
        <el-row :gutter="20" type="flex" justify="space-between">
        <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>消息通知</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>&nbsp;</h1>
            <div class="notice">
                <div class="sname">通知栏</div>
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
            <div class="s_contain">
                 <div class="s_left">
                     <div class="user-info">
                         <img src="static/ai/default_scu.jpg" class="user-info-img">
                         <div class="clock">
                           <h2>张三{{name}}</h2>
                           <p>&nbsp;</p>
                           <p class="date">{{ date }}</p>
                           <p class="time">{{ time }}</p>
                          </div>
                     </div>
                     <div class="user-info-list">
                         <p>上次登录时间：<span>2021-04-19</span></p>
                         <p>上次登录地点：<span>杭州</span></p>
                     </div>
                 </div>
                 <div class="s_right">
                     <div class="sname">待办事项</div>
                     <el-button style="float: right; padding: 6px 0" type="text">添加</el-button>
                     <el-table :data="todoList" :show-header="false" height="304" style="width:40rem;font-size:14px;">
                         <el-table-column width="80">
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
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      date: '',
      time: '',
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
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
  mounted: function () {
    // 定时执行更新时间的方法
    let _this = this
    _this.$nextTick(function () {
      setInterval(_this.updateTime, 1000)
    })
  },
  methods: {
    showMessage () {
      this.$http.post('http://localhost:3000/getMessage', '')
        .then((res) => {
          if (res.data.state === 'success') {
            console.log('success')
          }
        }, err => {
          console.log(err)
        })
    },
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
    },
    updateTime: function () {
      let _this = this
      let cd = new Date()
      // this.date;
      this.time = _this.zeroPadding(cd.getHours(), 2) + ':' +
      _this.zeroPadding(cd.getMinutes(), 2) + ':' +
      _this.zeroPadding(cd.getSeconds(), 2)
      _this.date = _this.zeroPadding(cd.getFullYear(), 4) + '-' +
      _this.zeroPadding(cd.getMonth() + 1, 2) + '-' +
      _this.zeroPadding(cd.getDate(), 2) + ' ' +
      _this.week[cd.getDay()]
    },
    // 更新时间的辅助方法
    zeroPadding: function (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
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
  padding: 10px;
}
.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}
.sname{
  font-size: 1.2rem;
  font-weight: bold;
}
.s_contain{
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.s_left{
  flex: 2;
  padding: 10px;
  width:25rem;
  height: 20rem;
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
  padding: 5px 5px 5px 5px;
  flex: 3;
  height: 25rem;
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
.user-info {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
}
.user-info-img{
  float: left;
  width: 8rem;
  height:8rem;
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
.todo-item {
    font-size: 15px;
    color:black;
}
.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
.message-title{
    cursor: pointer;
}
.notice{
    padding: 5px 5px 5px 5px;
    margin: auto;
    width:100%;
    float: left;
    justify-content: space-around;
    align-items: center;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.clock{
  width: 30rem;
  float: right;
}
</style>
