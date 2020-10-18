<template>
  <div class="checkbotton" :class="{ check: isChecked }">
    <img src="../../assets/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "checkbotton",
  data() {
    return {};
  },
  props: ["isChecked"],
};
</script>
<style scoped>
.checkbotton {
  position: relative;
  border-radius: 50%;
  border: 1px solid #aaa;
  width: 18px;
  height: 18px;
}

.check {
  border-color: red;
  background: red;
}
</style>
