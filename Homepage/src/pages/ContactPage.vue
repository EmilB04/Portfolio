<template>
  <q-page class="column">
    <header>
      <NavSection />
    </header>

    <main class="full-screen contact-section justify-start">
      <div class="content">
        <section data-aos="fade-up">
          <h1 class="text-center q-mb-lg">La oss komme i kontakt</h1>
          <p class="text-center q-mb-xl intro-text">
            Har du spørsmål eller vil du samarbeide? Ta gjerne kontakt!
          </p>

          <div class="row justify-center items-stretch q-col-gutter-lg q-mt-md">
            <article class="col-12 col-sm-10 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="contact-card column items-center justify-between full-height">
                <div class="icon-wrapper q-mb-md">
                  <q-icon name="fab fa-linkedin" size="4rem" class="text-accent" />
                </div>
                <h3 class="card-title q-mb-sm">LinkedIn</h3>
                <p class="card-description q-mb-md text-center">Koble deg til mitt nettverk</p>
                <q-btn unelevated rounded class="contact-btn q-mt-auto" label="Kontakt" color="accent"
                  @click="openLink('https://www.linkedin.com/in/emilber')" />
              </div>
            </article>

            <article class="col-12 col-sm-10 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="contact-card column items-center justify-between full-height">
                <div class="icon-wrapper q-mb-md">
                  <q-icon name="fab fa-github" size="4rem" class="text-accent" />
                </div>
                <h3 class="card-title q-mb-sm">GitHub</h3>
                <p class="card-description q-mb-md text-center">Se mine prosjekter og bidrag</p>
                <q-btn unelevated rounded class="contact-btn q-mt-auto" label="Se profil" color="accent"
                  @click="openLink('https://github.com/EmilB04')" />
              </div>
            </article>

            <article class="col-12 col-sm-10 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="contact-card column items-center justify-between full-height">
                <div class="icon-wrapper q-mb-md">
                  <q-icon name="fas fa-envelope" size="4rem" class="text-accent" />
                </div>
                <h3 class="card-title q-mb-sm">E-post</h3>
                <p class="card-description q-mb-md text-center">Send meg en melding direkte</p>
                <q-btn unelevated rounded class="contact-btn q-mt-auto" label="Send e-post" color="accent"
                  @click="openLink('mailto:emil.berglund@live.no')" />
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>

    <footer>
      <FooterSection />
    </footer>
    <ShootingStars />
  </q-page>
</template>

<script>
import FooterSection from 'src/components/ui/FooterSection.vue';
import NavSection from 'src/components/ui/NavSection.vue';
import ShootingStars from 'src/components/ui/ShootingStars.vue';
export default {
  name: 'ContactPage',
  meta() {
    return {
      title: 'Kontakt - Emil Berglund',
      meta: {
        description: {
          name: 'description',
          content: 'Ta kontakt med Emil Berglund via LinkedIn, GitHub eller e-post. Full-stack utvikler og informatikkstudent fra Halden, Norge.',
        },
        ogTitle: { property: 'og:title', content: 'Kontakt Emil Berglund - Full-Stack Developer' },
        ogDescription: { property: 'og:description', content: 'Ta kontakt med Emil Berglund via LinkedIn, GitHub eller e-post.' },
        ogUrl: { property: 'og:url', content: 'https://emilb.no/contact' },
        twitterTitle: { name: 'twitter:title', content: 'Kontakt Emil Berglund' },
        twitterDescription: { name: 'twitter:description', content: 'Ta kontakt med Emil Berglund via LinkedIn, GitHub eller e-post.' },
      },
      link: {
        canonical: { rel: 'canonical', href: 'https://emilb.no/contact' },
      },
    };
  },
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
};
</script>

<style scoped lang="scss">
@import 'src/css/ContactStyle.scss';
</style>
