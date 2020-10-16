<template>
  <div class="bottomsubmit">
    <van-submit-bar :price="comprice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "bottomsbt",
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    ...mapGetters(["getcartlist"]),

    comprice() {
      return this.getcartlist
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count * 100;
        }, 0);
    },
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style scoped>
.van-submit-bar {
  bottom: 49px;
}
</style>
