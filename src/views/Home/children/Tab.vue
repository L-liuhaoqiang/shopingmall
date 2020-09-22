<template>
  <div class="tab">
    <van-tabs class="TABS" @click="currentType"  title-active-color="#ff8198" color="#ff8198" v-model="active">
      <van-tab title="流行"></van-tab>
      <van-tab title="精选"></van-tab>
      <van-tab title="普通"></van-tab>
    </van-tabs>
    <Goods :Goods="goods.pop.list" />
  </div>
</template>

<script>
import Goods from "../../../components/common/Goods";
export default {
  name: "Tab",
  data() {
    return {
      active: 0,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      CurrentType: "pop",
    };
  },
  components: {
    Goods,
  },
  created() {
    this.getHomeGood("pop");
  },
  methods: {
    currentType() {
      this.getHomeGood(this.CurrentType);
    },
    getHomeGood(type) {
      var page = this.active + 1;
      this.axios
        .get("/home/data", {
          params: {
            type,
            page,
          },
        })
        .then((res) => {
          this.goods.pop.list = res.data.data.list;
        });
    },
  },
};
</script>
<style scoped>
.TABS{
    margin-bottom: 5px;
}
</style>
