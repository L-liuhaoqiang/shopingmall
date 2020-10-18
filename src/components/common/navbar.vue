<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  font-weight: bold;
  color: white;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
 
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
