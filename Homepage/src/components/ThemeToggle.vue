<template>
  <button class="theme-toggle" :aria-label="store.isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'"
    :title="store.isDark ? 'Lys modus' : 'Mørk modus'" @click="store.toggle()">
    <transition name="icon-swap" mode="out-in">
      <q-icon v-if="store.isDark" key="sun" name="light_mode" class="icon" color="yellow" />
      <q-icon v-else key="moon" name="dark_mode" class="icon" color="deep-purple" />
    </transition>
  </button>
</template>

<script>
import { useThemeStore } from 'src/stores/theme';

export default {
  name: 'ThemeToggle',
  setup() {
    const store = useThemeStore();
    return { store };
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: rgba($accent, 0.15);
    border-color: rgba($accent, 0.4);
    transform: rotate(20deg) scale(1.1);
  }

  .icon {
    font-size: 1.1rem;
    color: var(--c-text);
    display: block;
  }
}

// Swap animation
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
