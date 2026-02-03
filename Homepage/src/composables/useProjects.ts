import { ref } from 'vue';
import { client } from 'src/sanity/client';
import ProjectsListFallback from 'src/scripts/ProjectsList.js';

interface Project {
  id: number;
  title: string;
  languages?: string[];
  description: string;
  details: string;
  localPath: string;
  url: string;
  images?: string[];
  videos?: string[];
  tags?: string[];
}

export function useProjects() {
  const projects = ref<Project[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  const usingSanity = ref(false);

  const fetchProjects = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Try to fetch from Sanity first
      const query = `*[_type == "project"] | order(_createdAt asc) {
        "id": _id,
        title,
        languages,
        description,
        details,
        localPath,
        url,
        "images": images[].asset->url,
        "videos": videos[].asset->url,
        tags
      }`;

      const sanityData = await client.fetch(query);

      if (sanityData && sanityData.length > 0) {
        projects.value = sanityData.map((project: Project, index: number) => ({
          ...project,
          id: index, // Use index as id if not provided
          images: project.images || [],
          videos: project.videos || [],
          tags: project.tags || [],
        }));
        usingSanity.value = true;
        console.log('✅ Projects loaded from Sanity');
      } else {
        throw new Error('No data from Sanity');
      }
    } catch (err) {
      // Fallback to local scripts
      console.warn('⚠️ Sanity unavailable, using fallback data for projects:', err);
      projects.value = ProjectsListFallback as Project[];
      usingSanity.value = false;
      error.value = 'Using local data';
    } finally {
      loading.value = false;
    }
  };

  return {
    projects,
    loading,
    error,
    usingSanity,
    fetchProjects,
  };
}
