<template>
  <div class="goods">
    <GoodsListItem
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "goods",
  props:['goods'],
  components: {
    GoodsListItem,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

