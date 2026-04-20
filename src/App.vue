<script setup>
import { ref, provide, watch, onMounted } from "vue";
import PanelLeft from "@/components/PanelLeft.vue";
import PanelRight from "@/components/PanelRight.vue";
// import Loader from "@/components/Loader.vue";
import { BASE_URL, cityProvide, activeIndexProvide } from "./constants";

const data = ref();
const error = ref();
const activeIndex = ref(0);
const current = ref();
// const isLoading = ref(false);
const city = ref("Москва");
provide(cityProvide, city);
provide(activeIndexProvide, activeIndex);

watch(city, () => getCity(city.value));
watch(activeIndex, (i) => (current.value = data.value.forecast.forecastday[i]));

onMounted(() => getCity(city.value));

async function getCity(city) {
  error.value = "";

  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "673614efc16d4e6aaaa154714261204",
    days: 3,
  });
  const res = await fetch(`${BASE_URL}/forecast.json?${params.toString()}`);
  const response = await res.json();

  if (res.status != 200) {
    error.value = response;
    return;
  }

  data.value = response;
  current.value = data.value.forecast.forecastday[activeIndex.value];
}
</script>

<template>
  <div class="wrapper">
    <div class="dashboard">
      <PanelLeft :current :city />
      <PanelRight
        :error
        :data
        :active-index="activeIndex"
        @select-index="(i) => (activeIndex = i)"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.dashboard {
  display: flex;
  margin: auto;
  width: 944px;
  height: 623px;
  border-radius: 25px;
  background-color: #222831;
}
</style>
