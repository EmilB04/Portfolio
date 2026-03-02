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
      <picture>
        <img id="profilePicture" :src="profilePicture" alt="Emil Berglund" class="q-mx-auto q-my-md" />
      </picture>
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
    profilePicture: {
      type: String,
      required: true,
    },
  },
  emits: ['scroll-next-section'],
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
</style>
