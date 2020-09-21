<template>
  <div id="app">
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>-->
    <router-view />
    <Tabar></Tabar>
  </div>
</template>

<script>
import Tabar from "./components/common/tabar";
export default {
  name: "app",
  components: {
    Tabar,
  },
};
</script>

<style>
@import "assets/css/normalize.css";
* {
  margin: 0;
  padding: 0;
}
</style>
