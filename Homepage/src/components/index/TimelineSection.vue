<template>
  <section class="full-screen timeline-section" data-aos="fade-up">
    <div class="content">
      <h2>Min akademiske reise</h2>
      <p>Under er en oversikt over emnene jeg har gjennomført under studiene mine på HiØ.</p>
      <q-timeline :layout="layout" color="accent">

        <q-timeline-entry v-for="(semester, semesterIndex) in CourseList" :key="semesterIndex"
          :side="getSide(semesterIndex)">
          <template v-slot:title>
            <h3>{{ semester.semester }}</h3>
          </template>

          <div class="courses-list">
            <div v-for="(course, courseIndex) in semester.courses" :key="courseIndex" class="course-item">
              <a :href="course.link" target="_blank" class="course-link">
                <h4>{{ course.name }}</h4>
                <p>{{ course.code }}</p>
              </a>
              <p class="course-description">{{ course.description }}</p>
            </div>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </section>
</template>

<script>
import CourseList from 'src/scripts/CourseList';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

export default {
  name: 'TimelineSection',
  setup() {
    const $q = useQuasar();

    const layout = computed(() => $q.screen.lt.md ? 'dense' : 'loose');
    const getSide = (index) => {
      if ($q.screen.lt.md) return 'right';
      return index % 2 === 0 ? 'left' : 'right';
    };

    return {
      $q,
      layout,
      getSide,
    };
  },
  data() {
    return {
      CourseList,
    };
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.timeline-section {
  color: var(--c-text);

  h2 {
    color: $accent;
  }

  h3 {
    font-size: 2rem;
    margin: 0;
    color: $accent;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5rem;
  }

  .courses-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .course-item {
    background-color: var(--c-surface);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($accent, 0.2);
      border-color: rgba($accent, 0.5);
    }

    .course-link {
      text-decoration: none;
      display: block;
      margin-bottom: 0.5rem;

      h4 {
        margin: 0 0 0.25rem 0;
        color: var(--c-text);
        font-size: 1.25rem;
        transition: color 0.2s ease-in-out;
      }

      p {
        margin: 0;
        color: $accent;
        font-size: 0.9rem;
        font-weight: 500;
      }

      &:hover h4 {
        color: $accent;
      }
    }

    .course-description {
      margin: 0;
      color: var(--c-text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }
}

@media screen and (max-width: 710px) {
  .timeline-section {
    h3 {
      font-size: 1.5rem;
    }

    .course-item {
      .course-link h4 {
        font-size: 1.1rem;
      }

      .course-description {
        font-size: 0.85rem;
      }
    }
  }
}
</style>
