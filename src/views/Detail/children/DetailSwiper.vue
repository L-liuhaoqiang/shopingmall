<template>
  <div class="Deswiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(siwperimg, index) in topimage" :key="index"
        ><img :src="siwperimg" alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Deswiper",
  props: ["topimage"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.my-swipe{
  height: 300px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  height: 300px;
}
.my-swipe .van-swipe-item img {
  width: 100%;

  overflow: hidden;
}
</style>
