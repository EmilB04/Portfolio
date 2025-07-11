<template>
  <q-page class="columm q-px-md ">
    <header>
      <NavSection />
    </header>
    <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
    <main>
      <div class="content">
        <section data-aos="fade-left">
          <h1 class="text-white text-center q-ma-none">Mine prosjekter</h1>
          <p class="text-white text-center q-mb-lg">Under utvikling!</p>
          <div class="row justify-center q-gutter-lg">
            <ProjectCard v-for="project in ProjectsList" :key="project.id" :course="project" @click="
              $router.push({ path: `/projects/${project.localPath}` })
              " style="cursor: pointer" />
          </div>
        </section>
      </div>
    </main>
    <footer class="text-black">
      <FooterSection />
    </footer>
  </q-page>
  <ShootingStars style="z-index: -99 !important;" />
</template>

<script setup scoped lang="ts">
import ProjectsList from 'src/scripts/ProjectsList.js';
import ProjectCard from 'src/components/ProjectCard.vue';
import FooterSection from 'src/components/FooterSection.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
import NavSection from 'src/components/NavSection.vue';
</script>
<style setup scoped lang="scss">
@import 'src/css/app.scss';
@import 'src/css/quasar.variables.scss';
</style>
