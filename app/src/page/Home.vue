<template>
  <div class="bbox">
    <div class="side">
      <div class="tophead">
        <img class="logo" src="../../static/ai/logo.png">
        <div class="headername">Onepick 万品客</div>
      </div>
      <tree-view-item :menus="menus"></tree-view-item>
    </div>
    <div class="outer">
      <div class="header">
        <div class="header_left">
        </div>
        <div class="header_right"><img src="../../static/ai/default_scu.jpg"></div>
      </div>
      <div class="contain">
        <div class="Bcontent">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeViewItem from '../components/TreeViewItem'
export default {
  data () {
    return {
      menus: this.$store.state.menusModule.menus
    }
  },
  components: {
    TreeViewItem
  }
}
</script>

<style scoped>
.bbox{
  display: flex;
  position: relative;
  overflow: hidden;
  overflow-y:auto;
}
.outer{
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  margin-left: 12rem;
}
.Bcontent{
  padding: 0;
  margin: 2rem;
}
.contain{
  min-width: 76rem;
  max-width: 88rem;
  padding-bottom: 2rem;
}
.header{
  width: 100%;
  height: 9vh;
  min-width: 76rem;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid gray;
}
.headername{
  color: white;
  font-weight: bold;
}
.header_left{
  font-size: 2rem;
  width: 20rem;
}
.header_right{
  width: 10rem;
  float: right;
  display: flex;
  align-items: center;
}
.header_right img{
  height: 2rem;
  width: 2rem;
}
.side{
  height: 100vh;
  width: 12rem;
  z-index: 1;
  position: fixed;
  overflow: hidden;
  color: white;
  background-color: rgb(29, 30, 36);
  overflow-y:auto;
  overflow-x:hidden;
}
.side::-webkit-scrollbar{
  display: none;
}
.tophead{
  margin-top: 2rem;
  padding: 0 1.2rem;
}
.logo{
  width: 3rem;
  height: 3rem;
}
.headername{
  height: 6rem;
  line-height: 6rem;
}
</style>
