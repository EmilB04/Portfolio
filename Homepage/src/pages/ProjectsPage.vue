<template>
  <q-page class="column">
    <header>
      <NavSection />
    </header>
    <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />

    <main class="full-screen projects-section">
      <div class="content q-pt-xl">
        <section data-aos="fade-up">
          <h1 class="text-white text-center q-mb-lg">Mine prosjekter</h1>
          <p class="text-center text-white q-mb-xl intro-text">
            Utforsk mine prosjekter og se hva jeg har jobbet med
          </p>

          <div class="row justify-center q-col-gutter-lg q-mt-md">
            <article v-for="project in ProjectsList" :key="project.id" class="col-12 col-sm-6 col-md-4"
              data-aos="fade-up">
              <ProjectCard :course="project" @click="$router.push({ path: `/projects/${project.localPath}` })"
                class="cursor-pointer full-height" />
            </article>
          </div>
        </section>
      </div>
    </main>

    <footer>
      <FooterSection />
    </footer>
    <ShootingStars />
  </q-page>
</template>

<script setup scoped lang="ts">
import { useMeta } from 'quasar';
import ProjectsList from 'src/scripts/ProjectsList';
import ProjectCard from 'src/components/ProjectCard.vue';
import FooterSection from 'src/components/ui/FooterSection.vue';
import ShootingStars from 'src/components/ui/ShootingStars.vue';
import NavSection from 'src/components/ui/NavSection.vue';

useMeta({
  title: 'Prosjekter - Emil Berglund',
  meta: {
    description: {
      name: 'description',
      content: 'Utforsk prosjektene til Emil Berglund - blant annet ChoreChamp (React Native), VarsEL (Java/Vue), PageProbe (.NET) og mer.',
    },
    ogTitle: { property: 'og:title', content: 'Prosjekter - Emil Berglund' },
    ogDescription: { property: 'og:description', content: 'Se alle prosjektene til Emil Berglund innen webutvikling, mobilapper og backend.' },
    ogUrl: { property: 'og:url', content: 'https://emilb.no/projects' },
    twitterTitle: { name: 'twitter:title', content: 'Prosjekter - Emil Berglund' },
    twitterDescription: { name: 'twitter:description', content: 'Emil Berglunds prosjekter innen webutvikling, mobilapper og backend.' },
  },
  link: {
    canonical: { rel: 'canonical', href: 'https://emilb.no/projects' },
  },
});
</script>

<style scoped lang="scss">
@import 'src/css/app.scss';
@import 'src/css/quasar.variables.scss';

body {
  h1 {
    background: linear-gradient(135deg, $accent 50%, transparent 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.full-screen {
  backdrop-filter: blur(5px);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 50px;
  overflow: hidden;

  @media (max-width: $breakpoint-sm-max) {
    padding-inline: 20px;
  }
}

.projects-section {
  .intro-text {
    font-size: 1.3rem;
    opacity: 0.9;
    max-width: $max-width;
    margin: 0 auto;

    @media (max-width: $breakpoint-md-max) {
      font-size: 1.1rem;
    }

    @media (max-width: $breakpoint-xs-max) {
      font-size: 1rem;
    }
  }
}

footer {
  margin-top: 4rem;
}
</style>
