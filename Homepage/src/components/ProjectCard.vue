<template>
  <q-card class="project-card">
    <q-card-section class="project-card-header">
      <h3 class="project-title">{{ course.title }}</h3>
      <p class="text-black project-description">{{ course.description }}</p>
      <q-btn text-color="accent" flat icon="launch" :href="'projects/' + course.localPath" class="project-link-btn">Read
        more</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
@import 'src/css/app.scss';

.project-card {
  width: 100%;
  border-radius: 16px;
  background-color: #f0f0f0;

  .project-card-header {
    flex-basis: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;

    h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: #333;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    .project-link-btn {
      margin-top: 1rem;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
</style>
