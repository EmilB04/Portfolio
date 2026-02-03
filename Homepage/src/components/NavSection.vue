<template>
  <nav :class="['flex q-py-md', ($route.path === '/' ? 'justify-between' : 'justify-start')]">
    <div class="nav-links flex" :class="{ open: menuOpen }">
      <template v-if="$route.name === 'IndexPage' || $route.path === '/'">
        <q-btn text-color="white" flat label="Om meg" @click="navigate('.about-section')" />
        <q-btn text-color="white" flat label="Tidslinje" @click="navigate('.timeline-section')" />
        <q-btn text-color="white" flat label="Prosjekter" @click="navigate('.projects-section')" />
        <q-btn text-color="white" flat label="Kunnskap" @click="navigate('.skills-section')" />
        <q-btn text-color="white" flat label="GitHub" @click="navigate('.gitHub-section')" />
      </template>
    </div>
    <div id="hamburger">
      <template v-if="$route.name === 'IndexPage' || $route.path === '/'">
        <q-btn class="justify-end bg-accent q-mr-md" flat rounded label="Kontakt meg"
          @click="$router.push('/contact')" />
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
@import 'src/css/quasar.variables.scss';
@import 'src/css/app.scss';

nav {
  gap: 5px;
  margin: 0 auto;
  max-width: $max-width;

  .hamburger {
    display: none;
  }

  .nav-links {
    transition: max-height 0.3s;
  }
}

@media screen and (max-width: 710px) {
  nav {
    gap: 0px;
    flex-direction: column;
    justify-content: center;

    .hamburger {
      display: inline-flex;
      margin-left: 8px;
    }

    .nav-links {
      flex-direction: column;
      max-width: 100%;
      max-height: 0;
      overflow: hidden;
      background: #222;
      border-radius: 12px 0px 0px 12px;
      transition: max-height 0.3s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 100;
      position: absolute;
      right: 0;
      top: 70px;
      transform: translateX(100%);
      pointer-events: none;
      opacity: 0;
    }

    .nav-links.open {
      max-height: max-content;
      padding: 0.8rem;
      transform: translateX(0);
      box-shadow: -4px 0 16px rgba(0, 0, 0, 0.2);
      pointer-events: auto;
      opacity: 1;
    }

    #hamburger {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
    }

    .arrow-animate {
      display: none;
    }
  }
}
</style>
