<template>
<div>
  <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{path: '/Homepage'}">首页</el-breadcrumb-item>
  <el-breadcrumb-item>员工详情界面</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>&nbsp;</h1>
  <div class="infor_box">
    <div class="left_box">
        <img src="static/ai/default_scu.jpg">
        <button class="changeBtn" @click="changeInfo" v-if="!IfChange"> <i class="el-icon-edit"></i>修改信息</button>
        <button class="changeBtn" @click="successChange" v-if="IfChange"> <i class="el-icon-success"></i>保存修改</button>
        <div class="para">
        <el-card class="box-card">
          <p v-if="!IfChange">{{message}}</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 8}"
            placeholder="请输入内容"
            v-model="message"
            v-if="IfChange">
          </el-input>
        </el-card>
      </div>
    </div>
    <div class="right_box">
      <li class="manyBox" v-for="(item,index) in InfoLists" :key="index">
        <div class="boxlist">
            <span class="InfoCata">{{item.title}}:</span><span class="InfoValue" v-if="!IfChange">{{item.value}}</span>
            <el-input v-model="item.value" placeholder="请输入内容" v-if="IfChange"></el-input>
        </div>
      </li>
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
        {id: 1, title: '姓名', value: '张三'},
        {id: 2, title: '工号', value: '00001'},
        {id: 3, title: '性别', value: '男'},
        {id: 4, title: '生日', value: '1998-05-04'},
        {id: 5, title: '入职年份', value: '2019-04-21'},
        {id: 6, title: '家庭地址', value: 'xxxxxx'},
        {id: 7, title: '电话', value: '1234567890'},
        {id: 8, title: '邮箱', value: '2222222@163.com'},
        {id: 9, title: '所在部门', value: '市场营销部'},
        {id: 10, title: '岗位', value: '市场营销顾问'}],
      message: '    同济大学市场营销专业本科毕业。专业绩点排名处于前30%。热心公益，曾多次获得优秀青年志愿者奖'
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
    }
  }
}
</script>

<style scoped>
.infor_box{
  display: flex;
    padding:10px 10px 0px 0px;
    margin: auto;
    width:100%;
    justify-content: space-around;
    align-items: center;
    border: 0.08rem solid lightgray;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(202, 196, 196);
}

.left_box{
  text-align: center;
  width: 23rem;
  padding:4rem;

}
.left_box img{
  width:12rem;
}
.right_box li{
  list-style-type:none;
  text-align: left;
  font-size: 16px;
  line-height: 40px;
}
.right_box{
  text-align: left;
  width:23rem;
  padding:4rem;

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

.box_left{
  text-align: left;
  flex: 1;
}
.box_right{
  text-align: left;
  flex: 1;
}
.para{
  width: 25rem;
  margin-top: 5rem;
  font-size: 16px;
  text-align: left;
  white-space: pre-wrap;
}
</style>
