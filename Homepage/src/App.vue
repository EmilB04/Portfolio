<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useThemeStore } from 'src/stores/theme';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.init();
  AOS.init({});
});
</script>
