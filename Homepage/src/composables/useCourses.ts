import { ref } from 'vue';
import courseListFallback from 'src/scripts/CourseList.js';

interface Course {
  name: string;
  link: string;
  code: string;
  description: string;
}

interface CourseSemester {
  semester: string;
  courses: Course[];
}

export function useCourses() {
  const courses = ref<CourseSemester[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchCourses = async () => {
    loading.value = true;
    error.value = null;

    try {
      courses.value = courseListFallback;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to load courses';
    } finally {
      loading.value = false;
    }
  };

  return {
    courses,
    loading,
    error,
    fetchCourses,
  };
}
