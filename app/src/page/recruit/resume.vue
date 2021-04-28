<template>
  <div class="contentWrapper">
    <!--    <div class="content">-->
<!--    <div class="AllShow sizeStyle">-->
<!--      <div class="ShowInfo" v-show="!IsShow">-->
<!--        <span class="infoName tag">XXX</span>-->
<!--        <span class="tag">男</span><i class="tagSplit"></i>-->
<!--        <span class="tag">杭州电子科技大学</span><i class="tagSplit"></i>-->
<!--        <span class="tag">杭州</span><i class="tagSplit"></i>-->
<!--        <span class="tag">23岁</span>-->
<!--      </div>-->
<!--      <img class="outImg" @click="IfShow" v-show="IsShow" :src="outUrl">-->
<!--    </div>-->
    <el-button @click="returnJobM" class="returnLast">返回</el-button>
    <div class="mainBox" v-for="item in resumeInfo" :key="item.id">
      <div class="preview">
        <div class="infoLabel">
          <p class="infoName">{{item.name}}</p>
          <span class="tag">{{item.gender}}</span><i class="tagSplit"></i>
          <span class="tag">{{item.graduated}}</span><i class="tagSplit"></i>
          <span class="tag">{{item.place}}</span><i class="tagSplit"></i>
          <span class="tag">{{item.year}}</span>
        </div>
        <div class="HeadBox">
          <img class="HeadImg">
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">求职意向</h3><hr class="modelSplit"></div>
      <div class="expect">
        <span class="tag">求职岗位：{{item.aimJob}}</span><i class="tagSplit"></i>
        <span class="tag">意向城市：{{item.aimPlace}}</span><i class="tagSplit"></i>
        <span class="tag">期待薪资：{{item.aimMoney}}</span><i class="tagSplit"></i>
        <span class="tag">求职意向：{{item.aimWilling}}</span>
      </div>
      <div class="gap"><h3 class="gapTitle">教育经历</h3><hr class="modelSplit"></div>
      <div class="education" v-for="item in EduExp" :key="item.index">
        <div class="midName">
          <div class="left"><span class="placeName">{{item.school}}</span><span>{{item.education}}</span><span>{{item.major}}</span></div>
          <div class="right"><span class="Time">{{item.time}}</span></div>
        </div>
        <div class="placeMark">
          <span>{{item.experience}}</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">工作经历</h3><hr class="modelSplit"></div>
      <div class="work" v-for="item in WorkExp" :key="item.index">
        <div class="midName">
          <div class="left"><span class="placeName">{{item.company}}</span><span>{{item.job}}</span></div>
          <div class="right"><span class="Time">{{item.time}}</span></div>
        </div>
        <div class="placeMark">
          <span>{{item.experience}}</span>
          <span>{{item.experience}}</span>
          <span>{{item.experience}}</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">项目经历</h3><hr class="modelSplit"></div>
      <div class="work" v-for="item in ProExp" v-bind:key="item.index">
        <div class="midName">
          <div class="left"><span class="placeName">{{item.role}}</span></div>
          <div class="right"><span class="Time">{{item.time}}</span></div>
        </div>
        <div class="placeMark">
          <span>{{item.intro}}</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">个人荣誉</h3><hr class="modelSplit"></div>
      <div class="honor" v-for="item in Honor" :key="item.index">
        <div class="placeMark">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
export default {
  data () {
    return {
      resumeInfo: [{
        id: '1',
        name: '张三',
        gender: '男',
        graduated: '杭州电子科技大学',
        education: '本科',
        year: '23岁',
        place: '杭州',
        aimWilling: '随时到岗',
        aimJob: '项目经理',
        aimPlace: '杭州',
        aimMoney: '11k~13k'
      }],
      EduExp: [{
        id: '1',
        school: '杭州电子科技大学',
        education: '本科',
        major: '计算机科学与技术',
        time: '2015.9-2019.6',
        experience: '绩点：4.4/5.0，成绩排名：前30%'
      },
      {
        id: '1',
        school: '浙江大学',
        education: '硕士',
        time: '2019.9-2022.6',
        major: '计算机科学与技术',
        experience: 'xxxxxxxxx'
      }],
      WorkExp: [{
        id: '1',
        company: '阿里巴巴',
        job: '前端工程师',
        time: '2018.8-2020.7',
        experience: '在原先单位的工作情况工作经历'
      }],
      ProExp: [{
        id: '1',
        role: '项目负责人',
        intro: '项目经历详情',
        time: '2019.5'
      }],
      Honor: ['个人荣誉', '个人荣誉']
    }
  },
  methods: {
    IfShow () {
      console.log(this.IsShow)
      if (this.IsShow === true) {
        this.IsShow = false
        console.log(this.IsShow)
      } else {
        this.isShow = true
        console.log(this.IsShow)
      }
    },
    returnJobM () {
      // alert('111')
      this.$router.push({path: '/recruit/job_m'})
    }
    // changeShow () {
    //   this.IsShow = true
    // }
  }
}
</script>

<style scoped>
  .returnLast{
    display: flex;
  }
  span{
    color: gray;
    opacity: 90%;
    padding-right: .4rem;
  }
  .contentWrapper{
    background-color: rgb(240, 240, 242);
    /*border: solid 4px #bbbbbb;*/
    /*height: 60rem;*/
    padding: 0 3rem 3rem;
  }
  .mainBox{
    background-color: white;
    margin: .5rem 3rem;
    padding: 4rem;
  }
  .preview{
    display: flex;
  }
  .infoLabel{
    flex: 1;
  }
  .tag{
    /*flex: 1;*/
    color: gray;
    opacity: 90%;
  }
  .tagSplit:before{
    content: '|';
    margin: .2rem;
  }
  .gap{
    margin-top: 2rem;
    display: flex;
    /*padding: 0 5rem;*/
  }
  h3.gapTitle{
    color: #6d4fc9;
    font-size: 1rem;
  }
  .modelSplit{
    flex: 1;
    height: .1rem;
    margin: 2rem 0rem 2rem 4rem;
    background-color: #987cb9;
  }
  .HeadBox{
    flex:1;
    display: flex;
    justify-content: space-between;
  }
  .HeadImg{
    background-image: url('../../../static/ai/头像.png');
    height: 5rem;
    width: 5rem;
    display: flex;
    margin-left: 5rem;
    background-size: cover;
  }
  .outImg{
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: flex-end;
  }
  .inImg{
    height: 5rem;
    width: 5rem;
    margin-left: 5rem;
  }
  .expect{
    display: flex;
    justify-content: space-between;
  }
  .midName{
    display: flex;
    justify-content: space-between;
  }
  .placeName{
    /*flex: 1;*/
  }
  .Time{
    /*flex: 1;*/
  }
  .placeName{
    color: #2c3e50;
    font-size: 1rem;
    font-weight: bolder;
    padding-right: .3rem;
  }
  .placeMark{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /*justify-content: space-between;*/
  }
</style>
