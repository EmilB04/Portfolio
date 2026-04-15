# Data Management System

This project uses local script files as the data source.

## Data Sources

- `/src/scripts/CourseList.js`
- `/src/scripts/ProjectsList.js`
- `/src/scripts/WorkComments.js`

## Architecture

### Composables (Vue 3 Composition API)

- **`useCourses()`** - Loads course data from local script files
- **`useProjects()`** - Loads project data from local script files
- **`useComments()`** - Loads work comments from local script files

## Usage

### In Vue Components

```typescript
import { useCourses } from 'src/composables/useCourses';
import { useProjects } from 'src/composables/useProjects';
import { useComments } from 'src/composables/useComments';

export default {
  setup() {
    const { courses, loading, error, fetchCourses } = useCourses();
    const { projects, fetchProjects } = useProjects();
    const { comments, fetchComments } = useComments();

    onMounted(async () => {
      await fetchCourses();
      await fetchProjects();
      await fetchComments();
    });

    return {
      courses,
      projects,
      comments,
      loading,
      error,
    };
  },
};
```

## Benefits

✅ **Simple** - No external CMS setup required
✅ **Predictable** - All data lives in version control
✅ **Type-safe** - TypeScript interfaces for data structures
✅ **Fast** - Local data loading with minimal overhead
