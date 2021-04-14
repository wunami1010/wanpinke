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
          Sign up
        </div>
      </div>
      <div class="LoginRight">
        <div class="LoginRightcontain">
          <form>
            <label for="username"><span v-if="!username">*</span><div class="icon" id="usericon"></div>用户名:</label>
            <input name="username" id="username" v-model="username" autocomplete="off">
            <label for="password"><span v-if="!password">*</span><div class="icon" id="passwordicon"></div>密码:</label>
            <input type="password" name="password" id="password" v-model="password" autocomplete="off">
            <label for="comfirmpassword"><span v-if="!comfirmpassword">*</span><div class="icon" id="passwordicon"></div>确认密码:</label>
            <input type="password" name="comfirmpassword" id="comfirmpassword" v-model="comfirmpassword" autocomplete="off">
            <label for="email"><span v-if="!email">*</span><div class="icon" id="emailicon"></div>邮箱:</label>
            <input name="email" id="email" v-model="email" autocomplete="off">
            <label for="tel"><span v-if="!tel">*</span><div class="icon" id="telicon"></div>联系方式:</label>
            <input name="tel" id="tel" v-model="tel" autocomplete="off">
            <div class="LoginRightBottom">
              <div class="signinBtn" @click="signup">创建账户</div>
              <div class="skiptoregister" @click="skipto">已有账号，点此登录</div>
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
      email: '',
      tel: '',
      comfirmpassword: '',
      state: '',
      message: ''
    }
  },
  methods: {
    skipto () {
      this.$router.push({path: '/'})
    },
    timeout () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.state = false, this.message = '')
        }, 2600)
      })
    },
    signup () {
      if (this.username === '' || this.password === '' || this.tel === '' || this.email === '') {
        this.state = true
        this.message = '请输入必填项'
        this.timeout()
        return
      }
      if (this.password !== this.comfirmpassword) {
        this.state = true
        this.message = '两次密码不一致，请重新确认!'
        this.timeout()
        return
      }
      let obj = {
        username: this.username,
        password: this.password,
        tel: this.tel,
        email: this.email
      }
      this.$http.post('http://localhost:3000/register', obj)
        .then((res) => {
          if (res.data.state === 'emailexist') {
            this.state = true
            this.message = '该邮箱已存在'
            this.timeout()
          } else if (res.data.state === 'userexist') {
            this.state = true
            this.message = '用户名已存在'
            this.timeout()
          } else if (res.data.state === 'success') {
            this.state = true
            this.message = '注册成功,即将前往登录界面'
            this.timeout().then(() => {
              this.$router.push({path: '/'})
            })
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
  margin: 4rem 4rem;
}
.LoginRightcontain form{
  display: flex;
  flex-flow: column;
}
.LoginRightcontain form input{
  margin: 0.4rem 0 1rem 0;
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
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.signinBtn{
  width: 8rem;
  height: 2rem;
  line-height: 2rem;
  background-color: rgb(128, 85, 207);
  border: none;
  border-radius: 0.6rem;
  color: white;
  cursor: pointer;
}
.skiptoregister{
  cursor: pointer;
}
span{
  font-size: 1rem;
  color: rgb(255, 0, 0);
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
#emailicon{
  background-image: url('../../static/ai/邮箱.png');
  background-size: cover;
}
#telicon{
  background-image: url('../../static/ai/电话.png');
  background-size: cover;
}
</style>
