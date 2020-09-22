<template>
  <div class="Goods">
    <div class="goods" v-for="(Goods,index) in Goods" :key="index">
      <img :src="Goods.show.img" alt />
      <div class="goods-info">
        <p>{{Goods.title}}</p>
        <span class="price">{{Goods.price}}</span>
        <span class="collect">{{Goods.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: ["Goods"],
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
.Goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}
.goods {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../assets/collect.svg") 0 0/14px 14px;
}
</style>
