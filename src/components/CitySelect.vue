<script setup>
import { ref, inject } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

import { cityProvide } from "../constants";

const emit = defineEmits(["citySelect"]);

const visibility = ref(false);

const city = inject(cityProvide);
const inputValue = ref(city.value);

const select = () => {
  // emit("citySelect", city.value);
  visibility.value = !visibility.value;
  city.value = inputValue.value;
};
</script>

<template>
  <div v-if="visibility" class="bottom-week">
    <BaseInput v-focus v-model="inputValue" @keyup.enter="select()"></BaseInput>
    <BaseButton @click="select()">
      <IconLocation />
      Сохранить
    </BaseButton>
  </div>

  <BaseButton v-else @click="visibility = !visibility">
    <IconLocation />
    Изменить город
  </BaseButton>
</template>

<style lang="css">
.bottom-week {
  display: flex;
}
</style>
