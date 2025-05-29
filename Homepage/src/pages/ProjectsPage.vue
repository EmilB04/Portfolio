<template>
  <q-page>
    <div id="bg-app">
      <header>
        <nav class="flex justify-center">
          <q-btn
            class="bg-accent q-ma-md text-white"
            flat
            rounded
            label="Gå tilbake"
            @click="$router.push('/')"
          />
        </nav>
      </header>
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <main>
        <section data-aos="fade-left">
          <h1 class="text-white text-center q-ma-none">Mine prosjekter</h1>
          <p class="text-white text-center q-mb-lg">Under utvikling!</p>
          <div class="row justify-center q-gutter-lg">
            <ProjectCard
              v-for="project in ProjectsList"
              :key="project.id"
              :course="project"
              @click="
                $router.push({ path: `/projects/${project.localPath}` })
              "
              style="cursor: pointer"
            />
          </div>
        </section>
      </main>
      <footer class="text-black">
        <FooterSection />
      </footer>
    </div>
    <ShootingStars style="z-index: -99 !important;" />
  </q-page>
</template>

<script setup scoped lang="ts">
import ProjectsList from 'src/scripts/ProjectsList.js';
import ProjectCard from 'src/components/ProjectCard.vue';
import FooterSection from 'src/components/FooterSection.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
</script>
<style setup scoped lang="scss">
@import 'src/css//app.scss';

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
