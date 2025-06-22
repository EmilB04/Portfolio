<template>
  <q-page class="columm">
    <div id="bg-app">
      <header id="top" class="text-white">
        <NavSection />
      </header>
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <main class="flex column">
        <section class="full-screen about-section">
          <div class="content">
            <picture>
              <img id="profilePicture" :src="ProfilePicture" alt="Emil Berglund" class="q-mx-auto q-my-md" />
            </picture>
            <h1 class="q-mx-none text-left">
              Hei, jeg er Emil Berglund <br />
              En Informatikk student
            </h1>
            <article>
              <p>
                Jeg går studiet, "informatikk - design og utvikling av
                IT-systemer" ved HiØ i Halden. Mitt studieløp startet høsten
                2023 og jeg ferdigeksaminert våren 2026. Jeg har spesielisert meg
                innen Programmering, og driver på smått med selvlæring av Vue og
                Quasar på fritiden.
              </p>
              <p>
                Ved siden av studie jobber jeg hyppig på Elkjøp som
                salgsrådgiver. Jeg har generelt en stor interesse for teknologi
                og elektronikk og liker å holde meg oppdatert på det nyeste. På
                fritiden liker jeg å spille videospill, se på film og serier, og
                være sosial, enten dette er digitalt eller fysisk.
              </p>
              <p>
                Som person er jeg veldig pliktoppfyllende, strukturert og
                nøyaktig. Jeg er også veldig lærevillig og liker å utfordre meg
                selv. Jeg ser på meg selv som en person som er lett å samarbeide
                med og som er flink til å kommunisere. Jeg er også veldig
                opptatt av å levere kvalitet og å være stolt av det jeg leverer.
              </p>
            </article>
          </div>
        </section>
        <section class="timeline-section" data-aos="fade-up">
          <div class="timeline-container">
            <!-- Landingsslide som eget article -->
            <transition name="fade">
              <article v-if="showLanding" class="timeline-landing-article">
                <ul class="row full-height">
                  <li class="col column landing-timeline-slide">
                    <div class="col-12 column items-center justify-center">
                      <h2>Tidslinje</h2>
                      <p>
                        Her kan du følge min reise gjennom informatikkstudiet ved HiØ.<br>
                        Tidslinjen gir deg en oversikt over emner, prosjekter og ferdigheter.<br>
                        Trykk gjerne på tidslinje-elementene for å utforske mer om hvert emne.<br>
                        For å komme i gang trykker du på knappen under.
                      </p>
                      <q-btn class="q-mt-xl" color="accent" label="Se tidslinje" @click="showLanding = false" />
                    </div>
                  </li>
                </ul>
              </article>
            </transition>
            <!-- Tidslinjeartikler, kun synlig når showLanding er false -->
            <article v-for="(semester, index) in CourseList" :key="index" :id="semester.id" v-show="!showLanding"
              @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag"
              @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag" tabindex="0">
              <h2>{{ semester.semester }}</h2>
              <div class="timeline-line"></div>
              <ul class="row full-height">
                <li class="col column" v-for="(course, index) in semester.courses" :key="index"
                  :class="{ reverse: index % 2 !== 0 }">
                  <div class="col-6 column items-center justify-end" :class="{ reverse: index % 2 !== 0 }">
                    <a :href="course.link" style="height: fit-content" target="_blank">
                      {{ course.name }}
                    </a>
                    <span style="height: 40px; width: 2px; background-color: white" />
                  </div>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="!showLanding" class="navigation-buttons">
            <q-btn flat icon="chevron_left" @click="prevSemester" aria-label="Forrige" />
            <q-btn flat icon="chevron_right" @click="nextSemester" aria-label="Neste" />
          </div>
        </section>

        <section class="full-screen projects-section" data-aos="fade-up">
          <div class="content">
            <h2>Prosjekter</h2>
            <p>
              Under vil du kunne se en oversikt over prosjekter jeg har jobbet
              med i løpet av studietiden. Dette inkluderer både skoleprosjekter
              og personlige prosjekter.
            </p>
            <section class="projects-container">
              <ProjectCard :course="PageProbe" />
              <ProjectCard :course="VarsEL" />
              <!-- Other projects here-->
              <q-btn class="q-mt-md" to="/projects" router>Gå til prosjekter</q-btn>
            </section>
          </div>
        </section>

        <section class="full-screen skills-section" data-aos="fade-up">
          <div class="content">
            <h2>Kunnskap</h2>
            <p>
              Som en Informatikk-student tilegner man seg et bredt spekter av
              kunnskap innenfor informasjonsteknologi. Under vil du kunne se en
              oversikt.
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

              <h3>Andre:</h3>
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

        <section class="full-screen comments-section" data-aos="fade-up">
          <div class="content">
            <h2>Tilbakemeldinger</h2>
            <p>
              Vil du få et inntrykk av meg som person? Under vil du kunne se
              tilbakemeldinger på mitt arbeid fra tidligere arbeidsgivere og
              samarbeidspartnere jeg har hatt.
            </p>
            <section id="work-comments">
              <transition :name="commentDirection === 1 ? 'comment-fade-right' : 'comment-fade-left'" mode="out-in">
                <div v-if="WorkComments.length > 0" :key="currentIndex" class="comment">
                  <p>{{ WorkComments[currentIndex].comment }}</p>
                  <i class="author">-{{ WorkComments[currentIndex].author }}</i>
                </div>
              </transition>
              <div id="comment-buttons" class="row justify-end">
                <q-btn flat text-color="accent" icon="chevron_left" @click="changeComment(-1)"
                  aria-label="Forrige kommentar" class="comment-button" />
                <q-btn flat text-color="accent" icon="chevron_right" @click="changeComment(1)"
                  aria-label="Neste kommentar" class="comment-button" />
              </div>
            </section>
          </div>
        </section>

        <SvgSeparator />
        <q-btn flat :icon="isAtBottom ? 'arrow_upward' : 'arrow_downward'" @click="scrollToNextSection"
          class="scroll-btn" />
      </main>
      <footer>
        <FooterSection />
      </footer>

    </div>
    <ShootingStars style="z-index: -99 !important;" />
  </q-page>
