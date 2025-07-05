<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    delay: 200,
    duration: 400,
    once: true,
  });
});
</script>
