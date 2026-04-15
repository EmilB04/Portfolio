import { ref } from 'vue';
import ProjectsListFallback from 'src/scripts/ProjectsList';

interface Project {
  id: number;
  title: string;
  languages?: string[];
  description: string;
  details: string;
  localPath: string;
  url: string;
  livePage: string;
  images?: string[];
  videos?: string[];
  tags?: string[];
}

export function useProjects() {
  const projects = ref<Project[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchProjects = async () => {
    loading.value = true;
    error.value = null;

    try {
      projects.value = ProjectsListFallback as Project[];
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to load projects';
    } finally {
      loading.value = false;
    }
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
  };
}
