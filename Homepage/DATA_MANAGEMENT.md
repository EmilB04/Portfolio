# Data Management System

This project uses **Sanity CMS** as the primary data source with automatic fallback to local JavaScript files if Sanity is unavailable.

## Architecture

### Composables (Vue 3 Composition API)

Three composables handle data fetching with automatic fallback:

- **`useCourses()`** - Fetches course data
- **`useProjects()`** - Fetches project data
- **`useComments()`** - Fetches work comments

### Data Flow

```
1. Try to fetch from Sanity CMS
   ↓
2. If successful → Use Sanity data
   ↓
3. If failed → Fall back to local scripts
   ↓
4. Return data to component
```

## Usage

### In Vue Components

```typescript
import { useCourses } from 'src/composables/useCourses';
import { useProjects } from 'src/composables/useProjects';
import { useComments } from 'src/composables/useComments';

export default {
  setup() {
    const { courses, loading, error, usingSanity, fetchCourses } = useCourses();
    const { projects, fetchProjects } = useProjects();
    const { comments, fetchComments } = useComments();

    onMounted(async () => {
      await fetchCourses();
      await fetchProjects();
      await fetchComments();

      console.log('Using Sanity:', usingSanity.value);
    });

    return {
      courses,
      projects,
      comments,
      loading,
    };
  }
}
```

## Sanity Schema Types

### Course
- title (string)
- description (text)
- semester (reference to courseSemester)
- url (url)
- code (string)

### CourseSemester
- title (string)
- courses (array of course references)

### Project
- title (string)
- languages (array of strings)
- description (text)
- details (text)
- localPath (string)
- url (url)
- images (array of images)
- videos (array of files)
- tags (array of strings)

### WorkComment
- company (string)
- comment (text)
- author (string)

## Fallback Data

If Sanity is unavailable, the system falls back to:
- `/src/scripts/CourseList.js`
- `/src/scripts/ProjectsList.js`
- `/src/scripts/WorkComments.js`

## Benefits

✅ **Resilient** - Always works, even if Sanity is down
✅ **Flexible** - Easy to switch between Sanity and local data
✅ **Developer-friendly** - Clear console logs indicate data source
✅ **Type-safe** - TypeScript interfaces for all data structures
✅ **Maintainable** - Single source of truth for data fetching logic

## Development

### Start Sanity Studio

```bash
cd portfolio-backend
npm run dev
```

### Check Data Source

The console will log:
- `✅ Courses loaded from Sanity` - Using Sanity
- `⚠️ Sanity unavailable, using fallback data` - Using local files

## Migration Path

To fully migrate to Sanity:

1. Start Sanity Studio: `cd portfolio-backend && npm run dev`
2. Add your data through the Studio interface
3. The composables will automatically use Sanity data
4. Once all data is in Sanity, you can optionally remove the fallback files
