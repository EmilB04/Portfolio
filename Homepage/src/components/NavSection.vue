<template>
  <nav class="flex justify-between">
    <div class="justify-start nav-links" :class="{ open: menuOpen }">
      <q-btn flat label="Om" @click="navigate('.about-section')" />
      <q-btn flat label="Studie" @click="navigate('.timeline-section')" />
      <q-btn flat label="Prosjekter" @click="navigate('.projects-section')" />
      <q-btn flat label="Kunnskap" @click="navigate('.skills-section')" />
      <q-btn flat label="GitHub" @click="navigate('.gitHub-section')" />
      <q-btn flat label="Tilbakemeldinger" @click="navigate('.comments-section')" />
    </div>
    <div>
      <q-icon name="east" class="q-mx-md arrow-animate" />
      <q-btn class="justify-end bg-accent" flat rounded label="Emil Berglund" @click="$router.push('/contact')" />
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="hamburger"
        @click="menuOpen = !menuOpen"
      />
    </div>
  </nav>
</template>

<script>
import ScrollScript from 'src/scripts/ScrollScript.js';

export default {
  name: 'NavSection',
  mixins: [ScrollScript],
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    navigate(section) {
      this.menuOpen = false;
      this.scrollToSection(section);
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'src/css/navStyle.scss';
</style>
