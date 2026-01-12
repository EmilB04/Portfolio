import { ref } from 'vue';
import { client } from 'src/sanity/client';
import { WorkComments as WorkCommentsFallback, randomIndex } from 'src/scripts/WorkComments.js';

interface WorkComment {
  company: string;
  comment: string;
  author: string;
}

export function useComments() {
  const comments = ref<WorkComment[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  const usingSanity = ref(false);

  const fetchComments = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Try to fetch from Sanity first
      const query = `*[_type == "workComment"] | order(_createdAt asc) {
        company,
        comment,
        author
      }`;

      const sanityData = await client.fetch(query);

      if (sanityData && sanityData.length > 0) {
        comments.value = sanityData;
        usingSanity.value = true;
        console.log('✅ Work comments loaded from Sanity');
      } else {
        throw new Error('No data from Sanity');
      }
    } catch (err) {
      // Fallback to local scripts
      console.warn('⚠️ Sanity unavailable, using fallback data for comments:', err);
      comments.value = WorkCommentsFallback;
      usingSanity.value = false;
      error.value = 'Using local data';
    } finally {
      loading.value = false;
    }
  };

  const getRandomIndex = () => {
    return comments.value.length > 0 ? randomIndex() : 0;
  };

  return {
    comments,
    loading,
    error,
    usingSanity,
    fetchComments,
    getRandomIndex,
  };
}
