<template>
  <div class="contentWrapper">
    <div class="contentTop">
      <div class="topBox">
        <h1 id="topName">阿里巴巴集团</h1>
        <button class="changeBtn" @click="changeInfo" v-if="!IfChange">修改信息</button>
        <button class="changeBtn" @click="successChange" v-if="IfChange">保存修改</button>
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
      <span class="companyPara">公司简介</span>
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
</template>

<script>
export default {
  data () {
    return {
      IfChange: false,
      input: '',
      InfoLists: [
        {id: 1, Ltitle: '名称', Lvalue: 'aaaaa', Rtitle: '编号', Rvalue: '5'},
        {id: 2, Ltitle: '类型', Lvalue: 'suibian', Rtitle: '成立时间', Rvalue: 'buzhidao'},
        {id: 3, Ltitle: '官网', Lvalue: 'wwwwwww', Rtitle: '地址', Rvalue: 'xxxxxx'},
        {id: 4, Ltitle: '电话', Lvalue: '1111', Rtitle: '邮箱', Rvalue: '2222'},
        {id: 5, Ltitle: '负责人账号', Lvalue: 'zzzzz', Rtitle: '负责人联系方式', Rvalue: 'ttttt'}],
      message: '这里是公司简介这里是公司简介这里是公司简介\n这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介' +
        '这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介' +
        '这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介'
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
.contentWrapper{
  background-color: rgb(240, 240, 242);
  border: solid 4px #bbbbbb;
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
  color: #2E7D32;
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
