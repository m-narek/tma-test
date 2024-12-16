<template>
  <div class="slide">
    <img class="slide__img" :src="getImageURL(background)" alt="" />
    <div class="slide__actions">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { getImageURL } from '@/utils/getImageURL';

defineProps({
  background: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.slide {
  height: 115px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid #7dd0ff;
  box-shadow: 0 1px 10px rgba(125, 208, 255, 0.5);
}
.slide__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.slide__actions {
  padding-bottom: 4px;
}
</style>
