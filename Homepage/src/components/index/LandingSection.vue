<template>
  <section class="full-screen landing-section">
    <div class="content">
      <article class="about-me">
        <h1>
          Hei! Jeg er Emil Berglund <br />
          Informatikk student
        </h1>
        <p>
          Jeg er en person med lidenskap for teknologi og et ønske om å lære og vokse.
          Jeg tror det finnes flere måter å nå et mål eller finne en løsning på, og jeg liker å utforske
          innovative
          tilnærminger for å takle utfordringer.
        </p>
        <div class="landing-buttons flex row q-mb-md justify-center">
          <a class="q-mb-md" href="https://github.com/EmilB04" target="_blank" aria-label="GitHub-profil">
            <q-btn color="primary" icon="fab fa-github">
              <q-tooltip>Besøk min GitHub-profil</q-tooltip>
            </q-btn>
          </a>
          <a class="q-mb-md" href="https://www.linkedin.com/in/emilber/" target="_blank"
            aria-label="LinkedIn-profil">
            <q-btn color="primary" icon="fab fa-linkedin">
              <q-tooltip>Besøk min LinkedIn-profil</q-tooltip>
            </q-btn>
          </a>
        </div>
        <q-btn @click="$emit('scroll-next-section')" :data-aos="shouldUseAos ? 'zoom-in-up' : ''"
          :data-aos-delay="shouldUseAos ? '0' : '0'" :data-aos-duration="shouldUseAos ? '1500' : '0'">
          <q-icon name="arrow_downward" class="q-mx-md arrow-animate" />
          <q-btn class="justify-end bg-accent" flat rounded label="Ta en titt" />
        </q-btn>
      </article>
      <div class="rotating-text-container">
        <p class="rotating-text">{{ currentRole }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingSection',
  props: {
    shouldUseAos: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['scroll-next-section'],
  data() {
    return {
      roles: ['Frontend', 'Backend', 'Fullstack'],
      currentRoleIndex: 0,
      rotationInterval: null,
    };
  },
  computed: {
    currentRole() {
      return this.roles[this.currentRoleIndex];
    },
  },
  mounted() {
    this.startRotation();
  },
  beforeUnmount() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  },
  methods: {
    startRotation() {
      this.rotationInterval = setInterval(() => {
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';

.rotating-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  margin-bottom: 5rem;

  .rotating-text {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    color: $accent;
    animation: fadeInOut 2s ease-in-out infinite;
    margin: 0;
    transform: rotate(-25deg);
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(-25deg);
  }
  10% {
    opacity: 1;
    transform: translateY(0) rotate(-25deg);
  }
  90% {
    opacity: 1;
    transform: translateY(0) rotate(-25deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) rotate(-25deg);
  }
}

@media screen and (max-width: 710px) {
  .rotating-text-container {
    min-height: 150px;

    .rotating-text {
      font-size: 2.5rem;
    }
  }
}
</style>
