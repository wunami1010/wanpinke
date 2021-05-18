<template>
  <div class="mess">
     <slot>提示</slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.mess{
  padding: 0 3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  color:white;
  border-radius: 0.6rem;
  background-color: rgb(119, 94, 161);
}
</style>
