<template>
  <div class="checkbotton" :class="{check : isChecked}">
    <img src="../../assets/tick.svg" alt />
  </div>
</template>

<script>

export default {
  name: "checkbotton",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      defalut: false
    }
  }
};
</script>
<style scoped>
.checkbotton {
  
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check {
  border-color: red; 
  background: red;
}
</style>
