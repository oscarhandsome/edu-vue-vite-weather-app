<script setup>
const model = defineModel({
  type: String,
  required: true,
});
</script>

<template>
  <input type="text" placeholder="Enter city name" v-model.lazy="model" />
</template>

<style lang="css">
input {
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-weight: 400;
  font-size: 18px;
  background-color: #272e37;
  border-radius: 10px;
  transition: ease-in 200ms background-color;
  outline: none;
}

input:focus {
  background-color: var(--color-card-bg);
}
input:hover {
  background-color: var(--color-card-bg-hover);
}
</style>
