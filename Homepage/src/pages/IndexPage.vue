<template>
  <q-page class="columm">
    <header id="top">
      <NavSection />
    </header>
    <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
    <main class="flex column">
      <LandingSection :should-use-aos="shouldUseAOS" @scroll-next-section="scrollToNextSection" />

      <AboutSection />
      <TimelineSection />

      <ProjectsSection :projects="[ChoreChamp, VarsEL]" />

      <LivePagesSection />

      <SkillsSection />

      <GitHubSection />

      <SvgSeparator style="margin-top: 5rem;" />

      <q-btn v-show="showScrollToTop" flat icon="arrow_upward" @click="scrollToTop" class="scroll-btn" />

    </main>
    <footer>
      <FooterSection />
    </footer>
  </q-page>
  <ShootingStars style="z-index: -99 !important" />
</template>

<script scoped>
// Scripts
import ScrollScript from 'src/scripts/ScrollScript';
import ProjectsList from 'src/scripts/ProjectsList';

// Components
import NavSection from 'src/components/ui/NavSection.vue';
import GitHubSection from 'src/components/index/GitHubSection.vue';
import FooterSection from 'src/components/ui/FooterSection.vue';
import SvgSeparator from 'src/components/ui/SvgSeparator.vue';
import ShootingStars from 'src/components/ui/ShootingStars.vue';
import TimelineSection from 'src/components/index/TimelineSection.vue';
import LandingSection from 'src/components/index/LandingSection.vue';
import AboutSection from 'src/components/index/AboutSection.vue';
import ProjectsSection from 'src/components/index/ProjectsSection.vue';
import SkillsSection from 'src/components/index/SkillsSection.vue';
import LivePagesSection from 'src/components/index/LivePagesSection.vue';


export default {
  name: 'IndexPage',
  meta() {
    return {
      title: 'Emil Berglund - Full-Stack Developer Portfolio',
      meta: {
        description: {
          name: 'description',
          content: 'Emil Berglund er en informatikkstudent ved HiØ i Halden og full-stack utvikler. Utforsk prosjekter innen Vue.js, React, Java, C# og mer.',
        },
        ogTitle: { property: 'og:title', content: 'Emil Berglund - Full-Stack Developer Portfolio' },
        ogDescription: { property: 'og:description', content: 'Emil Berglund er en informatikkstudent ved HiØ i Halden og full-stack utvikler. Utforsk prosjekter innen Vue.js, React, Java, C# og mer.' },
        ogUrl: { property: 'og:url', content: 'https://emilb.no/' },
        twitterTitle: { name: 'twitter:title', content: 'Emil Berglund - Full-Stack Developer Portfolio' },
        twitterDescription: { name: 'twitter:description', content: 'Emil Berglund er en informatikkstudent ved HiØ og full-stack utvikler.' },
      },
      link: {
        canonical: { rel: 'canonical', href: 'https://emilb.no/' },
      },
    };
  },
  components: {
    NavSection,
    GitHubSection,
    FooterSection,
    ShootingStars,
    SvgSeparator,
    TimelineSection,
    LandingSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    LivePagesSection,
  },
  mixins: [ScrollScript, ProjectsList],
  computed: {
    ChoreChamp() {
      return ProjectsList[2];
    },
    VarsEL() {
      return ProjectsList[1];
    },
    shouldUseAOS() {
      // Disable AOS animations on mobile devices (710px and below)
      return this.windowWidth > 710;
    },
  },
  data() {
    return {
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.ChangeButtonLabel);
    window.addEventListener('resize', this.handleResize);
    this.ChangeButtonLabel();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.ChangeButtonLabel);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
@import 'src/css/quasar.variables.scss';
</style>
