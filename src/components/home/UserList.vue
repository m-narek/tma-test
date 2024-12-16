<template>
  <div class="content">
    <div class="user-list">
      <template v-for="user in userList" :key="`user_${user.id}`">
        <userListItem :img="user.img" :name="user.name" :level="user.level"></userListItem>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import userListItem from './UserListItem.vue';

const userList = [
  { id: 0, img: 'user-img-default.png', name: 'Diana', level: '33 lvl' },
  { id: 1, img: 'user-img-default.png', name: 'Anastasia V', level: '1 lvl' },
  { id: 2, img: 'user-img-default.png', name: 'Dmitro', level: '25 lvl' },
  { id: 3, img: 'user-img-default.png', name: 'Nikita', level: '1 lvl' },
  { id: 3, img: 'user-img-default.png', name: 'Nikita', level: '1 lvl' },
  { id: 3, img: 'user-img-default.png', name: 'Nikita', level: '1 lvl' },
  { id: 3, img: 'user-img-default.png', name: 'Nikita', level: '1 lvl' },
  { id: 4, img: 'user-img-default.png', name: 'Nikita', level: '1 lvl' },
  { id: 5, img: 'user-img-default.png', name: 'Nikita', level: '90 lvl' },
];
</script>

<style scoped>
.content {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 4px 2px inset;
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: radial-gradient(ellipse farthest-corner at center, #3081b4 0%, #19488c 85%);
}
.user-list {
  margin-top: 5px;
  padding: 10px 0px 15px 0px;
  height: calc(100vh - 320px);
  border-radius: 12px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
