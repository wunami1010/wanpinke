<template>
    <div class="box">
    <transition name="fade">
      <mess v-if="this.state">{{message}}</mess>
    </transition>
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
                                    <span class="message-title">【{{scope.row.messagetype}}】{{scope.row.content}}</span>
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
                                        <span class="message-title">【{{scope.row.messagetype}}】{{scope.row.content}}</span>
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
                                        <span class="message-title">【{{scope.row.messagetype}}】{{scope.row.content}}</span>
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
              <div class="leftTop">
                <div class="updatebtn" style="display: flex;margin-bottom: 2rem">
                  <button class="changeBtn" @click="upnotice" v-if="!IfChange" style="padding: .5rem;width: 7rem"> <i class="el-icon-edit"></i>点击发布公告</button>
                  <button class="changeBtn" @click="finishnotice" v-if="IfChange"> <i class="el-icon-edit"></i>确认发布</button>
                </div>
                <div class="para" v-if="IfChange">
                  <el-card class="box-card" style="margin-right: 2.5rem;margin-bottom: 3rem;border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 10}"
                      placeholder="请输入内容"
                      v-model="noticemessage"
                      v-if="IfChange">
                    </el-input>
                  </el-card>
                </div>
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
import mess from '../../components/message.vue'
export default {
  components: {
    mess
  },
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      date: '',
      time: '',
      state: false,
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      noticemessage: '',
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
      unread: '',
      read: '',
      recycle: ''
    }
  },
  mounted: function () {
    // 定时执行更新时间的方法
    let _this = this
    _this.$nextTick(function () {
      setInterval(_this.updateTime, 1000)
    })
    this.showMessage()
  },
  methods: {
    timeout () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.state = false, this.message = '')
        }, 2600)
      })
    },
    upnotice () {
      this.IfChange = true
      console.log('111')
    },
    finishnotice () {
      console.log('finish')
      this.$http.post('http://localhost:3000/addMessage', {messagevalue: this.noticemessage})
        .then((res) => {
          if(res.data.state === 'success'){
            this.state = true
            this.message = '发布公告成功'
            this.timeout()
            this.showMessage()
          }
        })
    },
    showMessage () {
      this.$http.post('http://localhost:3000/getMessage', {state: 'Neverread'})
        .then((res) => {
          if (res.data.state === 'success') {
            this.unread = res.data.data
          }
        }, err => {
          console.log(err)
        })
      this.$http.post('http://localhost:3000/getMessage', {state: 'Haveread'})
        .then((res) => {
          if (res.data.state === 'success') {
            this.read = res.data.data
          }
        }, err => {
          console.log(err)
        })
      this.$http.post('http://localhost:3000/getMessage', {state: 'cycle'})
        .then((res) => {
          if (res.data.state === 'success') {
            this.recycle = res.data.data
          }
        }, err => {
          console.log(err)
        })
    },
    handleRead (index) {
      const id = this.unread.splice(index, 1)[0].id
      this.$http.post('http://localhost:3000/changeMstate', {changestate: 'Haveread', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showMessage()
          }
        }, err => {
          console.log(err)
        })
    },
    handleDel (index) {
      const id = this.read.splice(index, 1)[0].id
      this.$http.post('http://localhost:3000/changeMstate', {changestate: 'cycle', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showMessage()
          }
        }, err => {
          console.log(err)
        })
    },
    handleRestore (index) {
      const id = this.recycle.splice(index, 1)[0].id
      this.$http.post('http://localhost:3000/changeMstate', {changestate: 'Haveread', id: id})
        .then((res) => {
          if (res.data.state === 'success') {
            this.showMessage()
          }
        }, err => {
          console.log(err)
        })
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
.mess{
  position: absolute;
  top: 5%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
