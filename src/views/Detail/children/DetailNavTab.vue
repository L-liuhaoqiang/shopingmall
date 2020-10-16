<template>
  <div class="DetailNavTab">
    <div class="Fixe">
      <div @click="clickimg" class="leftBack">
        <img src="../../../assets/back.svg" alt="" />
      </div>
      <div class="Words">
        <div
          class="word"
          v-for="(title, index) in title"
          :key="index"
          :class="{ active: titActive === index }"
          @click="ClickActive(index)"
        >
          <p>{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailNavTab",
  data() {
    return {
      active: 2,
      title: ["商品", "参数", "评论", "推荐"],
      titActive: 0,
    };
  },
  methods: {
    ClickActive(index) {
      this.titActive = index;
      this.$emit("Navindex", index);
    },
    clickimg() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.DetailNavTab {
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  font-size: 14px;
  height: 44px;
  width: 100%;
}
.DetailNavTab .Fixe {
  position: relative;
  width: 100%;
  height: 100%;
}
.DetailNavTab .Fixe .leftBack {
  position: absolute;
  left: 8%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}
.DetailNavTab .Fixe .leftBack img {
  width: 20px;
  height: 20px;
}
.Words {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  display: -webkit-flex;
  display: flex;
}
.word {
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
}
.active {
  color: red;
}
</style>
