<script lang="js" setup>
import { ref, computed, watch } from "vue";
import IconLocation from "@/components/IconLocation.vue";

const props = defineProps({
  current: Object,
  city: String,
});

const weekDay = computed(() =>
  new Date(props.current?.date).toLocaleDateString("ru-RU", {
    weekday: "long",
  }),
);

const date = computed(() =>
  new Date(props.current?.date).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
);

const condtition = computed(() => props.current?.day?.condition?.text);
const weatherCode = computed(() => props.current?.day?.condition?.code);
</script>

<template>
  <div class="weather-card">
    <div class="weather-card_top-element">
      <div class="weather-card_title">{{ weekDay }}</div>
      <div class="weather-card_date">{{ date }}</div>
      <div class="weather-card_city">
        <IconLocation />
        {{ city }}
      </div>
    </div>

    <div class="weather-card_bottom-element">
      <IconSun v-if="weatherCode <= 1003" :size="95" class="weather-icon" />
      <IconRain
        v-if="weatherCode >= 1006 && weatherCode <= 1063"
        :size="95"
        class="weather-icon"
      />
      <IconCloud v-if="weatherCode > 1063" :size="95" class="weather-icon" />
      <div class="weather-card_temperature">
        {{ current?.day?.avgtemp_c }} °C
      </div>
      <div class="weather-card_weather">{{ condtition }}</div>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  display: flex;
  flex-direction: column;

  position: relative;
  top: -30px;
  z-index: 0;
  padding: 30px;
  width: 493px;
  height: 666px;
  color: white;
  border-radius: 30px;
  opacity: 1;
  background-color: lightgrey;
  background: url("@/assets/images/bg-image.png") center/cover;
  overflow: hidden;
}
.weather-card::before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(136, 235, 239, 0.9),
    rgba(83, 91, 230, 0.9)
  );
}
.weather-card_top-element {
}
.weather-card_bottom-element {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.weather-icon {
  margin-left: 10px;
  margin-bottom: 20px;
}

.weather-card_title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 37px;
  text-transform: capitalize;
}
.weather-card_date {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
}
.weather-card_city {
  font-weight: 600;
  font-size: 20px;
}
.weather-card_temperature {
  font-size: 50px;
  font-weight: 600;
}
.weather-card_weather {
  font-size: 30px;
  font-weight: 600;
}
</style>
