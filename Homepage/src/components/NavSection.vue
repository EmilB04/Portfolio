<template>
  <nav class="flex justify-between">
    <div class="justify-start">
      <q-btn flat label="Om" @click="scrollToSection('.about-section')" />
      <q-btn flat label="Studie" @click="scrollToSection('.timeline-section')" />
      <q-btn flat label="Prosjekter" @click="scrollToSection('.projects-section')" />
      <q-btn flat label="Kunnskap" @click="scrollToSection('.skills-section')" />
      <q-btn flat label="GitHub" @click="scrollToSection('.gitHub-section')" />
      <q-btn flat label="Tilbakemeldinger" @click="scrollToSection('.comments-section')" />
    </div>
    <div>
      <q-icon name="east" class="q-mx-md arrow-animate" />
      <q-btn class="justify-end bg-accent" flat rounded label="Emil Berglund" @click="$router.push('/contact')" />
    </div>
  </nav>
</template>

<script>
import ScrollScript from 'src/scripts/ScrollScript.js';

export default {
  name: 'NavSection',
  mixins: [ScrollScript],
};
</script>
<style lang="scss" scoped>
@import 'src/css/navStyle.scss';
</style>
