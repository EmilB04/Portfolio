<template>
  <q-page class="columm q-px-md">
    <div v-if="project">
      <header>
        <NavSection />
      </header>
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <main class="flex-col items-center text-center q-pa-md">
        <div class="content">
          <h1 class="text-white">{{ project.title }}</h1>
          <p class="text-white">{{ project.details }}</p>
          <q-chip v-for="tag in project.tags" :key="tag" clickable @click="copyToClipboard(tag)">
            {{ tag }}
          </q-chip>
          <br>
          <q-btn class="bg-accent text-white q-mt-xl" flat rounded label="Gå til prosjekt" :href="project.url"
            target="_blank" />
        </div>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>

    <div v-else>
      <ErrorNotFound />
    </div>
    <ShootingStars style="z-index: -99 !important;" />
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ProjectsList from 'src/scripts/ProjectsList.js';
import ErrorNotFound from './ErrorNotFound.vue';
import FooterSection from 'src/components/FooterSection.vue';
import { useQuasar } from 'quasar';
import ShootingStars from 'src/components/ShootingStars.vue';
import NavSection from 'src/components/NavSection.vue';

const $q = useQuasar();
const route = useRoute();
const slug = route.params.project;
const project = ProjectsList.find((p) => p.localPath === slug);

function copyToClipboard(tag) {
  navigator.clipboard.writeText(tag).then(() => {
    $q.notify({
      type: 'positive',
      position: 'top',
      classes: 'text-white',
      message: `"${tag}" kopiert til utklippstavlen!`,
      timeout: 1200,
    });
  });
}
</script>

<style setup scoped lang="scss">
@import 'src/css/app.scss';
@import 'src/css/quasar.variables.scss';

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

a {
  padding: $e-button-padding;
}
</style>
