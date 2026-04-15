<template>
  <div class="language-switcher">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script scoped>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n();
    const store = useStore();
    const selectedLanguage = ref(locale.value);

    const languages = [
      { code: 'en', name: 'English' },
      { code: 'no', name: 'Norsk' },
      { code: 'de', name: 'Deutsch' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' },
      // Add more languages as needed
    ];

    const changeLanguage = () => {
      locale.value = selectedLanguage.value;
      store.dispatch('setLocale', selectedLanguage.value);
    };

    // Watch for locale changes and update selectedLanguage
    watch(locale, (newLocale) => {
      selectedLanguage.value = newLocale;
    });

    // Watch for changes in the selected language and update locale dynamically
    watch(selectedLanguage, (newLang) => {
      locale.value = newLang;
      store.dispatch('setLocale', newLang);
    });

    return {
      selectedLanguage,
      languages,
      changeLanguage,
    };
  },
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
