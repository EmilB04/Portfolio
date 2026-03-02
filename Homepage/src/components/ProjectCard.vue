<template>
  <q-card
    @click="navigateTo"
    flat
    bordered
    class="project-card bg-transparent text-primary cursor-pointer">
    <q-card-section class="column items-center text-center q-pa-lg full-height">
      <q-icon name="folder_open" size="3rem" class="text-accent q-mb-md" />

      <div class="col-grow full-width">
        <h3 class="text-h5 text-weight-medium q-mb-md">{{ course.title }}</h3>
        <p class="project-description text-body1 text-grey-4 q-mb-lg">
          {{ course.description }}
        </p>
      </div>

      <q-btn
        unelevated
        rounded
        no-caps
        color="accent"
        text-color="black"
        class="q-px-lg q-py-sm"
        label="Les mer"
        icon-right="arrow_forward"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
    to: {
      type: String,
      required: false,
      default: null,
    },
  },
  emits: ['card-click'],
  methods: {
    navigateTo() {
      if (this.to) {
        this.$router.push(this.to);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  min-height: 28rem;
  backdrop-filter: blur(10px);
  border-color: rgba(255, 255, 255, 0.14);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  user-select: none;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.project-card:active {
  transform: translateY(-2px);
}

.project-description {
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
