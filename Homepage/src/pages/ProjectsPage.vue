<template>
  <q-page>
    <div id="bg-app">
      <header>
        <nav class="flex justify-center">
          <q-btn
            class="bg-accent q-ma-lg text-white"
            flat
            rounded
            label="Gå tilbake"
            @click="$router.push('/')"
          />
        </nav>
      </header>
        <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
        <section data-aos="fade-left">
          <h1 class="text-black text-center">Mine prosjekter</h1>
          <p class="text-black text-center q-mb-lg">Under utvikling!</p>
          <div class="row justify-center q-gutter-lg">
            <ProjectCard
              v-for="project in ProjectsList"
              :key="project.id"
              :course="project"
              @click="$router.replace({ path: `/projects/${project.localPath}` })"
              style="cursor: pointer"
            />
          </div>
        </section>
    </div>
  </q-page>
</template>

<script setup scoped lang="ts">
import ProjectsList from 'src/scripts/ProjectsList.js';
import ProjectCard from 'src/components/ProjectCard.vue';
</script>
<style setup scoped lang="scss"></style>
