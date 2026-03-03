<template>
  <section class="full-screen landing-section">
    <div class="content">
      <article class="about-me">
        <h1>
          Hei! Jeg er Emil Berglund <br />
          <span class="typewriter">{{ typewriterText }}<span class="cursor">|</span></span>
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
          <a class="q-mb-md" href="https://www.linkedin.com/in/emilber/" target="_blank" aria-label="LinkedIn-profil">
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
      lines: ['Informatikk student', 'Full-Stack utvikler', 'Frontend utvikler', 'Backend utvikler'],
      lineIndex: 0,
      typewriterText: '',
      isDeleting: false,
      typewriterTimer: null,
    };
  },
  mounted() {
    this.runTypewriter();
  },
  beforeUnmount() {
    if (this.typewriterTimer) clearTimeout(this.typewriterTimer);
  },
  methods: {
    runTypewriter() {
      const currentLine = this.lines[this.lineIndex];
      if (!this.isDeleting) {
        this.typewriterText = currentLine.substring(0, this.typewriterText.length + 1);
        if (this.typewriterText === currentLine) {
          this.typewriterTimer = setTimeout(() => {
            this.isDeleting = true;
            this.runTypewriter();
          }, 1800);
          return;
        }
      } else {
        this.typewriterText = currentLine.substring(0, this.typewriterText.length - 1);
        if (this.typewriterText === '') {
          this.isDeleting = false;
          this.lineIndex = (this.lineIndex + 1) % this.lines.length;
          this.typewriterTimer = setTimeout(this.runTypewriter, 400);
          return;
        }
      }
      this.typewriterTimer = setTimeout(this.runTypewriter, this.isDeleting ? 40 : 80);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';

.cursor {
  display: inline-block;
  color: $accent;
  font-weight: 100;
  animation: blink 0.7s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
