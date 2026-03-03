<template>
  <section class="full-screen gitHub-section" data-aos="fade-up">
    <div class="content">
      <h2>Se utvalgte repositories</h2>
      <p class="section-description">
        Her er noen av mine mest aktive prosjekter på GitHub. Besøk min profil
        for å se alle repositories.
      </p>
      <ul class="repo-container" v-if="repositories.length">
        <li v-for="repo in repositories" :key="repo.id">
          <article class="repo-card" @click="openRepository(repo.html_url)">
            <header class="repo-header">
              <h3>{{ repo.name }}</h3>
              <div class="repo-stats" aria-label="Repository statistics">
                <span v-if="repo.stargazers_count > 0" class="stat">
                  <q-icon name="star" size="xs" />
                  {{ repo.stargazers_count }}
                </span>
                <span v-if="repo.forks_count > 0" class="stat">
                  <q-icon name="fork_right" size="xs" />
                  {{ repo.forks_count }}
                </span>
              </div>
            </header>
            <p class="repo-description">
              {{ repo.description || 'Ingen beskrivelse tilgjengelig' }}
            </p>
            <footer class="repo-footer">
              <span v-if="repo.language" class="language">{{
                repo.language
                }}</span>
              <a :href="repo.html_url" target="_blank" @click.stop class="repo-link">
                Se repository
                <q-icon name="launch" size="xs" />
              </a>
            </footer>
          </article>
        </li>
      </ul>
      <div v-else class="loading-state">
        <q-spinner color="accent" size="3rem" />
        <p>Laster repositories...</p>
      </div>
      <q-btn class="e-button q-mt-lg" unelevated rounded no-caps color="accent" text-color="black"
        :href="githubProfileUrl" label="Gå til GitHub" target="_blank" />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GitHubSection',
  data() {
    return {
      repositories: [],
      githubProfileUrl: 'https://github.com/EmilB04',
      blacklistedRepos: ['EmilB04', 'Kommunikasjonsdesign'],
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      try {
        const response = await axios.get(
          'https://api.github.com/users/EmilB04/repos',
        );
        this.repositories = response.data
          .filter((repo) => !this.blacklistedRepos.includes(repo.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 8);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    },
    openRepository(url) {
      window.open(url, '_blank');
    },
  },
};
</script>
<style scoped lang="scss">
@import 'src/css/GitHubStyle.scss';
@import 'src/css/IndexStyle.scss';
</style>
