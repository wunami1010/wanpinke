<template>
  <div class="content">
    <div class="menuList" :class="'level'+menu.level" v-for="menu in menus" :key="menu.id">
      <div v-if="menu.type==='link'" class="link">
        <router-link :to='menu.url' @click.native="toggle(menu)">
          {{menu.name}}
        </router-link>
      </div>
      <div v-if="menu.type==='button'">
        <div class="ebtn" :class="{select:menu.isSelected, expand:menu.isExpand}" @click="toggle(menu)">
          {{menu.name}}
          <div class="icon"></div>
        </div>
        <transition name="fade">
          <div class="sub" v-show="menu.isExpand" v-if="menu.submenus">
            <tree-view-item :menus="menu.submenus"></tree-view-item>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeViewItem',
  data () {
    return {
    }
  },
  props: ['menus'],
  created () {
    this.$store.commit('firstInit', {url: this.$route.path})
  },
  methods: {
    toggle (menu) {
      this.$store.commit('findParents', {menu})
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
.content{
  margin: 0;
  padding: 0;
  line-height: 100px;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
}
.ebtn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8.75rem;
  height: 6rem;
  padding: 0 3.75rem;
  font-size: 0.9rem;
  border-right: 1px solid rgb(5, 5, 77);
}
.link{
  width: 8.75rem;
  height: 5rem;
  line-height: 5rem;
  padding: 0 2.5rem;
  font-size: 0.8rem;
}
.link:hover,
.ebtn:hover{
  background-color: rgb(105, 107, 151);
  cursor: pointer;
}
.icon{
  background-image: url('../../static/ai/ai-arrow-down.png');
  width: 20px;
  height: 20px;
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
