<script lang="js" setup>
defineProps({
  error: String,
});
</script>

<template>
  <Transition name="fade">
    <div class="notify" v-if="error">
      {{ error }}
    </div>
  </Transition>
</template>

<style scoped>
.notify {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  background-color: #272e37;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 300ms ease-in;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transform: opzcity 300ms ease-out;
}
</style>
