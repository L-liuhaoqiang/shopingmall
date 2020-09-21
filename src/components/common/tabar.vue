<template>
  <div class="Table">
    <van-tabbar v-model="active" >
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/Cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/My" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      active: 0,
    };
  },
  methods:{
      
  }
};
</script>
<style scoped>
</style>
