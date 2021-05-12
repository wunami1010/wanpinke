<template>
  <div class="Login">
    <transition name="fade">
      <mess v-if="this.state">{{message}}</mess>
    </transition>
    <div class="Logincontain">
      <div class="LoginLeft">
        <div class="LoginLeftHeader">
          Onepick 万品客
        </div>
        <div class="Signin">
          Sign in
        </div>
      </div>
      <div class="LoginRight">
        <div class="LoginRightcontain">
          <form>
            <label for="username"><div class="icon" id="usericon"></div>用户名:</label>
            <input name="username" id="username" type="text" v-model="username" autocomplete="off">
            <label for="password"><div class="icon" id="passwordicon"></div>密码:</label>
            <input name="password" id="password" type="password" v-model="password" autocomplete="off">
            <div class="LoginRightBottom">
              <div class="signinBtn" type="primary" @click="signin">登录</div>
              <div class="skiptoregister" @click="skipto">没有账号，点此注册</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mess from '../components/message'
export default {
  components: {
    mess
  },
  data () {
    return {
      username: '',
      password: '',
      state: false,
      message: ''
    }
  },
  methods: {
    timeout () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.state = false, this.message = '')
        }, 2600)
      })
    },
    skipto () {
      this.$router.push({path: '/register'})
    },
    signin () {
      if (this.username === '' || this.password === '') {
        this.state = true
        this.message = '用户名或密码为空'
        return
      }
      let obj = {
        username: this.username,
        password: this.password
      }
      this.$http.post('http://localhost:3000/login', obj)
        .then((res) => {
          if (res.data.state === 'success') {
            sessionStorage.setItem('demo-token', res.data.token)
            localStorage.setItem('ms_username', this.ruleForm.username)
            this.state = true
            this.message = '登陆成功'
            this.timeout().then(() => {
              this.$router.push({path: '/Home'})
            })
          } else if (res.data.state === 'blank') {
            this.state = true
            this.message = '用户名不存在'
            this.timeout()
          } else if (res.data.state === 'fail') {
            this.state = true
            this.message = '密码错误'
            this.timeout()
          }
        }, err => {
          sessionStorage.setItem('demo-token', '')
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.Login{
  min-width: 60rem;
  width: 100%;
  height: 100vh;
  background-color: rgb(191, 194, 212);
  display: flex;
  justify-content: center;
  align-items: center;
}
.Logincontain{
  width: 48rem;
  height: 30rem;
  font-family: fantasy;
  background-color: white;
  display: flex;
  box-shadow: 0.3rem 0.3rem 0.5rem rgb(74, 77, 95);
}
.LoginLeft{
  flex: 4;
  background-color: rgb(29, 30, 36);
  box-shadow: 0.1rem 0 0.1rem rgb(123, 128, 153);
}
.LoginLeftHeader{
  margin: 2rem 5rem;
  font-size: 1.0rem;
  color: rgb(128, 85, 207);
  text-align: left;
  /* text-shadow: 0.1rem 0.1rem 0.1rem rgb(39, 73, 73); */
}
.Signin{
  font-size: 2.6rem;
  margin: 8rem 5rem;
  text-align: center;
  color: rgb(211, 207, 202);
}
.LoginRight{
  flex: 5;
}
.LoginRightcontain{
  color: gray;
  font-size: 1rem;
  margin: 6rem 4rem;
}
.LoginRightcontain form{
  display: flex;
  flex-flow: column;
}
.LoginRightcontain form input{
  margin: 1rem 0 2rem 0;
  border: none;
  font-size: 1rem;
  border-bottom: 0.1rem solid gray;
}
.LoginRightcontain form input:focus{
  outline: none;
  border: none;
  border-bottom: 0.1rem solid gray
}
.LoginRightcontain form label{
  text-align: left;
  display: flex;
}
.LoginRightBottom{
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}
.signinBtn{
  width: 6rem;
  height: 2rem;
  background-color: rgb(128, 85, 207);
  border: none;
  border-radius: 0.6rem;
  color: white;
  line-height: 2rem;
  cursor: pointer;
}
.skiptoregister{
  cursor: pointer;
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
.icon{
  width: 1.4rem;
  height: 1.4rem;
}
#usericon{
  background-image: url('../../static/ai/用户.png');
  background-size: cover;
}
#passwordicon{
  background-image: url('../../static/ai/密码.png');
  background-size: cover;
}
</style>
