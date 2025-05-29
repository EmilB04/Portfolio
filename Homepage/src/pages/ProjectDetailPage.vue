<template>
  <q-page>
    <div v-if="project">
      <header>
        <nav class="flex justify-center">
          <q-btn
            class="bg-accent q-ma-lg text-white"
            flat
            rounded
            label="Gå tilbake"
            @click="$router.replace('/projects')"
          />
        </nav>
      </header>
      <main class="flex-col items-center text-center q-pa-md">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <q-chip v-for="tag in project.tags" :key="tag">{{ tag }}</q-chip>
      </main>
    </div>

    <div v-else>
      <ErrorNotFound />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ProjectsList from 'src/scripts/ProjectsList.js';
import ErrorNotFound from './ErrorNotFound.vue';

const route = useRoute();
const slug = route.params.project;
const project = ProjectsList.find((p) => p.localPath === slug);
</script>
