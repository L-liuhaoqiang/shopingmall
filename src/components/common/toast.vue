<template>
  <div class="toast" v-show="isshow">
    <div class="DAlert">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: ["message", "isshow"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.DAlert {
  border-radius: 4px;
  text-align: center;
  font-family: fantasy;
  font-size: 14px;
  width: 120px;
  line-height: 30px;
  height: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
}
</style>
