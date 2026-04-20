<script setup>
import { ref, computed } from "vue";
import Stat from "@/components/Stat.vue";
import CitySelect from "@/components/CitySelect.vue";
import BaseNotification from "@/components/BaseNotification.vue";
import WeatherWeek from "@/components/Weather/Index.vue";
import { errorMap } from "../constants";

const { error, data, activeIndex } = defineProps({
  error: Object | String,
  data: Object | String,
  activeIndex: Number,
});

const emit = defineEmits(["select-index"]);

const statData = computed(() => [
  {
    name: "Влажность",
    value: data.forecast.forecastday[activeIndex].day.avghumidity + " %",
  },
  {
    name: "Вероятность дождя",
    value:
      data.forecast.forecastday[activeIndex].day.daily_chance_of_rain + " %",
  },
  {
    name: "Ветер",
    value: data.forecast.forecastday[activeIndex].day.maxwind_kph + " м/ч",
  },
]);
const displayMap = computed(() => errorMap.get(error?.error?.code));
const forecast = computed(() => data.forecast.forecastday);
</script>

<template>
  <div class="weather-info-stat">
    <BaseNotification v-if="error" :error="displayMap" />

    <div v-if="data">
      <Stat v-for="item in statData" :key="item.label" v-bind="item" />
      <WeatherWeek :forecast="forecast" />
    </div>

    <CitySelect />
  </div>
</template>

<style lang="css" scoped>
.weather-info-stat {
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  padding: 40px;
  width: 50%;
}
</style>
