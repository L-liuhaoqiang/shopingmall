<template>
  <div class="bottomsubmit">
    <van-submit-bar
      :price="comprice"
      :button-text="checkLength"
      @submit="onSubmit"
      class="ee"
    >
      <div class="check-content">
        <check-button
          :is-checked="isChecked"
          @click.native="checkClick"
          class="check-button"
        />
        <span>全选</span>
      </div>
    </van-submit-bar>
  </div>
</template>

<script>
import CheckButton from "../../../components/common/CheckBotton";
import { mapGetters } from "vuex";
export default {
  name: "bottomsbt",
  data() {
    return {};
  },
  components: {
    CheckButton,
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
    checkLength() {
      return (
        "提交订单" +
        "  (" +
        this.getcartlist.filter((item) => item.checked).length +
        ")"
      );
    },
    //是否全选
    isChecked() {
      if (this.getcartlist.length === 0) return false;
      return !this.getcartlist.find((item) => !item.checked);
    },
  },
  methods: {
    onSubmit() {},
    checkClick() {
      if (this.isChecked) {
        this.getcartlist.forEach((item) => (item.checked = false));
      } else {
        this.getcartlist.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>
<style scoped>
.van-submit-bar {
  bottom: 49px;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 70px;
}
.check-button {
  height: 18px;
  width: 18px;
  line-height: 20px;
  margin-right: 5px;
}
</style>
