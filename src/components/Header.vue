<template>
  <div class="header">
    <h1 class="header__title">Invite Friends!</h1>
    <span class="header__subtitle">You and your friend will receive bonuses!</span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 0;
}
.header__title {
  font-family: Movavi;
  color: #facb46;
  font-size: 24px;
  -webkit-text-stroke: 0.5px black;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.46);
}
.header__subtitle {
  font-family: Lato;
  color: #fff;
  text-shadow: 0px 1px 1px #000000;
  font-size: 17px;
}
</style>
