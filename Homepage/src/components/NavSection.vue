<template>
  <nav :class="['site-nav', { scrolled: isScrolled }]">
    <div class="nav-inner">

      <!-- Back button (non-index pages, left side) -->
      <template v-if="!isIndex">
        <button class="back-btn" @click="$router.back()">
          <span class="back-arrow">←</span> Gå tilbake
        </button>
      </template>

      <!-- Desktop links (index only) -->
      <div v-if="isIndex" class="nav-links">
        <button v-for="item in navItems" :key="item.section" class="nav-link"
          :class="{ active: activeSection === item.section }" @click="navigate(item.section)">
          {{ item.label }}
        </button>
      </div>

      <!-- Right side -->
      <div class="nav-right">
        <ThemeToggle />
        <template v-if="isIndex">
          <button class="nav-cta hide-on-mobile" @click="$router.push('/contact')">Kontakt meg</button>
          <button v-if="menuOpen" class="close-btn" @click="menuOpen = false" aria-label="Lukk meny">✕</button>
          <button v-else class="hamburger-btn" @click="menuOpen = true" aria-label="Åpne meny">
            <span /><span /><span />
          </button>
        </template>
      </div>
    </div>

    <!-- Mobile backdrop -->
    <transition name="backdrop-fade">
      <div v-if="isIndex && menuOpen" class="mobile-backdrop" @click="menuOpen = false" />
    </transition>

    <!-- Mobile panel (right side) -->
    <transition name="mobile-panel">
      <div v-if="isIndex && menuOpen" class="mobile-menu">
        <button v-for="item in navItems" :key="item.section" class="mobile-link" @click="navigate(item.section)">
          {{ item.label }}
        </button>
        <button class="nav-cta mobile-cta" @click="() => { menuOpen = false; $router.push('/contact'); }">
          Kontakt meg
        </button>
      </div>
    </transition>
  </nav>
</template>

<script>
import ScrollScript from 'src/scripts/ScrollScript.js';
import ThemeToggle from 'src/components/ThemeToggle.vue';

export default {
  name: 'NavSection',
  components: { ThemeToggle },
  mixins: [ScrollScript],
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
      activeSection: '',
      navItems: [
        { label: 'Om meg', section: '.about-section' },
        { label: 'Tidslinje', section: '.timeline-section' },
        { label: 'Prosjekter', section: '.projects-section' },
        { label: 'Kunnskap', section: '.skills-section' },
        { label: 'GitHub', section: '.gitHub-section' },
      ],
    };
  },
  computed: {
    isIndex() {
      return this.$route.path === '/';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    navigate(section) {
      this.menuOpen = false;
      this.scrollToSection(section);
    },
    onScroll() {
      this.isScrolled = window.scrollY > 40;
      // highlight active section
      const sectionClasses = this.navItems.map(i => i.section.replace('.', ''));
      for (const cls of [...sectionClasses].reverse()) {
        const el = document.querySelector('.' + cls);
        if (el && window.scrollY >= el.offsetTop - 120) {
          this.activeSection = '.' + cls;
          return;
        }
      }
      this.activeSection = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.site-nav {
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;

  &.scrolled {
    background: var(--c-nav-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 var(--c-border);
  }
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $max-width;
  margin: 0 auto;
  padding: 0.85rem 1.25rem;
  gap: 1rem;
}

// Logo
.nav-logo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--c-text);
  text-decoration: none;
  letter-spacing: 0.01em;
  white-space: nowrap;
  flex-shrink: 0;

  .accent {
    color: var(--c-accent);
  }

  &:hover {
    opacity: 0.85;
  }
}

// Desktop links
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  background: none;
  border: none;
  color: var(--c-text-muted);
  font-size: $e-button-font-size * 0.9;
  font-weight: 500;
  padding: 0.45rem 0.75rem;
  cursor: pointer;
  border-radius: $e-button-border-radius * 0.375;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 70%;
    height: 2px;
    background: var(--c-accent);
    border-radius: 2px;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--c-text);
    background: var(--c-border);
  }

  &.active {
    color: var(--c-text);

    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
}

// Right side
.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
}

.nav-cta {
  background: var(--c-accent);
  color: #fff;
  border: none;
  border-radius: $e-button-border-radius;
  padding: $e-button-padding;
  font-size: $e-button-font-size * 0.875;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}

.back-btn {
  background: none;
  border: 1px solid var(--c-border);
  color: var(--c-text-muted);
  border-radius: $e-button-border-radius;
  padding: $e-button-padding;
  font-size: $e-button-font-size * 0.875;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    border-color: var(--c-accent);
    color: var(--c-text);
  }

  .back-arrow {
    font-size: 1rem;
  }
}

// Hamburger
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--c-text);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }
}

.close-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  border-radius: 50%;
  color: var(--c-text);
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  z-index: 200;

  &:hover {
    background: rgba($accent, 0.15);
    border-color: var(--c-accent);
    color: var(--c-accent);
  }
}

// Mobile menu – right-side panel
.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: var(--c-backdrop);
  z-index: 198;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(100%, 320px);
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;
  gap: 0.25rem;
  background: var(--c-mobile-menu-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid var(--c-border);
  z-index: 199;
  overflow-y: auto;
}

.mobile-link {
  background: none;
  border: none;
  color: var(--c-text-muted);
  font-size: $e-button-font-size;
  font-weight: 500;
  padding: 0.75rem 0.5rem;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid var(--c-border);
  transition: color 0.2s, padding-left 0.2s;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: var(--c-text);
    padding-left: 1rem;
  }
}

.mobile-cta {
  margin-top: 0.75rem;
  border-radius: $e-button-border-radius;
  text-align: center;
}

// Transitions
.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  transform: translateX(100%);
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

// Mobile breakpoint
@media screen and (max-width: 710px) {
  .nav-links {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

  .close-btn {
    display: flex;
  }

  .hide-on-mobile {
    display: none;
  }
}
</style>
