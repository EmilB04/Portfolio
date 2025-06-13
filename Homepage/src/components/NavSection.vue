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

  div:nth-child(2) {
    .arrow-animate {
      font-size: 1.5rem;
      animation: arrowMove 2s infinite alternate;
    }

    @keyframes arrowMove {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(12px);
      }
    }
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
      width: 100%;
      max-height: 0;
      overflow: hidden;
      background: #222;
      border-radius: 0 0 12px 12px;
      transition: max-height 0.3s;
      z-index: 100;
      position: absolute;
      left: 0;
      top: 70px;

      >* {
        padding: 0.8rem;
      }
    }

    .nav-links.open {
      max-height: 500px;
      padding: 0.8rem;
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
