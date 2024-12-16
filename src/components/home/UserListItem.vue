<template>
  <div class="list-item">
    <div class="left-side">
      <img class="user-img" :src="getImageURL(img)" alt="" />
      <span class="user-name">{{ name }}</span>
    </div>
    <div class="right-side">{{ level }}</div>
  </div>
</template>
<script setup lang="ts">
import { getImageURL } from '@/utils/getImageURL';

interface Props {
  img: string;
  name: string;
  level: string;
}

defineProps<Props>();
</script>
<style scoped>
.list-item {
  font-family: Lato;
  background: radial-gradient(ellipse farthest-corner at center, #3081b4 0%, #19488c 75%);
  height: 42px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5px;
  position: relative;
  border-radius: 12px;
}

.list-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: radial-gradient(ellipse at center, #ffffff -36%, #1c4f91 60%);

  border-radius: 12px;
}
.left-side {
  display: flex;
  align-items: center;
}
.user-img {
  width: 30px;
  margin-right: 5px;
}
.user-name {
  color: white;
  font-size: 10px;
}
.right-side {
  max-width: 90px;
  width: 100%;
  color: white;
  font-size: 16px;
}
</style>
