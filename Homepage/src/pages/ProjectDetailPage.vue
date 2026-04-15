<template>
  <q-page class="column">
    <div v-if="project">
      <header>
        <NavSection />
      </header>
      <q-separator class="bg-white q-mx-auto page-separator" />
      <main class="full-screen project-detail-section items-center">
        <div class="content">
          <div class="title-section q-mb-md">
            <h1>{{ project.title }}</h1>
            <div v-if="project.languages && project.languages.length > 0" class="languages-overview">
              <div v-for="language in project.languages" :key="language" class="language-icon" :title="language">
                <div v-if="getLanguageIcon(language).startsWith('<svg')" class="icon-svg"
                  v-html="getLanguageIcon(language)"></div>
                <i v-else :class="getLanguageIcon(language)"></i>
                <span class="language-label">{{ language }}</span>
              </div>
            </div>
          </div>
          <p>{{ project.details }}</p>
          <div v-if="mediaItems.length > 0" class="images-container q-mb-md">
            <div class="carousel-wrapper">
              <div class="swipe-hint text-center q-mb-sm" v-if="mediaItems.length > 1">
                <q-icon name="swipe" size="sm" class="q-mr-xs" />
                Sveip eller bruk piler for å navigere ({{ slide + 1 }}/{{ mediaItems.length }})
              </div>
              <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                control-color="white" control-type="flat" control-text-color="white" navigation
                navigation-position="bottom" navigation-icon="radio_button_unchecked"
                navigation-active-icon="radio_button_checked" padding arrows height="auto"
                class="bg-transparent rounded-borders carousel-enhanced">
                <q-carousel-slide v-for="(media, index) in mediaItems" :key="index" :name="index"
                  class="column no-wrap flex-center">
                  <q-img v-if="media.type === 'image'" :src="media.src" :alt="`${project.title} - Image ${index + 1}`"
                    fit="contain" class="carousel-image project-image" />
                  <video v-else-if="media.type === 'video'" :src="media.src" autoplay muted loop
                    class="carousel-video project-video">
                    Your browser does not support the video tag.
                  </video>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
          <q-img v-else-if="project.image" :src="project.image" :alt="project.title" class="q-mb-md project-image" />
          <div class="flex flex-wrap q-gutter-sm q-mb-md">
            <q-chip v-for="tag in project.tags" :key="tag" clickable @click="copyToClipboard(tag)">
              {{ tag }}
            </q-chip>
          </div>
          <div class="flex justify-center">
            <q-btn class="bg-accent q-mt-xl e-button" flat rounded label="Gå til prosjektet" :href="project.url"
              target="_blank" />
          </div>
        </div>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>

    <div v-else>
      <ErrorNotFound />
    </div>
    <ShootingStars class="shooting-stars-bg" />
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import ProjectsList from 'src/scripts/ProjectsList.js';
import ErrorNotFound from './ErrorNotFound.vue';
import FooterSection from 'src/components/FooterSection.vue';
import { useQuasar } from 'quasar';
import ShootingStars from 'src/components/ShootingStars.vue';
import NavSection from 'src/components/NavSection.vue';

const $q = useQuasar();
const route = useRoute();
const slug = route.params.project;
const project = ProjectsList.find((p) => p.localPath === slug);

useMeta(() => {
  const title = project
    ? `${project.title} – Emil Berglund`
    : 'Prosjekt – Emil Berglund';
  const description = project
    ? project.description
    : 'Prosjektdetaljer fra Emil Berglunds portfolio.';
  const url = `https://emilb.pages.dev/projects/${slug}`;
  const image = project?.images?.[0] && project.images[0].startsWith('http')
    ? project.images[0]
    : 'https://emilb.pages.dev/images/og-image.jpg';
  return {
    title,
    meta: {
      description: { name: 'description', content: description },
      ogTitle: { property: 'og:title', content: title },
      ogDescription: { property: 'og:description', content: description },
      ogUrl: { property: 'og:url', content: url },
      ogImage: { property: 'og:image', content: image },
      twitterTitle: { name: 'twitter:title', content: title },
      twitterDescription: { name: 'twitter:description', content: description },
    },
    link: {
      canonical: { rel: 'canonical', href: url },
    },
  };
});

