<template>
  <q-page class="columm">
    <div id="bg-app">
      <header id="top" class="text-white">
        <NavSection />
      </header>
      <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
      <main class="flex column">
        <section class="full-screen landing-section">
          <div class="content">
            <article class="about-me">
              <h1>
                Hey! I'm Emil Berglund <br />
                A Computer Science Student
              </h1>
              <p>
                I'm a person with a passion for technology and a drive to learn and grow.
                I believe there are multiple ways to achieve a goal or find a solution, and I enjoy exploring innovative
                approaches to tackle challenges.
              </p>
              <div class="landing-buttons flex row q-mb-md justify-center">
                <a class="q-mb-md" href="https://github.com/EmilB04" target="_blank" aria-label="GitHub Profile">
                  <q-btn color="primary" icon="fab fa-github">
                    <q-tooltip>Visit my GitHub profile</q-tooltip>
                  </q-btn>
                </a>
                <a class="q-mb-md" href="https://www.linkedin.com/in/emil-berglund-336135251/" target="_blank"
                  aria-label="LinkedIn Profile">
                  <q-btn color="primary" icon="fab fa-linkedin">
                    <q-tooltip>Visit my LinkedIn profile</q-tooltip>
                  </q-btn>
                </a>
              </div>
              <q-btn @click="scrollToNextSection" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                <q-icon name="arrow_downward" class="q-mx-md arrow-animate" />
                <q-btn class="justify-end bg-accent" flat rounded label="Take a look around" />
              </q-btn>
            </article>
            <picture>
              <img id="profilePicture" :src="ProfilePicture" alt="Emil Berglund" class="q-mx-auto q-my-md" />
            </picture>
          </div>

        </section>
        <section class="full-screen about-section">
          <div class="content">
            <h2 class="q-mx-none text-center">Who am I?</h2>

            <h3>As a Student</h3>
            <article>
              <p>
                I am studying Computer Science - Design and Development of IT Systems at HiØ in Halden. My academic
                journey started in the fall of 2023, and I will graduate in the spring of 2026. I have specialized in
                programming and am self-learning Vue and Quasar in my spare time.
              </p>
              <p>
                As a student, I am eager to learn and enjoy challenging myself. I consider myself easy to collaborate
                with and good at communication. I am also very focused on delivering quality and being proud of what I
                deliver. In general, I am very focused on structure and precision in my work, which I believe is
                essential in
                programming and software development.
              </p>
              <p>
                Alongside my studies, I frequently work at Elkjøp as a Sales Advisor. I have a general interest in
                technology and electronics and enjoy staying updated on the latest trends.
              </p>
            </article>

            <h3>As a Person</h3>
            <article>
              <p>
                I am {{ new Date().getFullYear() - 2004 }} years old and live in Halden, Norway. I am a person with a
                passion for technology and a drive to learn
                and grow. I thrive on discovering creative solutions to problems and enjoy experimenting with different
                approaches to achieve my goals.
              </p>
              <p>
                As a person, I am very responsible, structured, and precise. In my free time, I like
                playing video games, watching movies and series, and being social, whether digitally or physically.
              </p>
              <p>
                I enjoy traveling around in the local area, often taking my drone with me to capture the beautiful
                landscapes. I also have a passion for photography and love to capture moments that tell a story.
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
                      <h2>Timeline</h2>
                      <p class="q-mx-xl">
                        Here you can follow my journey through the Computer Science program at HiØ.
                        The timeline provides an overview of subjects. <br />
                        Feel free to click on the timeline elements to explore more about each subject.
                        <br /><br />
                        To get started, click the button below.
                      </p>
                      <q-btn class="q-mt-xl" color="accent" label="View Timeline" @click="showLanding = false" />
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
            <h2>Projects</h2>
            <p>
              Below, you can see an overview of projects I have worked on during my studies. This includes both school
              projects and personal projects.
            </p>
            <section class="projects-container">
              <ProjectCard :course="PageProbe" />
              <ProjectCard :course="VarsEL" />
              <!-- Other projects here-->
              <q-btn class="q-mt-md" to="/projects" router>Go to projects</q-btn>
            </section>
          </div>
        </section>

        <section class="full-screen skills-section" data-aos="fade-up">
          <div class="content">
            <h2>Knowledge</h2>
            <p>
              As a Computer Science student, one acquires a broad range of knowledge within information technology.
              Below, you can see an overview.
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
            <h2>Feedback</h2>
            <p>
              Below, you can see
              feedback on my work from previous employers and collaborators I have worked with.
            </p>
            <section id="work-comments">
              <transition :name="commentDirection === 1 ? 'comment-fade-right' : 'comment-fade-left'" mode="out-in">
                <div v-if="WorkComments.length > 0" :key="currentIndex" class="comment">
                  <p>
                    <i class="fas fa-quote-left quote"></i>
                    {{ WorkComments[currentIndex].comment }}
                    <i class="fas fa-quote-right quote"></i>
                  </p>
                  <i class="author">-{{ WorkComments[currentIndex].author }}</i>
                </div>
              </transition>
              <div id="comment-buttons" class="row justify-end">
                <q-btn flat text-color="accent" icon="chevron_left" @click="changeComment(-1)"
                  aria-label="Previous comment" class="comment-button" />
                <q-btn flat text-color="accent" icon="chevron_right" @click="changeComment(1)" aria-label="Next comment"
                  class="comment-button" />
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
