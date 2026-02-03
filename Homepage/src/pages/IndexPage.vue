<template>
  <q-page class="columm q-px-md ">
    <div id="bg-app">
      <header id="top" class="text-white">
        <NavSection />
      </header>
      <!--
      <h1>TODO!</h1>
      <p>
        1. Add icon to illustrate grabbing on timeline when loading it
        2. Setup Sanity for backend information
        3. Remove padding on background on mobile - does not go 100% width
        4. Remove white "aura" from base background
      </p>

      -->
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <main class="flex column">
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
              <q-btn @click="scrollToNextSection" :data-aos="shouldUseAOS ? 'zoom-in-up' : ''"
                :data-aos-delay="shouldUseAOS ? '0' : '0'" :data-aos-duration="shouldUseAOS ? '1500' : '0'">
                <q-icon name="arrow_downward" class="q-mx-md arrow-animate" />
                <q-btn class="justify-end bg-accent" flat rounded label="Ta en titt" />
              </q-btn>
            </article>
            <picture>
              <img id="profilePicture" :src="ProfilePicture" alt="Emil Berglund" class="q-mx-auto q-my-md" />
            </picture>
          </div>

        </section>
        <section class="full-screen about-section">
          <div class="content">
            <h2 class="q-mx-none text-center">Hvem er jeg?</h2>

            <h3>Som student</h3>
            <article>
              <p>
                Jeg studerer informatikk - Design og utvikling av IT-systemer på HiØ i Halden. Min akademiske
                reise startet høsten 2023, og jeg tar eksamen våren 2026. Jeg har spesialisert meg innen
                programmering og lærer meg Vue og Quasar på fritiden.
              </p>
              <p>
                Som student er jeg lærevillig og liker å utfordre meg selv. Jeg anser meg selv som lett å samarbeide
                med og god på kommunikasjon. Jeg er også veldig fokusert på å levere kvalitet og være stolt av det jeg
                leverer. Generelt er jeg veldig fokusert på struktur og presisjon i arbeidet mitt, noe jeg mener er
                essensielt i programmering og programvareutvikling.
              </p>
              <p>
                Ved siden av studiene jobber jeg ofte på Elkjøp som selger. Jeg har en generell interesse for
                teknologi og elektronikk og liker å holde meg oppdatert på de siste trendene.
              </p>
            </article>

            <h3>Som person</h3>
            <article>
              <p>
                Jeg er {{ new Date().getFullYear() - 2004 }} år gammel og bor i Halden, Norge. Jeg er en person med
                lidenskap for teknologi og et ønske om å lære og vokse. Jeg trives med å oppdage kreative løsninger på
                problemer og liker å eksperimentere med ulike
                tilnærminger for å nå målene mine.
              </p>
              <p>
                Som person er jeg svært ansvarlig, strukturert og presis. På fritiden liker jeg å
                spille videospill, se på filmer og serier, og være sosial, både digitalt og fysisk.
              </p>
              <p>
                Jeg liker å reise rundt i lokalområdet, og tar ofte med meg dronen min for å fange de vakre
                landskapene. Jeg har også en lidenskap for fotografi og elsker å fange øyeblikk som forteller en
                historie.
              </p>
            </article>
          </div>
        </section>

        <!---->
        <TimelineSection />
        <!---->

        <section class="full-screen projects-section" data-aos="fade-up">
          <div class="content">
            <h2>Prosjekter</h2>
            <p>
              Under kan du se en oversikt over prosjekter jeg har jobbet med under studiene. Dette inkluderer både
              skole-
              prosjekter og personlige prosjekter.
            </p>
            <section class="projects-container">
              <ProjectCard :course="ChoreChamp" />
              <ProjectCard :course="VarsEL" />
              <!-- Other projects here-->
              <q-btn class="q-mt-md e-button" to="/projects" router>Se alle prosjekter</q-btn>
            </section>
          </div>
        </section>

        <section class="full-screen skills-section" data-aos="fade-up">
          <div class="content">
            <h2>Kunnskap</h2>
            <p>
              Som datastudent tilegner man seg bred kunnskap innen informasjonsteknologi.
              Under kan du se en oversikt.
            </p>
            <section class="skills-container">
              <h3>Rammeverk:</h3>
              <section class="skills" data-aos="fade-right">
                <div class="skill">
                  <i class="fab fa-vuejs"></i>
                  <p>Vue</p>
                </div>
                <div class="skill">
                  <i class="fab fa-react"></i>
                  <p>React</p>
                </div>
                <div class="skill">
                  <i class="fab fa-react"></i>
                  <p>React Native</p>
                </div>
                <div class="skill">
                  <i class="fas fa-mobile-alt"></i>
                  <p>Expo</p>
                </div>
                <div class="skill">
                  <i class="fab fa-node-js"></i>
                  <p>Node.js</p>
                </div>
                <div class="skill">
                  <img :src="QuasarLogo" alt="" class="q-ma-none q-pa-none self-center"
                    style="width: 21px; height: 24px;" />
                  <p>Quasar</p>
                </div>
                <div class="skill">
                  <i class="fab fa-microsoft"></i>
                  <p>.NET</p>
                </div>
              </section>

              <h3>Front-End:</h3>
              <section class="skills" data-aos="fade-left">
                <div class="skill">
                  <i class="fab fa-html5"></i>
                  <p>HTML</p>
                </div>
                <div class="skill">
                  <i class="fab fa-css3-alt"></i>
                  <p>CSS</p>
                </div>
                <div class="skill">
                  <i class="fab fa-js"></i>
                  <p>JavaScript</p>
                </div>
                <div class="skill">
                  <img :src="TypeScriptLogo" alt="" class="q-ma-none q-pa-none self-center"
                    style="width: 21px; height: 24px; color: #007ACC;" />
                  <p>TypeScript</p>
                </div>
                <div class="skill">
                  <i class="fab fa-sass"></i>
                  <p>SASS</p>
                </div>
              </section>

              <h3>Back-End:</h3>
              <section class="skills" data-aos="fade-right">
                <div class="skill">
                  <i class="fab fa-python"></i>
                  <p>Python</p>
                </div>
                <div class="skill">
                  <i class="fab fa-java"></i>
                  <p>Java</p>
                </div>
                <div class="skill">
                  <i class="fab fa-microsoft"></i>
                  <p>C#</p>
                </div>
              </section>

              <h3>Annet:</h3>
              <section class="skills" data-aos="fade-left">
                <div class="skill">
                  <i class="fab fa-git-alt"></i>
                  <p>Git</p>
                </div>
                <div class="skill">
                  <i class="fab fa-github"></i>
                  <p>GitHub</p>
                </div>
                <div class="skill">
                  <i class="fab fa-microsoft"></i>
                  <p>Azure</p>
                </div>
                <div class="skill">
                  <i class="fab fa-figma"></i>
                  <p>Figma</p>
                </div>
                <div class="skill">
                  <i class="fab fa-trello"></i>
                  <p>Trello</p>
                </div>
                <div class="skill">
                  <i class="fas fa-database"></i>
                  <p>MYSQL</p>
                </div>
                <div class="skill">
                  <i class="fas fa-terminal"></i>
                  <p>C/Shell</p>
                </div>
              </section>
            </section>
          </div>
        </section>

        <section class="full-screen gitHub-section" data-aos="fade-up">
          <GitHubSection />
        </section>

        <SvgSeparator />
        <q-btn v-show="showScrollToTop" flat icon="arrow_upward" @click="scrollToTop" class="scroll-btn" />
      </main>
      <footer>
        <FooterSection />
      </footer>

    </div>
  </q-page>
  <ShootingStars style="z-index: -99 !important;" />
</template>

<script scoped>
import ScrollScript from 'src/scripts/ScrollScript';
import ProjectsList from 'src/scripts/ProjectsList.js';
import SvgSeparator from 'src/components/SvgSeparator.vue';
import FooterSection from 'src/components/FooterSection.vue';
import GitHubSection from 'src/components/GitHubSection.vue';
import NavSection from 'src/components/NavSection.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
import TimelineSection from 'src/components/TimelineSection.vue';
import QuasarLogo from 'src/assets/icons/logo-quasar.svg';
import TypeScriptLogo from 'src/assets/icons/logo-ts.svg';
import ProfilePicture from 'src/assets/images/ProfilePicture_GPT.png';
import ProjectCard from 'src/components/ProjectCard.vue';

export default {
  name: 'IndexPage',
  components: {
    NavSection,
    GitHubSection,
    FooterSection,
    ShootingStars,
    ProjectCard,
    SvgSeparator,
    TimelineSection,
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
      QuasarLogo,
      TypeScriptLogo,
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
