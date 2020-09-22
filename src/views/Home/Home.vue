<template>
  <div class="home">
    <NavBar class="bgNav">
      <template v-slot:center>
        <span>情情的小商店</span>
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banner" :key="index">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
    <!-- Recommend  -->
    <Recommend :recommend="recommend"></Recommend>
    <FeatureView />
    <Tab />
  </div>
</template>


<script>
import NavBar from "../../components/common/navbar";
import Recommend from "./children/recommend";
import FeatureView from "./children/FeatureView";
import Tab from "./children/Tab";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    Recommend,
    FeatureView,
    Tab,
  },
  created() {
    this.Banner();
  },
  methods: {
    Banner() {
      this.axios.get("/home/multidata").then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
  },
};
</script>
<style scoped>
.bgNav {
  background: pink;
}
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  background-color: #39a9ed;
  height: 200px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 200px;
}
</style>
