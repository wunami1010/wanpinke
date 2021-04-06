<template>
  <div class="contentWrapper">
    <div class="contentTop">
      <div class="topBox">
        <h1 id="topName">阿里巴巴集团</h1>
        <button class="changeBtn" @click="changeInfo">修改信息</button>
      </div>
    </div>
    <div class="contentMiddle">
      <li class="manyBox" v-for="(item,index) in InfoLists" :key="item.id">
        <div class="boxMiddle">
          <div class="box_left">
            <span class="InfoCata">{{item.Ltitle}}:</span><span class="InfoValue">{{item.Lvalue}}</span>
          </div>
          <div class="box_right">
            <span class="InfoCata">{{item.Rtitle}}:</span><span class="InfoValue">{{item.Rvalue}}</span>
          </div>
        </div>
      </li>
    </div>
    <div class="contentEnd">
      <span class="companyPara">公司简介</span>
      <div class="para"><p>{{message}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      InfoLists: [
        {id: 1, Ltitle:'名称', Lvalue:'',Rtitle:'编号', Rvalue: ''},
        {id: 2, Ltitle: '类型', Lvalue:'',Rtitle:'成立时间', Rvalue: ''},
        {id:3, Ltitle: '官网', Lvalue: '',Rtitle: '地址', Rvalue: ''},
        {id:4, Ltitle:'电话', Lvalue: '',Rtitle:'邮箱', Rvalue: ''},
        {id:5, Ltitle: '负责人账号', Lvalue: '',Rtitle:'负责人联系方式', Rvalue: ''}
        ],
      message:"这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介" +
        "这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介这里是公司简介" +
        "这里是公司简介这里是公司简介这里是公司简介这里是公司简介",
    }
  },
  computed: {
    calLines(){
      // return this.InfoLists.id.filter(this.InfoLists.id / 2);
    }
  },
  methods:{
    changeInfo () {
      console.log('111');
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
}
</style>
