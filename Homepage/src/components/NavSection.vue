<template>
  <nav :class="['flex q-py-md', ($route.path === '/' ? 'justify-between' : 'justify-start')]">
    <div class="nav-links flex" :class="{ open: menuOpen }">
      <template v-if="$route.name === 'IndexPage' || $route.path === '/'">
        <q-btn text-color="white" flat label="Om" @click="navigate('.about-section')" />
        <q-btn text-color="white" flat label="Tidslinje" @click="navigate('.timeline-section')" />
        <q-btn text-color="white" flat label="Prosjekter" @click="navigate('.projects-section')" />
        <q-btn text-color="white" flat label="Kunnskap" @click="navigate('.skills-section')" />
        <q-btn text-color="white" flat label="GitHub" @click="navigate('.gitHub-section')" />
        <q-btn text-color="white" flat label="Tilbakemeldinger" @click="navigate('.comments-section')" />
      </template>
    </div>
    <div id="hamburger">
      <template v-if="$route.name === 'IndexPage' || $route.path === '/'">
        <q-icon name="east" class="q-mx-md arrow-animate" />
        <q-btn class="justify-end bg-accent" flat rounded label="Kontakt meg" @click="$router.push('/contact')" />
        <q-btn text-color="white" flat dense round icon="menu" class="hamburger" @click="menuOpen = !menuOpen" />
      </template>
    </div>

    <div v-if="$route.name !== 'IndexPage' && $route.path !== '/'">
      <q-btn text-color="white" label="Gå tilbake" flat icon="arrow_back" @click="$router.back" class="justify-start" />
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
