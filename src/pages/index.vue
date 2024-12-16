<template>
  <div class="home">
    <div class="home-slides">
      <Slide background="slide-1.png">
        <Button>More Bonuses</Button>
      </Slide>
      <Slide background="slide-2.png">
        <div class="slides-actions">
          <Button variant="secondary">Invite</Button>
          <Button variant="secondary"><img src="../assets/icons/share.svg" alt="" /></Button>
        </div>
      </Slide>
    </div>
    <div class="home-info">
      <div class="info-title">List of your friends</div>
      <Button>
        <div class="info-btn">
          Claim
          <img src="../assets/icons/coin.svg" alt="" />
          <span>12.5k</span>
        </div>
      </Button>
    </div>
    <UserList />
  </div>
</template>

<script lang="ts" setup>
import Slide from '@/components/home/Slide.vue';
import UserList from '@/components/home/UserList.vue';
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-slides {
  display: grid;
  max-width: 338px;
  width: 100%;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}
.slides-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.home-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 0 8px;
  align-items: center;
}

.info-title {
  font-family: Lato;
  color: #fff;
  text-shadow: 0px 1px 1px #000000;
  font-size: 19px;
}
.info-btn {
  display: flex;
  align-items: center;
}
.info-btn > img {
  margin: 0 4px 0 6px;
}
</style>
