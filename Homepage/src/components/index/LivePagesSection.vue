<template>
  <section class="full-screen live-pages-section" data-aos="fade-up">
    <div class="content">
      <h2>Live sider</h2>
      <p class="section-description">
        Her er live sider jeg kjører på Cloudflare Pages. Besøk dem for å se
        prosjektene i aksjon.
      </p>
      <ul class="live-pages-container">
        <li v-for="page in livePages" :key="page.url">
          <article class="live-page-card" @click="openPage(page.url)">
            <div v-if="page.image" class="page-preview">
              <img :src="page.image" :alt="`Skjermbilde av ${page.title}`" loading="lazy" />
            </div>
            <div class="page-info">
              <header class="page-header">
                <h3>{{ page.title }}</h3>
                <div class="page-status" aria-label="Siden er live">
                  <span class="status-dot"></span>
                  <span>Live</span>
                </div>
              </header>
              <p class="page-description">{{ page.description }}</p>
              <footer class="page-footer">
                <div class="page-tags">
                  <span v-for="tag in page.tags" :key="tag" class="tag">{{
                    tag
                    }}</span>
                </div>
                <a :href="page.url" target="_blank" rel="noopener noreferrer" @click.stop class="page-link">
                  Besøk siden
                  <q-icon name="launch" size="xs" />
                </a>
              </footer>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LivePagesSection',
  data() {
    return {
      livePages: [
        {
          title: 'VarsEL',
          description:
            'Et åpent kildekode-prosjekt for enkel visning og henting av strømpriser i Norge. Henter data fra hvakosterstrømmen.no og viser priser per time.',
          url: 'https://varsel.pages.dev',
          image: '/images/projects/VarsEL/dashboard.png',
          tags: ['Vue', 'Quasar', 'Java', 'Strømpriser'],
        },
      ],
    };
  },
  methods: {
    openPage(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';
@import 'src/css/IndexStyle.scss';

.live-pages-section {
  .content {
    text-align: center;
  }

  .section-description {
    text-align: center;
    color: var(--c-text-muted);
    margin-bottom: 2rem;
  }

  .live-pages-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 900px;
    margin: 2rem auto;
    list-style: none;
    padding: 0;

    li {
      height: 100%;
    }
  }

  .live-page-card {
    background-color: var(--c-surface-card);
    border-radius: 12px;
    border: 1px solid var(--c-border);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    cursor: pointer;
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    text-align: left;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba($accent, 0.15);
      border-color: rgba($accent, 0.3);

      .page-preview img {
        transform: scale(1.03);
      }
    }

    .page-preview {
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      background-color: var(--c-border);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        display: block;
      }
    }

    .page-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem 1.5rem 1.25rem;
      flex: 1;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;

      h3 {
        margin: 0;
        color: var(--c-text);
        font-size: 1.2rem;
        line-height: 1.3;
        flex: 1;
      }
    }

    .page-status {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: $positive;
      font-weight: 500;
      flex-shrink: 0;

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $positive;
        animation: pulse 2s infinite;
      }
    }

    @keyframes pulse {

      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0.4;
      }
    }

    .page-description {
      color: var(--c-text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
      flex: 1;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 0.75rem;
      border-top: 1px solid var(--c-border);
    }

    .page-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      .tag {
        font-size: 0.8rem;
        font-weight: 500;
        color: $accent;
        background-color: rgba($accent, 0.1);
        padding: 0.2rem 0.6rem;
        border-radius: 10px;
      }
    }

    .page-link {
      color: $accent;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-shrink: 0;
      transition: gap 0.2s ease-in-out;

      .q-icon {
        transition: transform 0.2s ease-in-out;
      }

      &:hover {
        gap: 0.5rem;

        .q-icon {
          transform: translateX(2px);
        }
      }
    }
  }

  @media (max-width: 600px) {
    .live-pages-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