// Carousel slide state
const slide = ref(0);

// Combine images and videos into a single media array
const mediaItems = computed(() => {
  if (!project) return [];

  const items = [];

  // Add images
  if (project.images && project.images.length > 0) {
    project.images.forEach(image => {
      items.push({ type: 'image', src: image });
    });
  }

  // Add videos
  if (project.videos && project.videos.length > 0) {
    project.videos.forEach(video => {
      items.push({ type: 'video', src: video });
    });
  }

  // Fallback to single image if exists
  if (items.length === 0 && project.image) {
    items.push({ type: 'image', src: project.image });
  }

  return items;
});

function copyToClipboard(tag) {
  navigator.clipboard.writeText(tag).then(() => {
    $q.notify({
      type: 'positive',
      position: 'top',
      classes: 'text-white',
      message: `"${tag}" copied to clipboard!`,
      timeout: 1200,
    });
  });
}

function getLanguageIcon(language) {
  const iconMap = {
    'React Native': 'fab fa-react',
    'JavaScript': 'fab fa-js-square',
    'TypeScript': 'fab fa-js-square', // TypeScript doesn't have a specific icon, using JS
    'Figma': 'fab fa-figma',
    'Vue': 'fab fa-vuejs',
    'Vue.js': 'fab fa-vuejs',
    'React': 'fab fa-react',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'SCSS': 'fab fa-sass',
    'Java': 'fab fa-java',
    'C#': 'fab fa-microsoft',
    '.NET': 'fab fa-microsoft',
    'Python': 'fab fa-python',
    'Node.js': 'fab fa-node-js',
    'Quasar': `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M586.2 512a74.2 74.2 0 01-148.4 0 74.2 74.2 0 11148.4 0z"/>
      <path d="M841.3 321.8a378.5 378.5 0 00-58.3-76.2l-85.7 49.5a286 286 0 00-89.6-51.9 348.6 348.6 0 00-69.3 98.9c95.5-6.5 194.1 28 285.6 99.6l53.9-31.1c-8.3-31-20.7-60.9-36.6-88.8z"/>
      <path d="M512 892.3c32.1-.1 64-4.2 95.2-12.4v-99a284 284 0 0089.7-51.6 352.3 352.3 0 00-51-109.5c-42.1 86-121.3 154-229 197.6v62.3a382 382 0 0095.1 12.6z"/>
      <path d="M182.7 321.9a373.6 373.6 0 00-36.8 88.6l85.7 49.5a285.2 285.2 0 00-.2 103.4A350 350 0 00351.7 574c-53.4-79.4-72.8-182.1-56.6-297.1l-53.9-31.1a376.9 376.9 0 00-58.5 76.1z"/>
      <path d="M841.3 702.1c16-27.8 28.4-57.6 36.8-88.6L792.5 564c6.4-34.5 6.4-69.6.2-103.4-40.3-10.6-80.6-14.1-120.3-10.6 53.4 79.4 72.8 182.1 56.6 297.1l53.9 31.1a375.6 375.6 0 0058.4-76.1z"/>
      <path d="M182.7 702.1a378.5 378.5 0 0058.3 76.2l85.7-49.5a286 286 0 0089.6 51.9 348.6 348.6 0 0069.3-98.9c-95.5 6.5-194.1-28-285.6-99.6l-54 31.1c8.4 31.1 20.8 61 36.7 88.8z"/>
      <path d="M512 131.7c-32.1.1-64 4.2-95.2 12.4v99a284 284 0 00-89.7 51.6c11 40.2 28.2 76.9 51 109.5 42.1-86 121.3-154 229-197.6v-62.3c-30.9-8.2-63-12.4-95.1-12.6z"/>
      <path d="M512 66.4c245.7 0 445.6 199.9 445.6 445.6S757.7 957.6 512 957.6 66.4 757.7 66.4 512 266.3 66.4 512 66.4M512 1a511 511 0 100 1022A511 511 0 00512 1z"/>
    </svg>`,
    'Android': 'fab fa-android',
    'iOS': 'fab fa-apple',
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'npm': 'fab fa-npm',
    'dotnet8': 'fab fa-microsoft', // Using Microsoft icon for .NET
    'C++': 'fas fa-code', // Generic code icon for C++
    'C': 'fas fa-code', // Generic code icon for C
    'Ruby': 'fas fa-gem', // Using gem icon for Ruby
    'PHP': 'fab fa-php',
    'Swift': 'fas fa-swift', // Using Swift icon
    'Kotlin': 'fas fa-code', // Generic code icon for Kotlin
    'Dart': 'fas fa-code', // Generic code icon for Dart
    'Flutter': 'fas fa-code', // Generic code icon for Flutter
    'SQL': 'fas fa-database', // Using database icon for SQL
    'MySQL': 'fas fa-database',
    'PostgreSQL': 'fas fa-database',
    'MongoDB': 'fas fa-database',
    'Firebase': 'fas fa-fire', // Using fire icon for Firebase
    'Expo': 'fas fa-code', // Generic code icon for Expo
  };

  return iconMap[language] || 'fas fa-code'; // Default to generic code icon
}
</script>

