<template>
  <div class="Login">
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
            <label for="username"><span v-if="!username">*</span>用户名:</label>
            <input name="username" id="username" v-model="username" autocomplete="off">
            <label for="password"><span v-if="!password">*</span>密码:</label>
            <input name="password" id="password" v-model="password" autocomplete="off">
            <label for="email"><span v-if="!email">*</span>邮箱:</label>
            <input name="email" id="email" v-model="email" autocomplete="off">
            <label for="tel"><span v-if="!tel">*</span>联系方式:</label>
            <input name="tel" id="tel" v-model="tel" autocomplete="off">
            <div class="LoginRightBottom">
              <button class="signinBtn">创建账户</button>
              <div class="skiptoregister" @click="skipto">已有账号，点此登录</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      tel: ''
    }
  },
  methods: {
    skipto () {
      this.$router.push({path: '/'})
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
  margin: 5rem 4rem;
}
.LoginRightcontain form{
  display: flex;
  flex-flow: column;
}
.LoginRightcontain form input{
  margin: 0.8rem 0 1rem 0;
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
}
.LoginRightBottom{
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.signinBtn{
  width: 8rem;
  height: 2rem;
  background-color: rgb(128, 85, 207);
  border: none;
  border-radius: 0.6rem;
  color: white;
}
.skiptoregister{
  cursor: pointer;
}
span{
  font-size: 1rem;
  color: rgb(255, 0, 0);
}
</style>
