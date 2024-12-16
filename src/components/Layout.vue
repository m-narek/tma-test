<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
</script>

<style scoped>
.wrapper {
  background: radial-gradient(circle, #41aee7 0%, #054ba6 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