<style setup scoped lang="scss">
@import 'src/css/app.scss';
@import 'src/css/quasar.variables.scss';

// Page separator styling
.page-separator {
  max-width: 1280px;
}

.full-screen {
  backdrop-filter: blur(5px);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 50px;
  overflow: hidden;

  @media (max-width: $breakpoint-sm-max) {
    padding-inline: 20px;
  }
}

// Project image styling
.project-image {
  max-height: 80vh;
  border-radius: 8px;
}

// Project video styling
.project-video {
  max-height: 80vh;
  border-radius: 8px;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

a {
  padding: $e-button-padding;
}

// Title and languages section
.title-section {
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }
}

.languages-overview {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: baseline;

  .language-icon {
    position: relative;
    background: var(--c-border);
    border: 1px solid $accent;
    border-radius: 8px;
    padding: 0.75rem;
    transition: all 0.3s ease;
    cursor: pointer;

    i {
      font-size: 1.5rem;
      color: $accent;
      display: block;
    }

    .icon-svg {
      width: 24px;
      height: 24px;
      color: $accent;
      display: block;

      svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    }

    .language-label {
      position: absolute;
      bottom: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: $accent;
      color: white;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      z-index: 10;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      &::before {
        content: '';
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid $accent;
      }
    }

    &:hover {
      background: rgba(241, 55, 110, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(241, 55, 110, 0.3);

      .language-label {
        opacity: 1;
        bottom: -40px;
      }
    }

    &:active {
      transform: translateY(0px) scale(0.95);

      .language-label {
        opacity: 1;
        bottom: -40px;
      }
    }
  }
}

.carousel-wrapper {
  position: relative;
  min-height: 70vh;
  display: flex;
  flex-direction: column;

  .swipe-hint {
    font-size: 0.9rem;
    opacity: 0.8;
    font-weight: 500;
    flex-shrink: 0;

    .q-icon {
      vertical-align: middle;
    }
  }

  .carousel-enhanced {

    // Enhanced navigation dots
    :deep(.q-carousel__navigation) {
      .q-btn {
        color: white;
        background: $accent;
        margin: 0 4px;
        min-width: 12px;
        min-height: 12px;
        border-radius: 50%;
        transition: all 0.3s ease;

        &.q-btn--active {
          transform: scale(1.2);
        }

        .q-icon {
          font-size: 12px;
        }
      }
    }

    // Enhanced arrow buttons
    :deep(.q-carousel__control) {
      .q-btn {
        background: $accent;
        color: white;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .carousel-image {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  .carousel-video {
    max-width: 80vw;
    max-height: 90vh;
    border-radius: 8px;
    cursor: pointer;
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .swipe-hint {
    font-size: 0.8rem;
  }

  .carousel-enhanced {
    :deep(.q-carousel__navigation) {
      .q-btn {
        min-width: 10px;
        min-height: 10px;
        margin: 0 3px;

        .q-icon {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
