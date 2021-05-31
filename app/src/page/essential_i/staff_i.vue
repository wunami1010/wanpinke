<template>
<div>
  <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
  <el-breadcrumb-item>员工详情界面</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>&nbsp;</h1>
  <div class="box">
    <img src="static/ai/default_scu.jpg">
    <el-button class="changeBtn" @click="changeInfo" v-if="!IfChange" style="float:right">修改信息</el-button>
    <el-button class="changeBtn" @click="successChange" v-if="IfChange" style="float:right">保存修改</el-button>
    <div class="list">
      <li class="manyBox" v-for="(item,index) in InfoLists" :key="index">
        <div class="boxMiddle">
          <div class="box_left">
            <span class="InfoCata">{{item.Ltitle}}:</span><span class="InfoValue" v-if="!IfChange">{{item.Lvalue}}</span>
            <el-input v-model="item.Lvalue" placeholder="请输入内容" v-if="IfChange"></el-input>
          </div>
          <div class="box_right">
            <span class="InfoCata">{{item.Rtitle}}:</span><span class="InfoValue" v-if="!IfChange">{{item.Rvalue}}</span>
            <el-input v-model="item.Rvalue" placeholder="请输入内容" v-if="IfChange"></el-input>
          </div>
        </div>
      </li>
    </div>
    <div class="contentEnd">
      <span class="companyPara">个人简介</span>
      <div class="para">
        <el-card class="box-card">
          <p v-if="!IfChange">{{message}}</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="请输入内容"
            v-model="message"
            v-if="IfChange">
          </el-input>
        </el-card>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      IfChange: false,
      input: '',
      InfoLists: [
        {id: 1, Ltitle: '姓名', Lvalue: '张三', Rtitle: '工号', Rvalue: '00001'},
        {id: 2, Ltitle: '性别', Lvalue: '男', Rtitle: '生日', Rvalue: '1998-05-04'},
        {id: 3, Ltitle: '入职年份', Lvalue: '2019-04-21', Rtitle: '家庭地址', Rvalue: 'xxxxxx'},
        {id: 4, Ltitle: '电话', Lvalue: '1234567890', Rtitle: '邮箱', Rvalue: '2222222@163.com'},
        {id: 5, Ltitle: '所在部门', Lvalue: '市场营销部', Rtitle: '岗位', Rvalue: '市场营销顾问'}],
      message: '个人简介'
    }
  },
  methods: {
    changeInfo () {
      this.IfChange = true
      console.log('111')
    },
    successChange () {
      console.log('保存信息')
      console.log(this.message)
      this.IfChange = false
    },
    getStaffDetail () {
      let Ino = this.$route.params.id
      this.$http.get('http://localhost:3000/getStaffByIno/' + Ino, '')
        .then((res) => {
          if (res.data.state === 'success') {
            let detaildata = res.data.data
            console.log(res.data.data)
            this.InfoLists[0].Rvalue = detaildata.Ino
            this.InfoLists[0].Lvalue = detaildata.name
            this.InfoLists[1].Lvalue = detaildata.gender
            this.InfoLists[1].Rvalue = detaildata.birth
            this.InfoLists[2].Lvalue = detaildata.entrytime
            this.InfoLists[2].Rvalue = detaildata.address
            this.InfoLists[3].Lvalue = detaildata.tel
            this.InfoLists[3].Rvalue = detaildata.email
            this.InfoLists[4].Lvalue = detaildata.depart
            this.InfoLists[4].Rvalue = detaildata.position
          }
        }, err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getStaffDetail()
  }
}
</script>

<style scoped>
.box{
    padding:10px 10px 0px 0px;
    margin: auto;
    width:100%;
    justify-content: space-around;
    align-items: center;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}
.box img{
  width:10%;
  height: 10%;
  border-radius:50%;
}
.list ul{
  margin: 0 auto;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
}
.topBox{
  margin: 5rem 33rem 3em 0rem;
}
h1#topName{
  font-size: 2rem;
  display: inline-block;
}
.changeBtn{
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgb(128, 85, 207);
  border-style: none;
  color: white;
  margin-left: 2rem;
}
.InfoCata{
  font-size: 1rem;
  color:rgb(128, 85, 207);
  display: inline-block;
}
.InfoValue{
  width: border-box;
  padding-left: .8rem;
}
.boxMiddle{
  border-bottom: gray 0.2rem dashed;
  margin-left: 7rem;
  margin-right: 7rem;
  padding-bottom: 0.5rem;
}
li{
  list-style: none;
}
.boxMiddle{
  display: flex;
}
.box_left{
  text-align: left;
  flex: 1;
}
.box_right{
  text-align: left;
  flex: 1;
}
.contentEnd{
  margin-top: 5rem;
}
.companyPara{
  font-size: 1rem;
}
.para{
  margin: 1rem 6rem 6rem;
  font-size: 1rem;
  text-align: left;
  white-space: pre-wrap;
}
</style>
