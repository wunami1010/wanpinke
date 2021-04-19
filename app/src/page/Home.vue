<template>
  <div class="box">
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
        <div class="header_right">头像</div>
      </div>
      <div class="contain">
        <router-view/>
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
.box{
  display: flex;
}
.outer{
  width: 100%;
  margin-left: 12rem;
}
.header{
  width: 100%;
  height: 9vh;
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
  width: 20rem;
  align-self: flex-end;
  float: right;
}
.side{
  height: 100vh;
  width: 12rem;
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
