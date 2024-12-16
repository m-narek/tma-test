<template>
  <button :class="['button', variant]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary',
    default: 'primary',
  },
});

defineEmits(['click']);
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  padding: 0 18px;
  color: white;
  text-align: center;
  border: none;
  border-radius: 15px;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  font-family: Movavi;
  -webkit-text-stroke: 0.5px black;
  width: max-content;
  height: 30px;
  transition: transform 0.1s ease-in-out;
}

.button.primary {
  background: linear-gradient(180deg, #f7cb40 0%, #ddad1c 100%);
  box-shadow:
    0px -3px 0px #ffeeba,
    inset 0px -3px 0px #7a5d00,
    0px 1px 1px rgba(0, 0, 0, 0.25);
}

.button.secondary {
  background: linear-gradient(180deg, #44a2e5 0%, #2e7ec2 100%);
  box-shadow:
    0px -3px 0px #bee3ff,
    inset 0px -3px 0px #155388,
    0px 1px 1px rgba(0, 0, 0, 0.25);
}

.button:active {
  transform: scale(0.95);
}

.button::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 6px;
  border-radius: 100%;
  top: -1px;
  right: 4px;
  transform: rotate(30deg);
}

.button.primary::after {
  background: #ffeeba;
}
.button.secondary::after {
  background: #bee3ff;
}
</style>
