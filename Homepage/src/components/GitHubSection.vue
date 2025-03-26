<template>
  <div class="content">
    <h2>Mine GitHub Repositories</h2>
    <div class="repo-container" v-if="repositories.length">
      <div v-for="repo in repositories" :key="repo.id" class="repo-card">
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">Se repository</a>
      </div>
    </div>
    <div v-else>
      <p class="text-white">Laster repositories...</p>
    </div>
    <q-btn id="goToGithub" unelevated :href="githubProfileUrl" label="Gå til GitHub profil" no-caps target="_blank" />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GitHubSection',
  data() {
    return {
      repositories: [],
      githubProfileUrl: 'https://github.com/EmilB04',
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      const token = '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';
      try {
        const response = await axios.get(
          'https://api.github.com/users/EmilB04/repos',
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        this.repositories = response.data.filter(
          (repo) => repo.stargazers_count > 0
        );
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    },
  }
};
</script>
<style scoped lang="scss">
@import 'src/css/GitHubStyle.scss';
@import 'src/css/IndexStyle.scss';
</style>
