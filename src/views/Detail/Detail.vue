<template>
  <div id="detail">
    <div class="dsnone">
      <nav-tab ref="nav" @Navindex="navtitleindex" />
      <detail-swiper :topimage="swiperimg" />
      <detail-baseInfo :Goods="goodsInfo" />
      <detail-info :shop="shopInfo" />
      <deatail-imageInfo @imgLoad="LoadImage" :detailInfo="detailInfo" />
      <detail-params-info ref="params" :paramInfo="itemParams" />
      <DetailCommentInfo ref="comment" :comment-info="commentInfo" />
      <GoodsList ref="recommend" :goods="recommends" />
      <isAlert :isshow="Deishow" :message="ismessage" />
    </div>
    <detail-bottomBar @Cartlist="ClickCart" />
  </div>
</template>

<script>
import NavTab from "./children/DetailNavTab";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailInfo from "./children/DetailInfo";
import DeatailImageInfo from "./children/DeatailImageInfo";
import DetailParamsInfo from "./children/DetailParamsInfo";
import DetailCommentInfo from "./children/DetailCommentInfo";
import GoodsList from "../../components/common/GoodsList";
import DetailBottomBar from "./children/DetailBottomBar";
import isAlert from "../../components/common/toast";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      swiperimg: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [], //Nav点击位置
      ismessage: "",
      Deishow: false,
      currentIndex: 0,
    };
  },
  components: {
    NavTab,
    DetailSwiper,
    DetailBaseInfo,
    DetailInfo,
    DeatailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    isAlert,
  },
  methods: {
    ClickCart() {
      const product = {};
      product.image = this.swiperimg[0];
      product.title = this.goodsInfo.itemInfo.title;
      product.desc = this.goodsInfo.itemInfo.desc;
      product.price = this.goodsInfo.itemInfo.lowNowPrice;
      product.iid = this.iid;
      this.$store.dispatch("increment", product).then((res) => {
        this.ismessage = res;
        this.Deishow = true;
        setTimeout(() => {
          this.ismessage = "";
          this.Deishow = false;
        }, 1000);
      });
    },
    LoadImage() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    navtitleindex(index) {
      window.scrollTo(0, this.themeTopYs[index] - 30);
    },
  },
  created() {
    this.iid = this.$route.query.iid;
    this.axios
      .get("/detail", {
        params: {
          iid: this.iid,
        },
      })
      .then((res) => {
        //取出轮播图数据
        this.swiperimg = res.data.result.itemInfo.topImages;

        //创建商品的对象
        this.goodsInfo = res.data.result;
        //取出店铺的信息
        this.shopInfo = res.data.result.shopInfo;
        //去除详情的信息
        this.detailInfo = res.data.result.detailInfo;
        this.itemParams = res.data.result.itemParams;
        if (res.data.result.rate.cRate !== 0) {
          this.commentInfo = res.data.result.rate.list[0];
        }
      });
    this.axios.get("/recommend").then((res) => {
      this.recommends = res.data.data.list;
      // console.log(res);
    });
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 1000;
}
.dsnone {
  background: #fff;
}
</style>
