<script lang="js" setup>
import { ref, inject } from "vue";
import DayCard from "@/components/Weather/DayCard.vue";
import { activeIndexProvide } from "../../constants";

defineProps(["forecast"]);
const activeIndex = inject(activeIndexProvide);
</script>

<template>
  <div class="week">
    <DayCard
      v-for="(item, idx) in forecast"
      :weather-code="item.day.condition.code"
      :temp="item.day.avgtemp_c"
      :date="new Date(item.date)"
      :is-active="activeIndex == idx"
      @click="() => (activeIndex = idx)"
    />
  </div>
</template>

<style lang="css" scoped>
.week {
  display: flex;
  gap: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
