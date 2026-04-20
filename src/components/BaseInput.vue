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

input:placeholder {
  color: #3f4958;
}
input::-webkit-input-placeholder {
  background-color: #3f4958;
} /* Chrome/Safari/Edge */
input::-moz-placeholder {
  background-color: #3f4958;
  opacity: 1;
} /* Firefox */
input:-ms-input-placeholder {
  background-color: #3f4958;
} /* Internet Explorer 10-11 */

input:focus {
  background-color: #3a434f;
}

input:hover {
  background-color: #637081;
}
</style>
