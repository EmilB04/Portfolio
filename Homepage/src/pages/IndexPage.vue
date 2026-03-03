<template>
  <q-page class="columm">
    <header id="top">
      <NavSection />
    </header>
    <!--
    <h1>TODO!</h1>
    <p>
      2. Setup Sanity for backend information
      3. Remove padding on background on mobile - does not go 100% width
      4. Remove white "aura" from base background
    </p>

    -->
    <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
    <main class="flex column">
      <LandingSection :should-use-aos="shouldUseAOS" :profile-picture="ProfilePicture"
        @scroll-next-section="scrollToNextSection" />

      <AboutSection />
      <TimelineSection />

      <ProjectsSection :projects="[ChoreChamp, VarsEL]" />

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
import NavSection from 'src/components/NavSection.vue';
import GitHubSection from 'src/components/GitHubSection.vue';
import FooterSection from 'src/components/FooterSection.vue';
import SvgSeparator from 'src/components/SvgSeparator.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
import TimelineSection from 'src/components/TimelineSection.vue';
import LandingSection from 'src/components/index/LandingSection.vue';
import AboutSection from 'src/components/index/AboutSection.vue';
import ProjectsSection from 'src/components/index/ProjectsSection.vue';
import SkillsSection from 'src/components/index/SkillsSection.vue';

// Assets
import ProfilePicture from 'src/assets/images/ProfilePicture_GPT.png';

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
      ProfilePicture,
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
