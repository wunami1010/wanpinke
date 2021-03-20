<template>
  <div class="box">
    <div class="side">
      <div class="tophead">
        <div class="logo"></div>
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
}
.header{
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0.2rem 0.2rem 0.5rem rgb(194, 186, 186);
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
  overflow: hidden;
  width: 16.25rem;
  color: white;
  background-color: rgb(29, 30, 36);
  box-shadow: 2px 2px rgb(170, 170, 179);
}
.tophead{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1.2rem;
}
.logo{
  background-image: url('../../static/ai/logo.png');
  width: 3rem;
  height: 3rem;
  background-size: cover;
}
.headername{
  height: 6rem;
  line-height: 6rem;
}
</style>
