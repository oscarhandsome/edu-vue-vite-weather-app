<script setup>
// defineOptions({
//   inheritAttrs: false,
// });
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  border-radius: 15px;
  background-image: var(--gradient);
  transition: ease 200ms background-image;
}
.btn:hover,
.btn:active {
  background-image: var(--gradient-inverted);
}
</style>
