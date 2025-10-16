<template>
  <q-page class="columm q-px-md">
    <header>
      <NavSection />
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <section data-aos="fade-left">
        <h1 class="text-white text-center">Emil Berglund</h1>
      </section>
    </header>

    <main class="q-pa-md" data-aos="fade-left">
      <div class="contact-container">
        <q-card class="contact-card q-ma-md">
          <q-card-section class="text-center">
            <q-icon name="fab fa-linkedin" size="3rem" class="text-accent" />
            <h2>LinkedIn</h2>
            <q-btn flat label="Contact" color="accent"
              @click="openLink('https://www.linkedin.com/in/emilber')" />
          </q-card-section>
        </q-card>
        <q-card class="contact-card q-ma-md">
          <q-card-section class="text-center">
            <q-icon name="fab fa-github" size="3rem" class="text-accent" />
            <h2>GitHub</h2>
            <q-btn flat label="See profile" color="accent" @click="openLink('https://github.com/EmilB04')" />
          </q-card-section>
        </q-card>
        <q-card class="contact-card q-ma-md">
          <q-card-section class="text-center">
            <q-icon name="fas fa-envelope" size="3rem" class="text-accent" />
            <h2>Email</h2>
            <q-btn flat label="Send email" color="accent" @click="openLink('mailto:emil.berglund@live.no')" />
          </q-card-section>
        </q-card>
      </div>
    </main>

    <footer>
      <FooterSection />
    </footer>
    <ShootingStars />
  </q-page>
</template>

<script>
import FooterSection from 'src/components/FooterSection.vue';
import NavSection from 'src/components/NavSection.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
import ProfilePicture from 'src/assets/images/ProfilePicture.jpg';
export default {
  name: 'ContactPage',
  components: {
    ShootingStars,
    FooterSection,
    NavSection,
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  },
  data() {
    return {
      ProfilePicture,
    };
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/ContactStyle.scss';
</style>
