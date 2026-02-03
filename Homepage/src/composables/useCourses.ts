import { ref } from 'vue';
import { client } from 'src/sanity/client';
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
  const usingSanity = ref(false);

  const fetchCourses = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Try to fetch from Sanity first
      const query = `*[_type == "courseSemester"] | order(_createdAt asc) {
        "semester": title,
        "courses": courses[]-> {
          "name": title,
          "link": url,
          code,
          description
        }
      }`;

      const sanityData = await client.fetch(query);

      if (sanityData && sanityData.length > 0) {
        courses.value = sanityData;
        usingSanity.value = true;
        console.log('✅ Courses loaded from Sanity');
      } else {
        throw new Error('No data from Sanity');
      }
    } catch (err) {
      // Fallback to local scripts
      console.warn('⚠️ Sanity unavailable, using fallback data for courses:', err);
      courses.value = courseListFallback;
      usingSanity.value = false;
      error.value = 'Using local data';
    } finally {
      loading.value = false;
    }
  };

  return {
    courses,
    loading,
    error,
    usingSanity,
    fetchCourses,
  };
}
