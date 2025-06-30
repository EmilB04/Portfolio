<template>
  <div class="content">
    <h2>View Selected Repositories</h2>
    <div class="repo-container" v-if="repositories.length">
      <div v-for="repo in repositories" :key="repo.id" class="repo-card">
        <h3 class="text-black">{{ repo.name }}</h3>
        <p class="text-black">{{ repo.description }}</p>
        <a class="text-accent" :href="repo.html_url" target="_blank">View Repository</a>
      </div>
    </div>
    <div v-else>
      <p class="text-white">Loading repositories...</p>
    </div>
    <q-btn id="goToGithub" unelevated :href="githubProfileUrl" label="Go to GitHub" no-caps target="_blank" />
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
      try {
        const response = await axios.get(
          'https://api.github.com/users/EmilB04/repos'
        );
        // Sort by updated_at (descending), then take the top 8
        this.repositories = response.data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 8);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import 'src/css/GitHubStyle.scss';
@import 'src/css/IndexStyle.scss';
</style>
