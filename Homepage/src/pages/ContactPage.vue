<template>
  <q-page class="columm">
    <header>
      <nav class="flex justify-center">
        <q-btn class="bg-accent q-ma-md text-white" flat rounded label="Gå tilbake" @click="$router.push('/')" />
      </nav>
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
            <q-btn flat label="Kontakt" color="accent"
              @click="openLink('https://www.linkedin.com/in/emil-berglund-336135251/')" />
          </q-card-section>
        </q-card>
        <q-card class="contact-card q-ma-md">
          <q-card-section class="text-center">
            <q-icon name="fab fa-github" size="3rem" class="text-accent" />
            <h2>GitHub</h2>
            <q-btn flat label="Se profil" color="accent" @click="openLink('https://github.com/EmilB04')" />
          </q-card-section>
        </q-card>
        <q-card class="contact-card q-ma-md">
          <q-card-section class="text-center">
            <q-icon name="fas fa-envelope" size="3rem" class="text-accent" />
            <h2>Email</h2>
            <q-btn flat label="Send E-post" color="accent" @click="openLink('mailto:emil.berglund@live.no')" />
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
import ShootingStars from 'src/components/ShootingStars.vue';
export default {
  name: 'ContactPage',
  components: {
    ShootingStars,
    FooterSection,
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/ContactStyle.scss';
</style>
