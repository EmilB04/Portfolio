<template>
  <section class="full-screen projects-section" data-aos="fade-up">
    <div class="content">
      <h2>Prosjekter</h2>
      <p>
        Under kan du se en oversikt over prosjekter jeg har jobbet med
        under studiene. Dette inkluderer både skole- prosjekter og
        personlige prosjekter.
      </p>
      <section class="projects-container">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project?.id ?? index"
          :course="project"
        />
        <q-btn class="q-mt-md e-button" to="/projects" router
          >Se alle prosjekter</q-btn
        >
      </section>
    </div>
  </section>
</template>

<script>
import ProjectCard from 'src/components/ProjectCard.vue';

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
  },
  props: {
    projects: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    featuredProjects() {
      return this.projects.slice(0, 2);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
</style>
