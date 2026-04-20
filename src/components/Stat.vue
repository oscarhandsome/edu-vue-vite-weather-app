<script setup>
const { name = "Not extist", value } = defineProps({
  name: String,
  value: String,
});
</script>

<template>
  <div class="weather-info">
    <div class="weather-info_name">{{ name }}</div>
    <div class="weather-info_value">{{ value }}</div>
  </div>
</template>

<style lang="css" scoped>
.weather-info {
  display: flex;
  justify-content: space-between;
  font-size: 25px;
}
.weather-info_name {
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.weather-info_value {
  font-weight: 500;
}
</style>
