<script lang="js" setup>
import { computed } from "vue";

const { weatherCode, temp, date, isActive } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  isActive: Boolean,
});

const iconColor = computed(() => (isActive ? "black" : "white"));
</script>

<template>
  <button class="week-day" :class="{ active: isActive }">
    <IconSun v-if="weatherCode <= 1003" :color="iconColor" />
    <IconRain
      v-if="weatherCode >= 1006 && weatherCode <= 1063"
      :color="iconColor"
    />
    <IconCloud v-if="weatherCode > 1063" :color="iconColor" />
    <div class="week-d">
      {{ date.toLocaleDateString("ru-Ru", { weekday: "short" }) }}
    </div>
    <div class="week-t">{{ temp }} °C</div>
  </button>
</template>

<style lang="css" scoped>
.week-day {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 100%;
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #272e37;
  transition: ease 200ms background-color;
  cursor: pointer;
}
.week-day:not(.active):hover,
.week-day:not(.active):active {
  background-color: #3a434f;
}
.week-day.active {
  background-color: white;
  color: black;
}
.week-i {
  margin-bottom: 10px;
}
.week-d {
  font-weight: 400;
  font-size: 20px;
}

.week-t {
  font-weight: 700;
  font-size: 20px;
}
</style>
