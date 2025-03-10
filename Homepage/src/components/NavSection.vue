<template>
  <nav class="flex justify-between">
    <div class="justify-start">
      <q-btn flat label="Om" @click="scrollToSection('.about-section')" />
      <q-btn flat label="Studie" @click="scrollToSection('.timeline-section')" />
      <q-btn flat label="Kunnskap" @click="scrollToSection('.skills-section')" />
      <q-btn flat label="GitHub" @click="scrollToSection('.gitHub-section')" />
      <q-btn flat label="Tilbakemeldinger" @click="scrollToSection('.comments-section')" />
    </div>
    <q-btn class="justify-end bg-accent" flat rounded label="Emil Berglund" @click="$router.push('/contact')" />
  </nav>
</template>

<script>
import ScrollScript from 'src/scripts/ScrollScript.js';

export default {
  name: 'NavSection',
  mixins: [ScrollScript],
};
</script>
