<template>
  <section class="full-screen skills-section" data-aos="fade-up">
    <div class="content">
      <h2>Kunnskap</h2>
      <p>
        Som datastudent tilegner man seg bred kunnskap innen
        informasjonsteknologi. Under kan du se en oversikt.
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
            <img
              :src="quasarLogo"
              alt=""
              class="q-ma-none q-pa-none self-center"
              style="width: 21px; height: 24px"
            />
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
            <img
              :src="typeScriptLogo"
              alt=""
              class="q-ma-none q-pa-none self-center"
              style="width: 21px; height: 24px; color: #007acc"
            />
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
</template>

<script>
import QuasarLogo from 'src/assets/icons/logo-quasar.svg';
import TypeScriptLogo from 'src/assets/icons/logo-ts.svg';

export default {
  name: 'SkillsSection',
  data() {
    return {
      quasarLogo: QuasarLogo,
      typeScriptLogo: TypeScriptLogo,
    };
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
</style>
