<template>
  <div class="detailCart">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button
        type="warning"
        @click="clickCart"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "DEtailCart",
  data() {
    return {};
  },
  methods: {
    clickCart() {
      this.$emit("Cartlist");
    },
  },
};
</script>
<style scoped>
</style>
