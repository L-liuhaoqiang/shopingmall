<template>
  <div class="Cart">
    <navbar class="bgNav">
      <template v-slot:center>
        <span>购物车({{ getcount }})</span>
      </template>
    </navbar>
    <cartList />
    <bottomsibmitbar />
  </div>
</template>

<script>
import navbar from "../../components/common/navbar";
import bottomsibmitbar from "./childComps/bottomsibmitbar";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getcount"]),
  },
  components: {
    bottomsibmitbar,
    navbar,
    CartList
  },
};
</script>
<style scoped>
.Cart{
  overflow: hidden;
}
.ww {
  overflow: hidden;
  height: 200px;
  width: 100%;
  background: red;
}
.bgNav {
  background: pink;
}
</style>
