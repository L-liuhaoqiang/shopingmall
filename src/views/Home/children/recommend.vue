<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(rec,index) in recommend" :key="index">
      <a :href="rec.link">
        <img :src="rec.image" alt />
        <p>{{rec.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommen",
  props: ["recommend"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  color: #666;
}
.recommend-item p{
  color: #666;
}
.recommend-item img {
  margin-bottom: 5px;
  width: 70px;
  height: 70px;
}
</style>
