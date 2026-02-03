<template>
  <q-card class="project-card full-height">
    <q-card-section class="project-card-header column items-center full-height no-wrap">
      <div class="card-header-top column items-center no-wrap">
        <div class="card-icon-wrapper q-mb-md">
          <q-icon name="folder_open" size="3rem" class="text-accent" />
        </div>
        <h3 class="project-title q-mb-md">{{ course.title }}</h3>
      </div>
      <p class="project-description q-mb-md">{{ course.description }}</p>
      <div class="card-button-wrapper column items-center no-wrap">
        <q-btn unelevated rounded class="project-link-btn" label="Les mer" color="accent" icon-right="arrow_forward" />
      </div>
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
  min-height: 450px;
  text-align: center;
  background: rgba($primary, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba($primary, 0.1);
  border-radius: $e-button-border-radius;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
        rgba($accent, 0.1) 0%,
        transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    background: rgba($primary, 0.08);
    border-color: rgba($accent, 0.3);
    box-shadow: 0 20px 40px rgba($dark, 0.3), 0 0 30px rgba($accent, 0.2);

    &::before {
      opacity: 1;
    }

    .card-icon-wrapper {
      transform: scale(1.1) rotate(15deg);
    }
  }

  .project-card-header {
    padding: 3rem 2rem;
    position: relative;
    z-index: 1;
    flex-wrap: nowrap;

    @media (max-width: $breakpoint-sm-max) {
      padding: 2rem 1.5rem;
    }
  }

  .card-header-top {
    flex-basis: 30%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .card-icon-wrapper {
    transition: transform 0.6s ease;
    display: inline-block;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: $primary;
    margin: 0;

    @media (max-width: $breakpoint-sm-max) {
      font-size: 1.3rem;
    }
  }

  .project-description {
    flex-basis: 50%;
    flex-shrink: 0;
    font-size: 1rem;
    opacity: 0.85;
    line-height: 1.5;
    color: $primary;
    margin: 0;
    display: flex;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-word;

    @media (max-width: $breakpoint-sm-max) {
      font-size: 0.95rem;
    }
  }

  .card-button-wrapper {
    flex-basis: 20%;
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .project-link-btn {
    padding: $e-button-padding;
    font-size: $e-button-font-size;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba($accent, 0.4);
    }
  }
}
</style>
