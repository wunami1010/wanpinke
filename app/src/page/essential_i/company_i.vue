<template>
 <div>
  <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
  <el-breadcrumb-item>公司详情界面</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>&nbsp;</h1>
    <div class="contentWrapper">
      <div class="contentTop">
        <div class="topBox">
          <h1 id="topName">阿里巴巴集团</h1>
          <button class="changeBtn" @click="changeInfo" v-if="!IfChange"> <i class="el-icon-edit"></i>修改信息</button>
          <button class="changeBtn" @click="successChange" v-if="IfChange"> <i class="el-icon-success"></i>保存修改</button>
        </div>
      </div>
      <div class="contentMiddle">
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
        <div class="companyPara">公司简介</div>
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
        {id: 1, Ltitle: '名称', Lvalue: '阿里巴巴集团控股有限公司', Rtitle: '编号', Rvalue: '5'},
        {id: 2, Ltitle: '类型', Lvalue: '互联网公司', Rtitle: '成立时间', Rvalue: '1999年'},
        {id: 3, Ltitle: '官网', Lvalue: 'https://www.alibabagroup.com/cn/global/home', Rtitle: '地址', Rvalue: '中国杭州市余杭区文一西路969号。'},
        {id: 4, Ltitle: '电话', Lvalue: '(+86) 571-8502-2088', Rtitle: '邮箱', Rvalue: 'gsll@service.alibaba.com'},
        {id: 5, Ltitle: '负责人账号', Lvalue: 'albb@13', Rtitle: '负责人联系方式', Rvalue: '195412341023'}],
      message: '简介'
    }
  },
  mounted () {
    this.getCompany()
  },
  methods: {
    changeInfo () {
      this.IfChange = true
      console.log('111')
    },
    successChange () {
      let obj = {
        name: this.InfoLists[0].Lvalue,
        Cno: this.InfoLists[0].Rvalue,
        ctype: this.InfoLists[1].Lvalue,
        settime: this.InfoLists[1].Rvalue,
        officialweb: this.InfoLists[2].Lvalue,
        address: this.InfoLists[2].Rvalue,
        tel: this.InfoLists[3].Lvalue,
        email: this.InfoLists[3].Rvalue,
        charge: this.InfoLists[4].Lvalue,
        chargetel: this.InfoLists[4].Rvalue,
        intro: this.message,
      }
      this.$http.post('http://localhost:3000/getcompany', obj)
        .then((res) => {
          if (res.data.state === 'success') {
            this.IfChange = false
          }
        }, err => {
          console.log(err)
        })
    },
    getCompany () {
      this.$http.post('http://localhost:3000/getcompany', '')
        .then((res) => {
          if (res.data.state === 'success') {
            let detaildata = res.data.data
            console.log(detaildata)
            this.InfoLists[0].Lvalue = detaildata[0].name
            this.InfoLists[0].Rvalue = detaildata[0].Cno
            this.InfoLists[1].Lvalue = detaildata[0].ctype
            this.InfoLists[1].Rvalue = detaildata[0].settime
            this.InfoLists[2].Lvalue = detaildata[0].officialweb
            this.InfoLists[2].Rvalue = detaildata[0].address
            this.InfoLists[3].Lvalue = detaildata[0].tel
            this.InfoLists[3].Rvalue = detaildata[0].email
            this.InfoLists[4].Lvalue = detaildata[0].charge
            this.InfoLists[4].Rvalue = detaildata[0].chargetel
            this.message = detaildata[0].intro
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
  background-color: white;
  margin: .5rem 3rem;
  padding: 2rem;
  border: 0.08rem solid lightgray;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
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
  color: rgb(128, 85, 207);
  display: inline-block;
}
.InfoValue{
  width: border-box;
  padding-left: .8rem;
}
.boxMiddle{
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
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(128, 85, 207);
}
.para{
  margin: 1rem 6rem 6rem;
  font-size: 1rem;
  text-align: left;
  white-space: pre-wrap;
}
</style>
