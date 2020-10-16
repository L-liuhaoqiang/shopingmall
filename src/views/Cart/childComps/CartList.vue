<template>
  <div class="cart-list">
      <CartListItem v-for="(item,index) in getcartlist" :item-info="item" :key="index"></CartListItem>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "cart-list",
  data() {
    return {};
  },
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["getcartlist"])
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  overflow: hidden;
}
</style>