</template>

<script scoped>
import ScrollScript from 'src/scripts/ScrollScript';
import IndexScript from 'src/scripts/IndexScript.js';
import ProjectsList from 'src/scripts/ProjectsList.js';
import SvgSeparator from 'src/components/SvgSeparator.vue';
import FooterSection from 'src/components/FooterSection.vue';
import GitHubSection from 'src/components/GitHubSection.vue';
import NavSection from 'src/components/NavSection.vue';
import ShootingStars from 'src/components/ShootingStars.vue';
import QuasarLogo from 'src/assets/icons/logo-quasar.svg';
// import ProfilePicture from 'src/assets/images/ProfilePicture.jpg';
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
  },
  mixins: [IndexScript, ScrollScript, ProjectsList],
  computed: {
    PageProbe() {
      return ProjectsList[0];
    },
    VarsEL() {
      return ProjectsList[1];
    },
  },
  data() {
    return {
      QuasarLogo,
      ProfilePicture,
      showLanding: true,
      isDragging: false,
      dragStartX: 0,
      dragDeltaX: 0,
      commentDirection: 1,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.ChangeButtonLabel);
    this.scrollToSemester();
    this.startCommentRotation();
    this.ChangeButtonLabel();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.ChangeButtonLabel);
    clearInterval(this.commentInterval);
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      this.dragStartX = e.type.startsWith('touch')
        ? e.touches[0].clientX
        : e.clientX;
      this.dragDeltaX = 0;
    },
    onDrag(e) {
      if (!this.isDragging) return;
      const clientX = e.type.startsWith('touch')
        ? e.touches[0].clientX
        : e.clientX;
      this.dragDeltaX = clientX - this.dragStartX;
    },
    endDrag() {
      if (!this.isDragging) return;
      // Snap threshold (px)
      if (this.dragDeltaX > 50) {
        this.prevSemester && this.prevSemester();
      } else if (this.dragDeltaX < -50) {
        this.nextSemester && this.nextSemester();
      }
      this.isDragging = false;
      this.dragDeltaX = 0;
    },
    hideLanding() {
      this.showLanding = false;
    },
    nextSlide() {
      const totalSlides = this.repositories.length;
      this.currentSlide = (this.currentSlide + 1) % totalSlides;
      this.hideLanding();
      this.updateCarousel();
    },
    prevSlide() {
      const totalSlides = this.repositories.length;
      this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
      this.hideLanding();
      this.updateCarousel();
    },
    updateCarousel() {
      const carousel = this.$refs.carousel;
      const slideWidth = carousel.clientWidth;
      carousel.scrollLeft = this.currentSlide * slideWidth;
    },
    changeComment(dir) {
      this.commentDirection = dir;
      const len = this.WorkComments.length;
      this.currentIndex = (this.currentIndex + dir + len) % len;
    },
  }
};

</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
</style>
