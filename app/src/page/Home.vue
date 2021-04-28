<template>
  <div class="bbox">
    <div class="side">
      <div class="tophead">
        <img class="logo" src="../../static/ai/logo.png">
        <div class="headername">Onepick 万品客</div>
      </div>
      <tree-view-item :menus="menus"></tree-view-item>
    </div>
    <div class="outer">
      <div class="header">
        <div class="header_left">
        </div>
        <div class="header-right">
          <div class="header-user-con">
            <!-- 全屏显示 -->
            <div class="btn-fullscreen" @click="handleFullScreen">
              <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                <i class="el-icon-rank"></i>
              </el-tooltip>
            </div>

            <!-- 消息中心 -->
            <div class="btn-bell">
              <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                <router-link to="/news/broad">
                <i class="el-icon-bell"></i>
                </router-link>
              </el-tooltip>
            <!--小红点-->
            <span class="btn-bell-badge" v-if="message"></span>
            </div>

            <!-- 用户头像 -->
            <div class="user-avator"><img src="static/ai/default_scu.jpg"></div>

            <!-- 用户名下拉菜单 -->
              <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  {{username}} <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <router-link to="/essential_i/staff_i">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  </router-link>
                  <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
        </div>
      </div>
      <div class="contain">
        <div class="Bcontent">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeViewItem from '../components/TreeViewItem'
export default {
  data () {
    return {
      menus: this.$store.state.menusModule.menus,
      fullscreen: false,
      message: 2
    }
  },
  components: {
    TreeViewItem,
    username () {
      let username = localStorage.getItem('ms_username')
      return username
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped>
.bbox{
  display: flex;
  position: relative;
  overflow: hidden;
  overflow-x: auto;
  overflow-y:auto;
}
.outer{
  width: 100%;
  height: 100vh;
  margin-left: 12rem;
}
.Bcontent{
  padding: 0;
  margin: 2rem;
}
.contain{
  min-width: 60rem;
  max-width: 88rem;
  padding-bottom: 2rem;
}
.header{
  width: 100%;
  height: 9vh;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #fff;
  background-color: rgb(29, 30, 36);
}
.headername{
  color: white;
  font-weight: bold;
}
.header_left{
  font-size: 2rem;
  width: 20rem;
}
.header_right{
  width: 20rem;
  align-self: flex-end;
  float: right;
  padding-right: 50px;
}
.side{
  height: 100vh;
  width: 12rem;
  position: fixed;
  overflow: hidden;
  color: white;
  background-color: rgb(29, 30, 36);
  overflow-y:auto;
  overflow-x:hidden;
}
.side::-webkit-scrollbar{
  display: none;
}
.tophead{
  margin-top: 2rem;
  padding: 0 1.2rem;
}
.logo{
  width: 3rem;
  height: 3rem;
}
.headername{
  height: 6rem;
  line-height: 6rem;
}
.header-user-con{
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen{
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell, .btn-fullscreen{
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge{
  position: absolute;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell{
  color: #fff;
}
.user-name{
  margin-left: 10px;
}
.user-avator{
  margin-left: 20px;
}
.user-avator img{
  display: block;
  width:40px;
  height:40px;
  border-radius: 50%;
}
.el-dropdown-link{
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item{
  text-align: center;
}
</style>
