<script setup>
import Time from './components/Time.vue'
</script>

<template>
  <Time :showSavedTimes="true" />
</template>

<style>
@import './assets/base.css';

#app {
  margin: 100px auto;
}

.green {
  color: rgb(107, 44, 255);
}
</style>
