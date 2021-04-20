<template>
  <div class="contentWrapper">
    <!--    <div class="content">-->
    <div class="mainBox">
      <div class="preview">
        <div class="infoLabel">
          <p class="infoName">XXX</p>
          <span class="tag">男</span><i class="tagSplit"></i>
          <span class="tag">杭州电子科技大学</span><i class="tagSplit"></i>
          <span class="tag">杭州</span><i class="tagSplit"></i>
          <span class="tag">23岁</span>
        </div>
        <div class="HeadBox">
          <img class="HeadImg">
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">求职意向</h3><hr class="modelSplit"></div>
      <div class="expect">
        <span class="tag">求职岗位：项目经理</span><i class="tagSplit"></i>
        <span class="tag">意向城市：杭州</span><i class="tagSplit"></i>
        <span class="tag">期待薪资：11k~13k</span><i class="tagSplit"></i>
        <span class="tag">求职意向：随时到岗</span>
      </div>
      <div class="gap"><h3 class="gapTitle">教育经历</h3><hr class="modelSplit"></div>
      <div class="education">
        <div class="midName">
          <div class="left"><span class="placeName">杭州电子科技大学</span><span>本科</span><span>计算机科学与技术专业</span></div>
          <div class="right"><span class="Time">2014.9-2018.6</span></div>
        </div>
        <div class="placeMark">
          <span>绩点：4.4/5.0，成绩排名：前30%</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">工作经历</h3><hr class="modelSplit"></div>
      <div class="work">
        <div class="midName">
          <div class="left"><span class="placeName">阿里巴巴集团</span><span>前端工程师</span></div>
          <div class="right"><span class="Time">2018.8-2020.7</span></div>
        </div>
        <div class="placeMark">
          <span>在原先单位的工作情况工作经历</span>
          <span>在原先单位的工作情况工作经历</span>
          <span>在原先单位的工作情况工作经历</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">项目经历</h3><hr class="modelSplit"></div>
      <div class="work">
        <div class="midName">
          <div class="left"><span class="placeName">xx项目负责人</span></div>
          <div class="right"><span class="Time">2019.5</span></div>
        </div>
        <div class="placeMark">
          <span>项目经历详述</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">个人荣誉</h3><hr class="modelSplit"></div>
      <div class="honor">
        <div class="placeMark">
          <span>个人荣誉获得情况</span>
          <span>个人荣誉获得情况</span>
          <span>个人荣誉获得情况</span>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
export default {
}
</script>

<style scoped>
  span{
    color: gray;
    opacity: 90%;
    padding-right: .4rem;
  }
  .contentWrapper{
    background-color: rgb(240, 240, 242);
    border: solid 4px #bbbbbb;
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
  }
  .HeadImg{
    background-image: url('../../../static/ai/头像.png');
    height: 5rem;
    width: 5rem;
    background-size: cover;
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
<template>
  <div class="contentWrapper">
    <!--    <div class="content">-->
    <div class="mainBox">
      <div class="preview">
        <div class="infoLabel">
          <p class="infoName">XXX</p>
          <span class="tag">男</span><i class="tagSplit"></i>
          <span class="tag">杭州电子科技大学</span><i class="tagSplit"></i>
          <span class="tag">杭州</span><i class="tagSplit"></i>
          <span class="tag">23岁</span>
        </div>
        <div class="HeadBox">
          <img class="HeadImg">
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">求职意向</h3><hr class="modelSplit"></div>
      <div class="expect">
        <span class="tag">求职岗位：项目经理</span><i class="tagSplit"></i>
        <span class="tag">意向城市：杭州</span><i class="tagSplit"></i>
        <span class="tag">期待薪资：11k~13k</span><i class="tagSplit"></i>
        <span class="tag">求职意向：随时到岗</span>
      </div>
      <div class="gap"><h3 class="gapTitle">教育经历</h3><hr class="modelSplit"></div>
      <div class="education">
        <div class="midName">
          <div class="left"><span class="placeName">杭州电子科技大学</span><span>本科</span><span>计算机科学与技术专业</span></div>
          <div class="right"><span class="Time">2014.9-2018.6</span></div>
        </div>
        <div class="placeMark">
          <span>绩点：4.4/5.0，成绩排名：前30%</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">工作经历</h3><hr class="modelSplit"></div>
      <div class="work">
        <div class="midName">
          <div class="left"><span class="placeName">阿里巴巴集团</span><span>前端工程师</span></div>
          <div class="right"><span class="Time">2018.8-2020.7</span></div>
        </div>
        <div class="placeMark">
          <span>在原先单位的工作情况工作经历</span>
          <span>在原先单位的工作情况工作经历</span>
          <span>在原先单位的工作情况工作经历</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">项目经历</h3><hr class="modelSplit"></div>
      <div class="work">
        <div class="midName">
          <div class="left"><span class="placeName">xx项目负责人</span></div>
          <div class="right"><span class="Time">2019.5</span></div>
        </div>
        <div class="placeMark">
          <span>项目经历详述</span>
        </div>
      </div>
      <div class="gap"><h3 class="gapTitle">个人荣誉</h3><hr class="modelSplit"></div>
      <div class="honor">
        <div class="placeMark">
          <span>个人荣誉获得情况</span>
          <span>个人荣誉获得情况</span>
          <span>个人荣誉获得情况</span>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
    export default {
    }
</script>

<style scoped>
  span{
    color: gray;
    opacity: 90%;
    padding-right: .4rem;
  }
  .contentWrapper{
    background-color: rgb(240, 240, 242);
    border: solid 4px #bbbbbb;
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
  }
  .HeadImg{
    background-image: url('../../../static/ai/头像.png');
    height: 5rem;
    width: 5rem;
    background-size: cover;
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
